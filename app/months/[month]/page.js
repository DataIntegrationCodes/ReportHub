import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMonths, getMonth } from '../../../lib/updates';

export async function generateStaticParams() {
  return getMonths().map((group) => ({ month: group.month }));
}

export default function MonthPage({ params }) {
  const group = getMonth(params.month);
  if (!group) notFound();

  const months = getMonths();

  return (
    <main>
      <Link href="/" className="back-link">&larr; All months</Link>
      <h1>{group.label}</h1>

      <nav className="month-nav" aria-label="Months">
        {months.map((m) => (
          <Link
            key={m.month}
            href={`/months/${m.month}`}
            className={`tab-button${m.month === group.month ? ' active' : ''}`}
          >
            {m.label}
          </Link>
        ))}
      </nav>

      <h2 className="folder-heading">Monthly report</h2>
      {group.monthly ? (
        <div className="monthly-card">
          <Link href={`/updates/${group.monthly.slug}`}>
            <span className="update-date">{group.monthly.date}</span>
            <span className="update-title">{group.monthly.title}</span>
          </Link>
          {group.monthly.xlsx && (
            <a className="download-btn" href={group.monthly.xlsx} download>
              Download Excel (.xlsx)
            </a>
          )}
        </div>
      ) : (
        <p className="folder-empty">
          {group.complete
            ? 'No monthly report has been published for this month.'
            : 'The monthly report will be added once this month is complete.'}
        </p>
      )}

      <h2 className="folder-heading">Weekly updates</h2>
      <ul className="update-list">
        {group.weeklies.map((update) => (
          <li key={update.slug}>
            <Link href={`/updates/${update.slug}`}>
              <span className="update-date">{update.date}</span>
              <span className="update-title">{update.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
