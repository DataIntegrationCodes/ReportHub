import Link from 'next/link';
import { getAllUpdates, getUpdateBySlug } from '../../../lib/updates';

export async function generateStaticParams() {
  const updates = getAllUpdates();
  return updates.map((update) => ({ slug: update.slug }));
}

export default function UpdatePage({ params }) {
  const update = getUpdateBySlug(params.slug);

  return (
    <main>
      <Link href="/" className="back-link">&larr; All updates</Link>
      <span className="update-date">{update.date}</span>
      <h1>{update.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: update.contentHtml }} />
    </main>
  );
}
