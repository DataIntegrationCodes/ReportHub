import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const updatesDirectory = path.join(process.cwd(), 'content/updates');

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// month is 'YYYY-MM'
export function monthLabel(month) {
  const [year, m] = month.split('-');
  return `${MONTH_NAMES[Number(m) - 1]} ${year}`;
}

// A file belongs to the month in its `month` frontmatter, otherwise the month of its date.
function monthOf(data) {
  if (data.month) return String(data.month);
  // YAML parses an unquoted date as a Date object
  const date = data.date instanceof Date ? data.date.toISOString() : String(data.date);
  return date.slice(0, 7);
}

export function isMonthComplete(month) {
  const [year, m] = month.split('-').map(Number);
  // Date.UTC's month index is 0-based, so passing the 1-based month gives the first day of the next month.
  return Date.now() >= Date.UTC(year, m, 1);
}

// Monthly reports only appear once their month has ended; weekly updates always appear.
function isPublished(data) {
  return data.type !== 'monthly' || isMonthComplete(monthOf(data));
}

export function getAllUpdates() {
  const filenames = fs.readdirSync(updatesDirectory);

  const updates = filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const fullPath = path.join(updatesDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return { slug, ...data, type: data.type || 'weekly', month: monthOf(data) };
    })
    .filter((update) => isPublished(update));

  return updates.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Month "folders", newest first. Each holds that month's weekly updates and, if published, its monthly report.
export function getMonths() {
  const groups = new Map();

  for (const update of getAllUpdates()) {
    if (!groups.has(update.month)) {
      groups.set(update.month, {
        month: update.month,
        label: monthLabel(update.month),
        complete: isMonthComplete(update.month),
        monthly: null,
        weeklies: [],
      });
    }
    const group = groups.get(update.month);
    if (update.type === 'monthly') {
      group.monthly = update;
    } else {
      group.weeklies.push(update);
    }
  }

  return Array.from(groups.values()).sort((a, b) => (a.month < b.month ? 1 : -1));
}

export function getMonth(month) {
  return getMonths().find((group) => group.month === month) || null;
}

function splitIntoSections(markdownContent) {
  const lines = markdownContent.split('\n');
  const sections = [];
  let currentTitle = 'Overview';
  let currentLines = [];

  for (const line of lines) {
    const match = line.match(/^## (.+)$/);
    if (match) {
      sections.push({ title: currentTitle, raw: currentLines.join('\n') });
      currentTitle = match[1].trim();
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }
  sections.push({ title: currentTitle, raw: currentLines.join('\n') });

  return sections;
}

export function getUpdateBySlug(slug) {
  const fullPath = path.join(updatesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  if (!isPublished(data)) return null;

  const contentHtml = marked.parse(content);
  const update = { slug, ...data, type: data.type || 'weekly', month: monthOf(data), contentHtml };

  if (data.layout === 'tabs') {
    const rawSections = splitIntoSections(content);

    update.sections = rawSections.map((section) => ({
      title: section.title,
      raw: section.raw.trim(),
      contentHtml: marked.parse(section.raw),
      hasStatus: section.title === 'Reviewer Notes',
      status: section.title === 'Reviewer Notes' ? (data.notesStatus === 'final' ? 'final' : 'draft') : undefined,
    }));
  }

  return update;
}
