import Link from 'next/link';
import { getMonths } from '../lib/updates';

function FolderIcon() {
  return (
    <svg className="folder-icon" width="28" height="24" viewBox="0 0 28 24" aria-hidden="true">
      <path d="M2 4a2 2 0 0 1 2-2h6l3 3h11a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4z" fill="#93c5fd" />
      <path d="M2 9h24v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9z" fill="#3b82f6" />
    </svg>
  );
}

export default function Home() {
  const months = getMonths();

  return (
    <main>
      <h1>Weekly Updates</h1>
      <p className="subtitle">
        Grouped by month, newest first. Open a month to see its weekly updates and, once the month is complete,
        its monthly report.
      </p>

      <ul className="folder-list">
        {months.map((group) => (
          <li key={group.month}>
            <Link href={`/months/${group.month}`} className="folder-card">
              <FolderIcon />
              <span className="folder-text">
                <span className="folder-title">{group.label}</span>
                <span className="folder-meta">
                  {group.weeklies.length} weekly update{group.weeklies.length === 1 ? '' : 's'}
                </span>
              </span>
              {group.monthly && <span className="badge badge-final">Monthly report</span>}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
