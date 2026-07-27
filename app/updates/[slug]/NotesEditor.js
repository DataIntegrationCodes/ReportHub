'use client';

import { useState } from 'react';

export default function NotesEditor({ slug, initialContent, initialStatus }) {
  const [content, setContent] = useState(initialContent);
  const [status, setStatus] = useState(initialStatus);
  const [editing, setEditing] = useState(false);
  const [draftContent, setDraftContent] = useState(initialContent);
  const [draftStatus, setDraftStatus] = useState(initialStatus);
  const [password, setPassword] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [savedMessage, setSavedMessage] = useState('');

  function startEditing() {
    setDraftContent(content);
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
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, content: draftContent, status: draftStatus, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Save failed.');
        setSaving(false);
        return;
      }

      setContent(draftContent);
      setStatus(draftStatus);
      setEditing(false);
      setSavedMessage('Saved. The live site will reflect this after the next deploy (usually under a minute).');
    } catch (err) {
      setError('Network error — please try again.');
    }

    setSaving(false);
  }

  return (
    <div className="tab-panel">
      <div className="notes-header">
        <span className={`badge ${status === 'final' ? 'badge-final' : 'badge-draft'}`}>
          {status === 'final' ? 'Final' : 'Draft'}
        </span>
        {!editing && (
          <button type="button" className="tab-button" onClick={startEditing}>
            Edit
          </button>
        )}
      </div>

      {editing ? (
        <div className="notes-editor">
          <textarea
            className="notes-textarea"
            value={draftContent}
            onChange={(e) => setDraftContent(e.target.value)}
            rows={8}
          />
          <label className="notes-status-toggle">
            <input
              type="checkbox"
              checked={draftStatus === 'final'}
              onChange={(e) => setDraftStatus(e.target.checked ? 'final' : 'draft')}
            />
            Mark as final
          </label>
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
        <p className="notes-content">{content || 'No notes yet.'}</p>
      )}

      {savedMessage && <p className="notes-saved">{savedMessage}</p>}
    </div>
  );
}
