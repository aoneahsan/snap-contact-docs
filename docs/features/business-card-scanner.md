---
sidebar_position: 2
title: Business-card scanner
description: SnapContact's business-card scanner reads a card with on-device OCR (Tesseract.js), extracts name, phone, and email, and lets you review every field before saving — the image is never uploaded unless you attach it.
keywords: [business card scanner, OCR contacts, scan business card, tesseract, on-device ocr, card reader]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Business-card scanner

**The business-card scanner turns a photo of a card into a draft contact using optical character recognition that runs on your device — the card text is read in your browser by Tesseract.js, and the image is never uploaded to a server unless you choose to attach it to the contact.** You point your camera at a card (or pick an existing photo), the app extracts the likely name, phone numbers, and emails, and you confirm or correct each field before it's saved.

## How it works

1. **Capture.** Use the camera or pick a photo from your gallery. On Android the camera permission is requested only at this moment; on the web the browser prompts for camera access when you start a scan.
2. **Recognize.** Tesseract.js performs OCR locally. There is no paid cloud vision API involved — the recognition happens on your device, which is why the raw image doesn't need to leave it.
3. **Extract.** SnapContact parses the recognized text into structured fields — name, phone(s), email(s) — and reports a confidence score.
4. **Review.** You see the extracted fields pre-filled and edit anything OCR got wrong. A blurry or low-contrast card produces a lower-confidence result that you fix by hand, rather than silently saving bad data.
5. **Save.** The confirmed fields become a normal [contact](./contacts.md). Optionally attach the original card image for your own reference — only then does the image upload, to the FilesHub file-storage API under your account.

## Camera or gallery — your choice

The scanner accepts both a live camera capture and a photo from your gallery. The gallery path is the built-in fallback when you'd rather not grant camera access, or when you already have a photo of the card. Either way, the same on-device OCR runs.

## Why on-device OCR

Running OCR locally keeps the card image private by default and removes any per-scan cost. The trade-off is that recognition quality depends on the photo: good lighting, a flat card, and sharp focus give clean extraction, while a glare-heavy or angled shot needs more manual correction. The review step exists precisely so you stay in control of accuracy.

## Privacy posture

- The card **image** is processed on your device and is not uploaded unless you explicitly attach it to the contact.
- If you attach it, the image is stored under your account via the FilesHub API, not in a public bucket.
- The **camera** permission is requested only when you start a scan, and a gallery photo is always an alternative. See [Permissions](../privacy/permissions.md).

## Frequently asked questions

**Does the scanner send my card photo to a server?** No, not by default. OCR runs on your device. The image only leaves your device if you choose to attach it to the contact, in which case it's stored under your account.

**Which OCR engine is used?** Tesseract.js, running in the browser/WebView. There is no paid vision API.

**What if the scan gets a field wrong?** You review and edit every field before saving. Low-confidence results are flagged so you don't save bad data.

**Can I scan without giving camera access?** Yes — pick an existing photo from your gallery instead. The same recognition runs on the chosen image.

**What makes a good scan?** Even lighting, a flat card, and sharp focus. Glare and steep angles reduce accuracy and mean more manual fixes.
