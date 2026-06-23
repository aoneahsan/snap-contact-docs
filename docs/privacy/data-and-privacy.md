---
sidebar_position: 1
title: Data & privacy
description: What SnapContact collects, where it's stored, what it never collects, and how your data is encrypted and shared — written to match the app's privacy policy.
keywords: [snapcontact privacy, data collection, firestore, encryption, data safety, what data]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Data & privacy

**SnapContact collects the contact data you choose to save plus the account and usage data needed to run and improve the app, stores it in Google Cloud Firestore under your account encrypted in transit and at rest, and does not sell your personal information.** This page summarizes the privacy posture; the authoritative version is the in-app [privacy policy](https://snapcontact.aoneahsan.com/privacy).

## What SnapContact collects

| Data | Why | Notes |
|---|---|---|
| Contacts you save | Core functionality | Names, phones, emails, company, tags, notes — the records you create. |
| Account info | Sign-in & sync | Email and the Firebase user identity. |
| Usage & device info | Improve the app | App interactions, feature usage, device type/OS, crash data. |

When you sign in, your contact data syncs to Firestore so it's available across your devices. Anonymous app preferences (theme, layout) are stored locally on the device and, when signed in, mirrored to your profile.

## What SnapContact does not collect (v1.1)

SnapContact requests **no** location, microphone, device-contacts, SMS, or calendar permissions in version 1.1. The "Import from Google" feature reads your Google contacts through OAuth you authorize (the People API) — it does **not** use the device-contacts permission. The business-card scanner processes the card image on your device; the image is not uploaded unless you attach it to a contact.

## Where your data lives

- **Contacts** live in Google Cloud Firestore under your account, encrypted in transit (TLS) and at rest.
- **Files** you attach (such as a card image or a space attachment) are stored under your account via the FilesHub file-storage API, not in a public bucket.
- **Preferences** are stored locally and mirrored to your profile when signed in.

## Sharing

SnapContact does not sell your personal information. Data is processed by the third-party providers the app is built on — for example Firebase (auth, database, analytics), FilesHub (file storage), and the analytics/error tools used to keep the app healthy — acting as processors under your account. Anything that genuinely transfers data to an independent controller is disclosed in the full privacy policy and the Play Data Safety form.

## Your rights

You can export your contacts and delete your account and data at any time — see [Account & data deletion](./account-deletion.md). SnapContact is built to honor GDPR/CCPA-style rights to access, export, and erasure.

## Frequently asked questions

**Does SnapContact sell my data?** No.

**Where are my contacts stored?** In Google Cloud Firestore under your own account, encrypted in transit and at rest.

**Does it read my phone's address book?** No. v1.1 requests no device-contacts permission. Google import uses OAuth + the People API.

**Is my business-card photo uploaded?** No, unless you attach it to the contact. OCR runs on your device.

**Can I get my data out or delete it?** Yes — export anytime, and delete your account and data on request. See [Account & data deletion](./account-deletion.md).
