---
sidebar_position: 2
title: Account & sign-in
description: How to create a SnapContact account, sign in with email or Google, what syncs across devices, and how sign-out behaves.
keywords: [snapcontact account, google sign in, email password, sync, firebase auth]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Account & sign-in

**A SnapContact account is what makes your contacts sync across the web and Android and persist beyond a single device.** Sign-in is handled by Firebase Authentication, and you can use email + password or Google sign-in. Everything you save — contacts, tags, notes, spaces, reminders — is stored under your account in Google Cloud Firestore, encrypted in transit and at rest.

## Ways to sign in

| Method | How it works | Where |
|---|---|---|
| **Email + password** | Standard email/password account managed by Firebase Authentication. | Web + Android |
| **Google sign-in** | On the web, a Firebase popup; on Android, the native Google account picker, which returns the same Firebase user. | Web + Android |

Google sign-in is the quickest path because there's no password to create. On the web it opens a Google popup; on Android it uses the device's native Google account picker and lands you on the same Firebase user, so your data is identical regardless of which device you used to sign in.

## What syncs

When you're signed in, two kinds of data move with you:

1. **Your content** — contacts, tags, notes, lists, reminders, and spaces — lives in Firestore under your account and is the source of truth across devices.
2. **Your preferences** — theme (light/dark/system), accent, layout — are stored locally on the device via Capacitor Preferences (or `localStorage` on the web) and also mirrored to your profile so a new device picks up your last choices.

Edits made offline are saved locally first and reconciled when you reconnect, so you can keep working on a flaky connection.

## Signing out

Signing out stops syncing and returns you to the signed-out state. Your local preferences (like your chosen theme) are kept on the device so the app still looks the way you left it; your contacts are not readable until you sign back in, because they live in your account.

## The test account (for reviewers)

If you are reviewing SnapContact (for example, for a store submission), any Google test account works — all features are available without any special role or code. There is no separate demo account to request.

## Frequently asked questions

**Do I need an account to try the app?** You can open the web app, but saving and syncing contacts requires signing in, since your data is stored under your account.

**Is Google sign-in different on Android vs the web?** The mechanism differs (native picker vs popup) but the result is the same Firebase user, so your data is identical either way.

**What happens to my data if I sign out?** It stays safely in your account and reappears when you sign back in. Only your local device preferences persist while signed out.

**Can I delete my account and data?** Yes. See [Account & data deletion](../privacy/account-deletion.md).

**How is my password stored?** SnapContact does not store your password — Firebase Authentication handles credential storage and verification.
