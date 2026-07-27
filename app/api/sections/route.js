import matter from 'gray-matter';

const OWNER = 'DataIntegrationCodes';
const REPO = 'ReportHub';

function replaceSection(body, sectionTitle, newContent) {
  const lines = body.split('\n');
  const headingIndices = [];

  lines.forEach((line, idx) => {
    if (/^## (.+)$/.test(line)) {
      headingIndices.push(idx);
    }
  });

  let start;
  let end;

  if (sectionTitle === 'Overview') {
    start = 0;
    end = headingIndices.length > 0 ? headingIndices[0] : lines.length;
  } else {
    const targetHeadingIdx = headingIndices.find(
      (idx) => lines[idx].match(/^## (.+)$/)[1].trim() === sectionTitle
    );

    if (targetHeadingIdx === undefined) {
      return lines.concat(['', `## ${sectionTitle}`, '', newContent.trim()]).join('\n');
    }

    start = targetHeadingIdx + 1;
    const nextHeadingIdx = headingIndices.find((idx) => idx > targetHeadingIdx);
    end = nextHeadingIdx !== undefined ? nextHeadingIdx : lines.length;
  }

  const before = lines.slice(0, start);
  const after = lines.slice(end);
  const replacement = sectionTitle === 'Overview' ? [newContent.trim(), ''] : ['', newContent.trim()];

  return [...before, ...replacement, ...after].join('\n');
}

export async function POST(request) {
  const { slug, sectionTitle, content, status, password } = await request.json();

  if (!password || password !== process.env.EDIT_PASSWORD) {
    return Response.json({ error: 'Invalid edit password.' }, { status: 401 });
  }

  if (typeof slug !== 'string' || typeof sectionTitle !== 'string' || typeof content !== 'string') {
    return Response.json({ error: 'Missing slug, section, or content.' }, { status: 400 });
  }

  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    return Response.json({ error: 'Server is not configured for saving.' }, { status: 500 });
  }

  const filePath = `content/updates/${slug}.md`;
  const apiUrl = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${filePath}`;
  const headers = {
    Authorization: `Bearer ${githubToken}`,
    Accept: 'application/vnd.github+json',
  };

  const getRes = await fetch(apiUrl, { headers });
  if (!getRes.ok) {
    return Response.json({ error: 'Could not read the current report file.' }, { status: 500 });
  }

  const fileData = await getRes.json();
  const currentText = Buffer.from(fileData.content, 'base64').toString('utf8');
  const { data, content: body } = matter(currentText);

  const newBody = replaceSection(body, sectionTitle, content);
  const newData = { ...data };
  if (sectionTitle === 'Reviewer Notes') {
    newData.notesStatus = status === 'final' ? 'final' : 'draft';
  }
  const newFileText = matter.stringify(newBody, newData);

  const putRes = await fetch(apiUrl, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      message: `Update "${sectionTitle}" section for ${slug}`,
      content: Buffer.from(newFileText, 'utf8').toString('base64'),
      sha: fileData.sha,
    }),
  });

  if (!putRes.ok) {
    const errBody = await putRes.text();
    return Response.json({ error: `GitHub commit failed: ${errBody}` }, { status: 500 });
  }

  return Response.json({ ok: true });
}
