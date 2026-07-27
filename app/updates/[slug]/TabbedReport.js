'use client';

import { useState } from 'react';
import EditableSection from './EditableSection';

export default function TabbedReport({ sections, slug }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = sections[activeIndex];

  return (
    <div>
      <div className="tab-bar" role="tablist">
        {sections.map((section, index) => (
          <button
            key={section.title}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            className={`tab-button${index === activeIndex ? ' active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {section.title}
          </button>
        ))}
      </div>
      <EditableSection
        key={activeSection.title}
        slug={slug}
        sectionTitle={activeSection.title}
        initialRaw={activeSection.raw}
        initialHtml={activeSection.contentHtml}
        hasStatus={activeSection.hasStatus}
        initialStatus={activeSection.status}
      />
    </div>
  );
}
