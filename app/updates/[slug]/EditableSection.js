'use client';

import { useState } from 'react';
import { marked } from 'marked';

export default function EditableSection({ slug, sectionTitle, initialRaw, initialHtml, hasStatus, initialStatus }) {
  const [raw, setRaw] = useState(initialRaw);
  const [html, setHtml] = useState(initialHtml);
  const [status, setStatus] = useState(initialStatus);
  const [editing, setEditing] = useState(false);
  const [draftRaw, setDraftRaw] = useState(initialRaw);
  const [draftStatus, setDraftStatus] = useState(initialStatus);
  const [password, setPassword] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [savedMessage, setSavedMessage] = useState('');

  function startEditing() {
    setDraftRaw(raw);
    setDraftStatus(status);
    setPassword('');
    setError('');
    setSavedMessage('');
    setEditing(true);
  }

  function cancelEditing() {
    setEditing(false);
    setError('');
  }

  async function save() {
    setSaving(true);
    setError('');

    try {
      const res = await fetch('/api/sections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          sectionTitle,
          content: draftRaw,
          status: hasStatus ? draftStatus : undefined,
          password,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Save failed.');
        setSaving(false);
        return;
      }

      setRaw(draftRaw);
      setHtml(marked.parse(draftRaw));
      if (hasStatus) setStatus(draftStatus);
      setEditing(false);
      setSavedMessage('Saved. The live site will reflect this after the next deploy (usually under a minute).');
    } catch (err) {
      setError('Network error — please try again.');
    }

    setSaving(false);
  }

  return (
    <div className="tab-panel" role="tabpanel">
      <div className="notes-header">
        {hasStatus && (
          <span className={`badge ${status === 'final' ? 'badge-final' : 'badge-draft'}`}>
            {status === 'final' ? 'Final' : 'Draft'}
          </span>
        )}
        {!editing && (
          <button type="button" className="tab-button" onClick={startEditing}>
            Edit
          </button>
        )}
      </div>

      {editing ? (
        <div className="notes-editor">
          <p className="notes-hint">
            Editing the raw Markdown for this section, including any embedded HTML (tables, charts, layout blocks) — not a simplified text box.
          </p>
          <textarea
            className="notes-textarea"
            value={draftRaw}
            onChange={(e) => setDraftRaw(e.target.value)}
            rows={16}
          />
          {hasStatus && (
            <label className="notes-status-toggle">
              <input
                type="checkbox"
                checked={draftStatus === 'final'}
                onChange={(e) => setDraftStatus(e.target.checked ? 'final' : 'draft')}
              />
              Mark as final
            </label>
          )}
          <input
            type="password"
            className="notes-password"
            placeholder="Edit password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="notes-error">{error}</p>}
          <div className="notes-actions">
            <button type="button" className="tab-button active" onClick={save} disabled={saving}>
              {saving ? 'Saving…' : 'Save'}
            </button>
            <button type="button" className="tab-button" onClick={cancelEditing} disabled={saving}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      )}

      {savedMessage && <p className="notes-saved">{savedMessage}</p>}
    </div>
  );
}
