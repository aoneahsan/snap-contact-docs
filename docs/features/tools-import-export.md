---
sidebar_position: 5
title: "Tools: import, export & cleanup"
description: SnapContact's Tools hub imports contacts from Google, Excel/CSV, vCard and chat exports, exports and backs up your data, validates fields, and detects duplicates.
keywords: [import contacts, export contacts, csv import, vcard, duplicate detection, backup, data validation, google contacts import]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Tools: import, export & cleanup

**The Tools hub is where you move contacts in and out of SnapContact in bulk and keep them clean — importing from Google, Excel/CSV, vCard, and chat exports, exporting and backing up your data, validating fields, and detecting duplicates.** It's the home for the operations you do to a whole list rather than one contact at a time.

## Import

Bring existing contacts into SnapContact from the sources you already use:

| Source | What it reads |
|---|---|
| Google Contacts | Your Google address book via OAuth (Google People API). |
| Excel / CSV | Spreadsheet rows mapped to contact fields. |
| vCard (.vcf) | Standard contact-card files. |
| Chat / WhatsApp exports | Members and numbers from exported chats. |

Every import path runs **duplicate detection** so you don't end up with two copies of the same person — matches are surfaced for you to merge rather than blindly created. Google import uses OAuth and the People API; it does not use a device-contacts permission.

## Export and backup

Your data is yours to take out. SnapContact exports selected contacts (for example to a spreadsheet) and supports backups, so you can keep an external copy or move your list elsewhere. This is also part of how the app honors data-portability expectations — see [Data & privacy](../privacy/data-and-privacy.md).

## Validate

Validators check your contacts for problems — for example malformed emails or phone numbers — so your list stays usable for search, export, and any messaging you do. Cleaning data here prevents failed sends and bad matches downstream.

## Detect duplicates

Duplicate detection scans your list for likely-same contacts and offers to merge them, consolidating notes and tags rather than discarding them. Running it after a big import is the fastest way to tidy a freshly grown list.

## Honest scope

Imports depend on the quality of the source file — a messy CSV imports messy data, which is what the validators and duplicate detection are for. Google import reads your Google contacts through OAuth that you authorize; it does not read your device's native address book, and v1.1 requests no device-contacts permission.

## Frequently asked questions

**Which formats can I import?** Google Contacts (OAuth), Excel/CSV, vCard, and chat/WhatsApp exports.

**Will importing create duplicates?** Imports run duplicate detection and surface matches to merge, so you avoid copies.

**Can I get my data out?** Yes — export selected contacts and back up your data at any time.

**Does Google import read my phone's contacts?** No. It uses Google's People API via OAuth you authorize; it does not use the device-contacts permission.

**How do I clean up a messy list?** Run the validators to flag bad fields, then duplicate detection to merge copies.
