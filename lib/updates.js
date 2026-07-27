import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const updatesDirectory = path.join(process.cwd(), 'content/updates');

export function getAllUpdates() {
  const filenames = fs.readdirSync(updatesDirectory);

  const updates = filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const fullPath = path.join(updatesDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return { slug, ...data };
    });

  return updates.sort((a, b) => (a.date < b.date ? 1 : -1));
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
  const contentHtml = marked.parse(content);
  const update = { slug, ...data, contentHtml };

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
