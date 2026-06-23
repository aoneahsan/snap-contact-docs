---
sidebar_position: 1
title: Introduction
description: SnapContact is a contact intelligence and lead-capture app for Android and the web that turns chats and business cards into organized contacts and keeps you on top of follow-ups.
keywords: [snapcontact, contact manager, lead capture, business card scanner, contact organizer, follow-up reminders, crm lite]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Introduction

**SnapContact is a contact intelligence and lead-capture app for Android and the web that turns chats and business cards into saved, organized contacts and keeps you on top of follow-ups.** It captures a lead in seconds, attaches the context you need (tags, notes, a timeline), and reminds you to act before the lead goes cold. The app is free to get started, runs on [the web](https://snapcontact.aoneahsan.com) and on [Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.snapcontact), and is built and maintained by [Ahsan Mahmood](https://aoneahsan.com).

SnapContact is for solo professionals — sales reps, founders, recruiters, agents, and freelancers — and for small teams that handle leads over WhatsApp and the phone. It is deliberately not a full CRM: there are no pipelines, quotes, or seat billing to wade through. It does the four things a busy person actually needs between meetings.

## What it does

| Capability | The job it does | One-line summary |
|---|---|---|
| **Capture** | Turn an unknown number or a paper card into a contact | Scan a business card (on-device OCR), save a WhatsApp Web number with the extension, or import from Google / Excel / vCard. |
| **Organize** | Keep context with every person | Tags, notes, lists, smart segments, and a per-contact timeline — all searchable with fuzzy matching. |
| **Follow up** | Never let a lead go cold | Reminders with priority levels and quick templates, surfaced in Today / Upcoming / Overdue views. |
| **Collaborate** | Tie work to the people involved | Mini-spaces group contacts, posts, and files around a client or project. |

## How capture works

SnapContact gives you three honest ways to add a contact, and you choose per situation:

1. **Business-card scanner.** Point your camera at a card (or pick a photo from your gallery). The text recognition runs in your browser with Tesseract.js — the image is processed on your device and is never uploaded to a server unless you choose to attach it to the contact. You review and edit every extracted field before saving.
2. **WhatsApp Web browser extension.** On `web.whatsapp.com`, save an unknown chat's number with one click, or bulk-save group members with tags. The extension acts only when you click; it does not run capture in the background.
3. **Structured import.** Bring contacts in from Google Contacts, an Excel/CSV file, or a vCard, with duplicate detection so you don't create copies.

## What it is not

SnapContact is honest about its boundaries. In version 1.1 it does **not** request device-contacts, location, microphone, SMS, or calendar permissions. It is not a marketing-automation platform, and it does not scrape or bypass any platform's rules — the WhatsApp extension captures only what you, the signed-in user, are already looking at. Email and SMS campaigns are **bring-your-own-key**: you connect your own SendGrid, Mailgun, or Twilio account, and without one the app falls back to your device's native mail/SMS composer rather than pretending to send.

## Where to go next

- New here? Start with [Installation](./getting-started/installation.md), then [Quick Start](./getting-started/quick-start.md) to save your first contact in five minutes.
- Want the privacy details first? Read [Data & privacy](./privacy/data-and-privacy.md) and [Permissions](./privacy/permissions.md).
- Curious about a specific feature? Jump to [Contacts](./features/contacts.md), the [Business-card scanner](./features/business-card-scanner.md), [Spaces](./features/spaces.md), or [Reminders](./features/reminders.md).

## Frequently asked questions

**Is SnapContact free?** Yes — it is free to get started. Some optional integrations (such as email or SMS campaigns) require you to bring your own provider account, which you pay for directly.

**Does SnapContact read my phone's address book?** No. Version 1.1 does not request the device-contacts permission. You add contacts by scanning, by capturing from WhatsApp Web, by importing a file, or by typing them in.

**Where is my data stored?** When you sign in, your contacts sync to Google Cloud Firestore under your own account, encrypted in transit and at rest. App preferences (theme, layout) are stored locally on your device and, when signed in, mirrored to your profile.

**Which platforms are supported?** Android and the web today. The browser extension targets Chrome and Edge (Chromium). iOS is on the roadmap, not shipped — the docs only describe what currently exists.

**Who makes it?** SnapContact is built by Ahsan Mahmood. See [About the Author](./about-the-author.md).
