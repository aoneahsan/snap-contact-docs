---
sidebar_position: 2
title: Permissions
description: The exact permissions SnapContact requests on Android — camera and notifications — why each is needed, when it's asked, and the non-permission fallback for each.
keywords: [snapcontact permissions, android permissions, camera permission, notifications permission, fallback]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Permissions

**SnapContact requests a deliberately small set of Android permissions — camera and notifications — each asked for only at the moment it's needed, each with a non-permission fallback, and none requested at launch.** This page explains exactly what's requested and what happens if you decline.

## The permissions

| Permission | Why it's requested | When | If you decline |
|---|---|---|---|
| **Camera** | To photograph a business card for on-device OCR. | Only when you start a card scan. | Pick an existing photo from your gallery, or enter the contact by hand. |
| **Notifications** | To alert you when a reminder or birthday is due. | When you first set up a reminder. | Reminders still appear in the Today / Upcoming / Overdue views; you just won't get an OS notification. |

The app also declares standard, non-sensitive entries that don't prompt you, such as internet and network-state access (to sign in and sync) and vibrate (for notification feedback).

## What SnapContact does not request

Version 1.1 does **not** request location, microphone, device-contacts, SMS, call-log, or calendar permissions. The Android manifest explicitly removes restricted media and exact-alarm permissions it doesn't use. The "Import from Google" feature reads contacts through OAuth via Google's People API — it does not use the device-contacts permission.

## Why this matters

Sensitive permissions are the most common reason apps get rejected from app stores and the most common reason users uninstall. SnapContact keeps the set minimal and honest: the camera is requested at the scan, not at launch; notifications are requested at the reminder, not before; and every permission has a fallback so the app remains usable if you say no. This mirrors what the [privacy policy](https://snapcontact.aoneahsan.com/privacy) discloses and what the Play Data Safety form declares.

## Frequently asked questions

**Does SnapContact ask for permissions when I open it?** No — permissions are requested in context (camera at scan, notifications at first reminder), never at launch.

**Can I use the scanner without the camera permission?** Yes — choose a photo from your gallery instead.

**What if I deny notifications?** Reminders still surface in the Today/Upcoming/Overdue views; you simply don't get OS notifications.

**Does the app read my contacts, location, or microphone?** No — none of those permissions are requested in v1.1.
