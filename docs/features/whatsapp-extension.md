---
sidebar_position: 8
title: WhatsApp Web extension
description: The SnapContact browser extension for Chrome and Edge adds a one-click Save to SnapContact button on WhatsApp Web, with bulk group-member capture and tagging — acting only when you click.
keywords: [whatsapp web extension, save whatsapp number, lead capture extension, chrome extension, edge extension, bulk save group members]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# WhatsApp Web extension

**The SnapContact browser extension for Chrome and Edge adds a "Save to SnapContact" button to WhatsApp Web so you can turn an unknown chat into a contact in one click, or bulk-save the unknown members of a group with tags — and it only acts when you click it.** It exists for the most common lead source for many professionals: a stranger who just messaged you.

## What it does

On `web.whatsapp.com`, the extension reads the contact details visible in the chat you have open and offers to save them:

- **One-click save** of an unknown number as a SnapContact contact, with a confirmation.
- **Bulk save** of a group's unknown members, with progress, cancel, and a summary report.
- **Tag or note at capture** so the lead is organized the moment it's saved.

Saved contacts flow into your account and appear everywhere you use SnapContact, with duplicate handling so an existing number updates rather than duplicates.

## How it captures

The extension injects a content script into the WhatsApp Web page and parses the contact name and number from the UI you're already viewing. It calls SnapContact to create or update the contact (queuing if you're briefly offline). It does **not** run in the background, does not mass-extract beyond what you're looking at, and does not bypass any WhatsApp restriction — it captures the same information you can already see, just faster.

## Compliance and safety

SnapContact's design respects platform rules: capture is user-initiated, rate-limited, and scoped to your normal activity. The extension is built for the store review process — it uses standard extension authentication rather than embedding a web auth SDK, in line with Chrome Web Store policies. If a store listing isn't available in your region yet, every other capture path (scanner, import, manual entry) still works.

## Honest limits

- The extension targets WhatsApp Web on Chromium browsers (Chrome, Edge).
- It captures only chats you actively open; there is no auto-running background collection.
- WhatsApp Web's UI can change; capture is resilient but a major redesign upstream can require an extension update.

## Frequently asked questions

**Does the extension run in the background?** No. It captures only when you click, on the chat you have open.

**Can I save a whole group?** Yes — bulk-save unknown group members with tags, with progress and a summary.

**Does it work on Firefox or Safari?** It targets Chromium browsers (Chrome and Edge). Other browsers aren't supported for the extension.

**Will it create duplicates?** No — an existing number is updated rather than duplicated.

**Is this against WhatsApp's rules?** No. It captures only what you're already viewing, user-initiated and rate-limited; it doesn't scrape or bypass restrictions.
