import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllUpdates, getUpdateBySlug, monthLabel } from '../../../lib/updates';
import TabbedReport from './TabbedReport';

export async function generateStaticParams() {
  const updates = getAllUpdates();
  return updates.map((update) => ({ slug: update.slug }));
}

export default function UpdatePage({ params }) {
  const update = getUpdateBySlug(params.slug);
  if (!update) notFound();

  const isMonthly = update.type === 'monthly';

  return (
    <main className={isMonthly ? 'wide' : undefined}>
      <Link href={`/months/${update.month}`} className="back-link">
        &larr; {monthLabel(update.month)}
      </Link>
      <span className="update-date">{update.date}</span>
      <h1>{update.title}</h1>
      {isMonthly && update.xlsx && (
        <p>
          <a className="download-btn" href={update.xlsx} download>
            Download Excel (.xlsx)
          </a>
        </p>
      )}
      {update.sections ? (
        <TabbedReport sections={update.sections} slug={update.slug} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: update.contentHtml }} />
      )}
    </main>
  );
}
