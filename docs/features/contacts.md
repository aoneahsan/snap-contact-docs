---
sidebar_position: 1
title: Contacts
description: SnapContact's contact records hold names, phones, emails, company, tags, notes, and a per-contact timeline, all findable with fuzzy search.
keywords: [contact records, contact fields, tags, notes, contact timeline, fuzzy search, segments]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Contacts

**A SnapContact contact is a structured record of a person — name, phone(s), email(s), company, title, city, tags, notes, source, and a timeline — that you can find later by fuzzy search across any of those fields.** Contacts are the core of the app; every other feature (spaces, reminders, insights) hangs off them.

## What a contact holds

| Field group | Examples | Notes |
|---|---|---|
| Identity | Name, company, title, city | Only a name is required. |
| Reach | One or more phone numbers and emails | Phone numbers are validated and formatted (via libphonenumber). |
| Organization | Tags, lists/segments | Tags are free-form; type to create. |
| Context | Notes, source | Notes are full-text searchable. |
| History | Timeline of events | Captures, edits, reminders, and notes appear in order. |

## Tags, lists, and segments

Tags are the fastest way to organize. Add `lead`, `client`, `event-2026`, or anything else, and a contact can carry many. Lists (segments) group contacts by criteria so you can act on a cohort — for example, everyone tagged `lead` who you haven't contacted recently. Because tags are free-form, your taxonomy grows with your work instead of being fixed up front.

## Notes and the timeline

Notes capture the detail that makes a contact useful months later: what they wanted, what you promised, the next step. Every note is searchable, so a phrase you wrote is enough to resurface the person. The per-contact **timeline** records events — when the contact was created, edited, captured, or had a reminder — so you can reconstruct the relationship at a glance.

## Fuzzy search

Search matches partial and approximate text across name, company, phone, tag, and note content, so you don't need exact spelling. Internally each contact carries a precomputed lowercase search blob, which keeps search fast even on large lists. Type a few characters of any attribute and the right person surfaces.

## Where contacts come from

You rarely type contacts in one at a time. Most arrive through:

- the [Business-card scanner](./business-card-scanner.md),
- the [WhatsApp Web extension](./whatsapp-extension.md),
- or [import](./tools-import-export.md) from Google, Excel/CSV, or vCard.

However a contact arrives, it becomes the same kind of record described here, with duplicate detection to avoid copies.

## Frequently asked questions

**What's the only required field?** A name. A phone or email is strongly recommended so you can actually reach the person, but the schema only insists on a name.

**Can a contact have more than one phone or email?** Yes — multiple phones and emails are supported.

**Is search exact or fuzzy?** Fuzzy. Approximate spelling and partial words match, across name, company, phone, tag, and note text.

**Does editing a contact lose its history?** No. Edits are recorded on the contact's timeline.

**Can I group contacts?** Yes — with tags and lists/segments, and you can pin contacts inside a [space](./spaces.md).
