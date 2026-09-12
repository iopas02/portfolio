'use client';

import { useState } from 'react';
import { Lock, Upload, FileCheck, AlertCircle } from 'lucide-react';

export default function UploadPage() {
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!file) {
      setStatus('error');
      setMessage('Choose a PDF file first.');
      return;
    }
    setStatus('uploading');
    setMessage('');
    try {
      const fd = new FormData();
      fd.append('password', password);
      fd.append('file', file);
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      setStatus('success');
      setMessage('CV updated. The download link now serves this file.');
      setFile(null);
      setPassword('');
    } catch (err) {
      setStatus('error');
      setMessage(err.message);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-dark px-6">
      <form
        onSubmit={submit}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-surface p-8"
      >
        <div className="mb-6 flex items-center gap-3">
          <Lock size={20} className="text-accent" />
          <h1 className="text-xl font-semibold text-white">Update CV</h1>
        </div>

        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-5 w-full rounded-lg border border-white/10 bg-dark px-4 py-3 text-white outline-none transition-colors focus:border-accent"
          placeholder="Enter password"
        />

        <label className="mb-2 block text-sm font-medium text-zinc-300">
          CV file (PDF)
        </label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mb-6 w-full rounded-lg border border-dashed border-white/10 bg-dark px-4 py-3 text-sm text-muted file:mr-4 file:rounded-full file:border-0 file:bg-accent/10 file:px-4 file:py-1.5 file:text-sm file:font-medium file:text-accent"
        />

        <button
          type="submit"
          disabled={status === 'uploading'}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90 disabled:opacity-50"
        >
          <Upload size={16} />
          {status === 'uploading' ? 'Uploading…' : 'Upload CV'}
        </button>

        {message && (
          <p
            className={`mt-4 flex items-center gap-2 text-sm ${
              status === 'success' ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {status === 'success' ? (
              <FileCheck size={16} />
            ) : (
              <AlertCircle size={16} />
            )}
            {message}
          </p>
        )}
      </form>
    </main>
  );
}
