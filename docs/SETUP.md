# Setting up BrainBoost

There are three steps: put it online, install it on her tablet, and
(optionally) turn on cloud sync so you can see her progress on your phone.
Everything here is free.

## 1. Put it online (about 5 minutes)

A PWA has to be served over HTTPS to be installable. The easiest free host is **Vercel**:

1. Go to <https://vercel.com>, sign in with GitHub, and click **Add New → Project**.
2. Import this repository. Vercel detects Vite automatically, so leave the settings as they are.
3. Click **Deploy**. You'll get a URL like `brainboost-xyz.vercel.app`.

Every time a change is pushed to the repo, Vercel redeploys it, and the app on
the tablet updates itself the next time it's opened.

(Netlify or Cloudflare Pages also work. The build command is `npm run build` and the output folder is `dist`.)

## 2. Install it on her Android tablet

1. Open the URL in **Chrome** on the tablet.
2. Tap the **⋮** menu → **Install app** (or **Add to Home screen**).
3. Open it from the new BrainBoost icon and choose **I'm the learner**.

It now runs full-screen and works offline. Progress is saved on the tablet.

Without cloud sync you can still see her progress on the tablet:
**Me → Parent area** (protected by a 4-digit PIN you set the first time).

## 3. Turn on the parent dashboard for your phone (about 10 minutes)

This uses **Supabase** (a free hosted database). The tablet and your phone
sign in to one shared "family account". The tablet uploads her progress and
your phone reads it.

### a. Create the database
1. Sign up at <https://supabase.com> and create a **New project** (any name, region *London*).
2. In the project, open **SQL Editor → New query**, paste the contents of
   [`supabase/schema.sql`](../supabase/schema.sql), and click **Run**.
   This creates one `progress` table that each account can only read and write for itself.
3. Open **Authentication → Sign In / Providers → Email** and turn **off**
   "Confirm email". This is optional, but it saves waiting for a confirmation email.

### b. Connect the app to it
(Already done for this project: the values are in `.env.production`. Use the Vercel steps below only if you'd rather keep them out of the repo.)

1. In Supabase, open **Project Settings → API** and copy:
   - the **Project URL**
   - the **anon / publishable key** (this key is designed to be public, and the table's security rules protect the data)
2. In Vercel, open your project → **Settings → Environment Variables** and add:
   - `VITE_SUPABASE_URL` = the Project URL
   - `VITE_SUPABASE_ANON_KEY` = the anon key
3. Go to **Deployments**, then click **⋮ → Redeploy** on the latest one.

### c. Sign in on both devices
1. **On your phone:** open the app URL, choose **I'm a parent**, enter an email
   and password, and tap **Create the family account**. (You can add it to your home screen too.)
2. **On her tablet:** go to **Me → Cloud sync → Connect family account** and sign in
   with the same email and password.
3. Optional, for safety: in Supabase go to **Authentication → Sign In / Providers**
   and turn off **Allow new users to sign up**, now that your account exists.

Her progress now uploads a couple of seconds after each lesson. On your phone,
tap **↻ Refresh**, or just reopen the app, to see the latest.

## Running it locally

```bash
npm install
cp .env.example .env.local   # optional: add the Supabase values to test sync
npm run dev
```
