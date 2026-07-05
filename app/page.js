import Link from 'next/link';
import { getAllUpdates } from '../lib/updates';

export default function Home() {
  const updates = getAllUpdates();

  return (
    <main>
      <h1>Weekly Updates</h1>
      <p className="subtitle">A running log of progress, newest first.</p>

      <ul className="update-list">
        {updates.map((update) => (
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
