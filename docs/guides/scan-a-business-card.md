---
sidebar_position: 1
title: Scan a business card
description: Step-by-step guide to scanning a business card in SnapContact, reviewing the OCR-extracted fields, and saving it as a contact — with tips for the cleanest scans.
keywords: [scan business card, how to scan card, ocr contact, business card to contact]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Scan a business card

**This guide walks through scanning a paper business card into a SnapContact contact, from capturing the image to confirming the OCR-extracted fields.** The text recognition runs on your device, so the card image stays private unless you choose to attach it. See [Business-card scanner](../features/business-card-scanner.md) for the feature reference.

## Before you start

- Use the Android app or the web app while signed in.
- Have the card and decent lighting. A flat, sharp, glare-free shot scans best.

## Steps

1. **Open the scanner.** From the dashboard or contacts area, start a business-card scan.
2. **Capture the card.** Choose the camera to take a photo, or pick an existing photo from your gallery. On Android, the camera permission is requested only now; on the web, the browser prompts for camera access. If you'd rather not grant the camera, use the gallery option.
3. **Wait for recognition.** Tesseract.js reads the card locally and shows progress. No image is uploaded for this step.
4. **Review the extracted fields.** SnapContact pre-fills the name, phone(s), and email(s) with a confidence indicator. Correct anything the OCR misread — names with unusual fonts and stylized logos are the usual culprits.
5. **Add context (optional).** Tag the contact (for example `event-2026`) and write a note about where you met.
6. **Save.** The contact is created in your account. If you want to keep the card image for reference, attach it — only then is the image stored under your account via FilesHub.

## Tips for a clean scan

- Fill the frame with the card and avoid steep angles.
- Even, diffuse light beats direct glare.
- If the card is double-sided, scan the side with the contact details; add the rest as a note.
- Low confidence is a signal to slow down and fix fields by hand rather than save and forget.

## Frequently asked questions

**Is my card photo uploaded?** No, not unless you attach it to the contact. OCR runs on your device.

**Can I scan from a photo I already took?** Yes — pick it from your gallery instead of using the camera.

**What if the name comes out wrong?** Edit it in the review step before saving; you always confirm fields.

**Does scanning need internet?** Recognition is local; saving the contact syncs to your account when you're online.
