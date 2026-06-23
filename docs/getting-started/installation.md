---
sidebar_position: 1
title: Installation
description: How to use SnapContact on the web, install the Android app from Google Play, and add the WhatsApp Web browser extension for Chrome and Edge.
keywords: [snapcontact install, android contact app, whatsapp web extension, web app]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Installation

**SnapContact runs in three places: a web app you open in any modern browser, an Android app from Google Play, and a browser extension that adds one-click lead capture to WhatsApp Web.** You don't need all three — pick what fits how you work. They share the same account, so contacts you capture in one place sync to the others.

## Use the web app (no install)

Open [snapcontact.aoneahsan.com](https://snapcontact.aoneahsan.com) in Chrome, Firefox, Safari, or Edge. There is nothing to download. Sign in (see [Account & sign-in](./account-and-sign-in.md)) and you have the full contact manager — contacts, tags, notes, spaces, reminders, insights, and tools. The web app is the quickest way to try SnapContact and the best place to do bulk work like imports and exports.

The business-card scanner also works on the web: the browser asks for camera access when you start a scan, and the OCR runs locally in the page.

## Install the Android app

Install SnapContact from Google Play:

> [Get SnapContact on Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.snapcontact) — package `com.aoneahsan.snapcontact`.

The Android app adds what only a native app can: a camera-first business-card scanner, push and local notifications for reminders and birthdays, an app badge for due items, home-screen shortcuts, and in-app update and review prompts. It requests a small, honest set of permissions — camera (only when you scan) and notifications (only for reminders) — each explained in [Permissions](../privacy/permissions.md).

Minimum Android version is 7.0 (API 24).

## Add the WhatsApp Web extension

The browser extension is a separate companion for Chrome and Edge that adds a **Save to SnapContact** button to `web.whatsapp.com`. With it you can:

- Save an unknown chat's number as a contact in one click.
- Bulk-save the unknown members of a group, with tags.
- Add a note or tag at the moment of capture.

The extension only acts when you click it — it never runs capture in the background, and it captures only the chats you are already viewing. See [WhatsApp Web extension](../features/whatsapp-extension.md) for how it works and [Capture leads from WhatsApp Web](../guides/capture-leads-from-whatsapp.md) for a step-by-step walkthrough.

:::note
The extension is distributed through the Chrome Web Store / Edge Add-ons. If a store listing isn't available in your region yet, you can still use every other capture method (scanner, import, manual entry).
:::

## Verify everything is connected

After installing, sign in with the **same account** in each surface. A contact you create on the web should appear on Android within a few seconds, and vice versa, because both read from your Firestore profile. If something doesn't sync, confirm you're signed into the same account and that you have a network connection — SnapContact supports offline edits and reconciles them when you reconnect.

## Frequently asked questions

**Do I have to install the Android app to use SnapContact?** No. The web app is fully featured. The Android app adds native conveniences (camera scanner, notifications, badges).

**Is the browser extension required?** No. It only matters if you want to capture leads from WhatsApp Web. Every other capture path works without it.

**Does my data move between devices automatically?** Yes, once you sign in with the same account. Your contacts live in your Firestore profile and sync across the web and Android.

**What's the minimum Android version?** Android 7.0 (API 24).

**Is there an iOS app?** Not yet. iOS is on the roadmap. These docs describe only what currently ships.
