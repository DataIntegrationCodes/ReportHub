'use client';

import { useState } from 'react';

export default function TabbedReport({ sections }) {
  const [activeIndex, setActiveIndex] = useState(0);

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
      <div
        className="tab-panel"
        role="tabpanel"
        dangerouslySetInnerHTML={{ __html: sections[activeIndex].contentHtml }}
      />
    </div>
  );
}
