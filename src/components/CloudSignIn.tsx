import { useState } from 'react';
import { signIn, signUp } from '../sync/cloud';

/** Sign in to the shared family account (the same one on the tablet and the parent's phone). */
export function CloudSignIn({ onDone, allowCreate = false }: { onDone: () => void; allowCreate?: boolean }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function go(create: boolean) {
    setBusy(true);
    setMessage(null);
    const err = create ? await signUp(email.trim(), password) : await signIn(email.trim(), password);
    setBusy(false);
    if (err) setMessage(err);
    else onDone();
  }

  return (
    <form className="signin" onSubmit={(e) => { e.preventDefault(); void go(false); }}>
      <label>Family account email
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" />
      </label>
      <label>Password
        <input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
      </label>
      {message && <p className="form-message">{message}</p>}
      <button className="btn primary wide" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
      {allowCreate && (
        <button type="button" className="btn ghost wide" disabled={busy || !email || password.length < 6} onClick={() => void go(true)}>
          Create the family account
        </button>
      )}
    </form>
  );
}
