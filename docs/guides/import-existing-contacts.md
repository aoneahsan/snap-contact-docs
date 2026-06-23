---
sidebar_position: 3
title: Import your existing contacts
description: Step-by-step guide to importing contacts into SnapContact from Google, Excel/CSV, or vCard, with duplicate detection and a cleanup pass.
keywords: [import contacts, csv import, vcard import, google contacts import, duplicate detection]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Import your existing contacts

**This guide shows how to bring an existing list into SnapContact from Google, Excel/CSV, or vCard, and clean it up afterward so you don't carry over duplicates or bad data.** Import lives in the [Tools hub](../features/tools-import-export.md).

## Before you start

- Decide your source: Google Contacts, an Excel/CSV export, or a `.vcf` vCard.
- For Google, be ready to authorize SnapContact via OAuth (it reads your Google contacts through the People API, not your device address book).

## Steps

1. **Open Tools → Import.**
2. **Choose a source:**
   - **Google Contacts** — authorize with Google; SnapContact reads your Google address book via OAuth.
   - **Excel / CSV** — select the file; map columns (name, phone, email, company…) to contact fields.
   - **vCard** — select the `.vcf` file.
3. **Review duplicate matches.** Import runs duplicate detection and surfaces likely-same contacts so you can merge instead of creating copies.
4. **Confirm the import.** Your contacts are added to your account and sync across devices.

## Clean up after a big import

A large import is the right moment to tidy:

1. Run the **validators** (Tools → Validate) to flag malformed emails or phone numbers.
2. Run **duplicate detection** to merge any copies the source contained, consolidating notes and tags.
3. Add tags or a list to the newly imported cohort so you can act on them as a segment.

## Honest expectations

Import quality mirrors the source. A clean Google export imports cleanly; a hand-built CSV with inconsistent columns needs the validators and a careful field mapping. SnapContact's duplicate detection reduces copies, but it can't fix data that was wrong before it arrived — that's what the cleanup pass is for.

## Frequently asked questions

**Does Google import read my phone contacts?** No — it uses Google's People API via OAuth you grant. SnapContact v1.1 requests no device-contacts permission.

**Will I get duplicates?** Import surfaces likely duplicates to merge, and you can run duplicate detection afterward.

**What file types can I import?** Excel/CSV and vCard files, plus Google Contacts via OAuth and chat exports.

**Can I undo an import?** Clean up with validators and duplicate-merge; you can also export your data at any time as a safety copy.
