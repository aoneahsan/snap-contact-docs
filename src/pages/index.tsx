import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const APP_URL = 'https://snapcontact.aoneahsan.com';
const PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.aoneahsan.snapcontact';

type Feature = {
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Capture contacts fast',
    body: 'Scan a business card with your camera and SnapContact reads the name, phone, and email on-device. Or save unknown WhatsApp Web numbers with the browser extension, or import from Google, Excel/CSV, and vCard.',
  },
  {
    title: 'Organize with context',
    body: 'Tag contacts, write notes, build lists and smart segments, and keep a per-contact timeline. Fuzzy search finds anyone by name, company, tag, or note text — no exact spelling needed.',
  },
  {
    title: 'Never miss a follow-up',
    body: 'Set reminders with priority levels and quick templates (Follow up, Send quote, Book call). Today / Upcoming / Overdue views keep you on track, with notifications on Android.',
  },
  {
    title: 'Business-card scanner (OCR)',
    body: 'Optical character recognition runs in your browser with Tesseract.js — the card image is never uploaded to a server unless you choose to attach it. Review and edit every field before saving.',
  },
  {
    title: 'Mini-spaces',
    body: 'Spin up a space for a client or project, post updates, attach files, and pin the contacts that matter. Everything stays tied to the people involved.',
  },
  {
    title: 'Insights & tools',
    body: 'See growth, segments, tag distribution, and source attribution over your own contact list. Export and back up your data, run validators, and clean duplicates — all from one place.',
  },
];

function HomepageHeader(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/getting-started/quick-start"
          >
            Quick Start — 5 min
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/intro"
          >
            What is SnapContact?
          </Link>
          <Link className="button button--outline button--lg" href={APP_URL}>
            Open the app
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresWrap}>
      <div className="container">
        <div className="row">
          {FEATURES.map((f) => (
            <div key={f.title} className="col col--4" style={{ marginBottom: '1.5rem' }}>
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorStrip(): ReactNode {
  return (
    <section className={styles.authorStrip}>
      <div className="container">
        <p>
          Built and maintained by{' '}
          <Link href="https://aoneahsan.com">Ahsan Mahmood</Link> —{' '}
          <Link href="https://linkedin.com/in/aoneahsan">LinkedIn</Link> ·{' '}
          <Link href="https://github.com/aoneahsan">GitHub</Link> ·{' '}
          <Link href={PLAY_URL}>Google Play</Link>
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Contact intelligence & lead capture`}
      description="Documentation for SnapContact: scan business cards, capture leads, organize contacts with tags, notes and spaces, and never miss a follow-up. Android + web."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AuthorStrip />
      </main>
    </Layout>
  );
}
