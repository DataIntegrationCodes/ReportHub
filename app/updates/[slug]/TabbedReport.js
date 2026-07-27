'use client';

import { useState } from 'react';
import NotesEditor from './NotesEditor';

export default function TabbedReport({ sections, notes, slug }) {
  const tabs = notes ? [...sections, { title: 'Reviewer Notes', isNotes: true }] : sections;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];

  return (
    <div>
      <div className="tab-bar" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            className={`tab-button${index === activeIndex ? ' active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {activeTab.isNotes ? (
        <NotesEditor slug={slug} initialContent={notes.content} initialStatus={notes.status} />
      ) : (
        <div
          className="tab-panel"
          role="tabpanel"
          dangerouslySetInnerHTML={{ __html: activeTab.contentHtml }}
        />
      )}
    </div>
  );
}
