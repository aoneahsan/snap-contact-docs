---
sidebar_position: 7
title: Messaging & campaigns
description: SnapContact's email and SMS campaigns are bring-your-own-key — connect your own SendGrid, Mailgun, or Twilio account to send, or fall back to your device's native composer. No demo mode, no hidden sending.
keywords: [email campaign, sms campaign, bring your own key, sendgrid, mailgun, twilio, mailto, contact messaging]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Messaging & campaigns

**SnapContact can send a personalized email or SMS to a segment of your contacts, but it is bring-your-own-key: you connect your own SendGrid, Mailgun, or Twilio account to send through a provider, and without one the app falls back to opening your device's native mail or SMS composer one recipient at a time.** There is no demo mode and no hidden sending — a message goes out either through your provider or through a composer you press send on.

## Two honest delivery paths

| Path | When it's used | Behavior |
|---|---|---|
| Provider (BYO key) | You've connected SendGrid / Mailgun (email) or Twilio (SMS). | The campaign sends automatically through the provider's API, resolving `{{variable}}` placeholders per recipient. |
| Native composer | No provider is connected. | The app queues messages and opens your device's mail or SMS composer per recipient, so you send each one yourself. |

Because the composer fallback uses `mailto:` / the SMS app, campaign bodies on that path are plain text — `mailto:` cannot carry HTML.

## Personalization with variables

Templates use `{{variable}}` placeholders (for example a first name) that are resolved per recipient from the contact's details before sending. Opted-out contacts and contacts without an address are filtered out automatically, and every send is recorded against the contact so your timeline stays accurate.

## Why bring-your-own-key

Sending email and SMS at scale costs money and requires sender reputation that belongs to you, not the app. SnapContact stays zero-cost by never running a shared sending backend: you bring the provider account you already trust, keep control of deliverability and billing, and the app simply orchestrates the personalized send. When you don't want to connect a provider, the native-composer path means the feature still works for a handful of messages without pretending to send in bulk.

## Honest limits

- Bulk automatic sending requires your own provider key; there is no built-in sending quota.
- The native-composer fallback is one-at-a-time and plain text by design.
- SnapContact does not send anything silently — provider sends are explicit, and composer sends require your tap.

## Frequently asked questions

**Can I send a campaign without setting anything up?** Yes, in a limited way — without a provider, the app opens your device composer per recipient. For automatic bulk sending, connect your own SendGrid, Mailgun, or Twilio account.

**Does SnapContact send email/SMS through its own servers?** No. Sends go through your connected provider, or through your device's composer. There is no shared sending backend.

**Why is my campaign body plain text?** Because the no-provider fallback uses `mailto:`, which can't carry HTML. Connect an email provider for richer messages.

**Are opt-outs respected?** Yes — opted-out and address-less contacts are filtered out automatically.

**Is each send recorded?** Yes, against the recipient contact, so the timeline reflects what was sent.
