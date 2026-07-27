import matter from 'gray-matter';

const OWNER = 'DataIntegrationCodes';
const REPO = 'ReportHub';

function replaceNotesSection(body, newContent) {
  const lines = body.split('\n');
  const newLines = [];
  let inNotesSection = false;
  let replaced = false;

  for (const line of lines) {
    const headingMatch = line.match(/^## (.+)$/);
    if (headingMatch) {
      inNotesSection = headingMatch[1].trim() === 'Reviewer Notes';
      newLines.push(line);
      if (inNotesSection) {
        newLines.push('', newContent.trim());
        replaced = true;
      }
      continue;
    }
    if (!inNotesSection) {
      newLines.push(line);
    }
  }

  if (!replaced) {
    newLines.push('', '## Reviewer Notes', '', newContent.trim());
  }

  return newLines.join('\n');
}

export async function POST(request) {
  const { slug, content, status, password } = await request.json();

  if (!password || password !== process.env.EDIT_PASSWORD) {
    return Response.json({ error: 'Invalid edit password.' }, { status: 401 });
  }

  if (typeof slug !== 'string' || typeof content !== 'string') {
    return Response.json({ error: 'Missing slug or content.' }, { status: 400 });
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

  const newBody = replaceNotesSection(body, content);
  const newData = { ...data, notesStatus: status === 'final' ? 'final' : 'draft' };
  const newFileText = matter.stringify(newBody, newData);

  const putRes = await fetch(apiUrl, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      message: `Update reviewer notes for ${slug}`,
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
