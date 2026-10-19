---
name: mql-rescue
description: Follow up within minutes with every MQL or form fill that did not book a meeting, qualify them, and offer times. Use when someone asks about MQLs or form fills that did not book a meeting, or about following up on inbound leads fast.
metadata:
  agent: Alex
  category: Qualify
  ends_in: meetings booked or a draft follow-up
---

# MQL Rescue

Most form fills never become meetings because nobody answers fast enough. This play answers in minutes.

## How it runs

1. **Watch new MQLs and form fills** that did not book a meeting
2. **Reach out within minutes** by call or chat, using the page they came from
3. **Qualify** against your criteria using CRM context
4. **Offer times** from the right rep's calendar, or hand off with a summary

## Run it with the Alta connector

Reaching form fills within minutes is set up in Alta: the connector cannot watch a form, place a call or create an
assistant. It can find the leads that slipped and build the automation for the user to publish.

1. `ask_alta_agent` for MQLs and form fills of the last days with no meeting booked, with the form's fields and the
   page they came from.
2. `build_workflow` with a task such as "when a form posts to this webhook, add the person to campaign X" or "trigger
   an assistant call". It saves an unpublished draft; the user reviews and publishes it in Alta.
3. `list_prospects` with that campaign's `campaignId` and `get_prospect_timeline` to see who was reached and who
   booked.

## Run it in Alta

1. **Campaigns → New campaign**, with **Webhook** (your form tool posts each fill) or your CRM as the audience source.
2. **Touch points**: a Call step with a Calling Assistant (book meeting and check availability under its
   **Configurations → Tools**, and a Get Lead Context tool from **Settings → Tools** for the CRM record), then email or SMS on the No Answer branch.
3. **Setup**: a **Reply Assistant** with **Use rep linked tools** offers times from the rep's calendar; its outcomes
   send the closing message to unqualified leads. Set the hours in **Schedule Settings**, or **Start Sequence
   Immediately** for speed.

## What good looks like

- First touch within minutes of the form, inside the lead's working hours
- Qualified leads leave with a booked time, not a promise of a follow-up
- Nobody is asked something the form already answered

## Rules

- Respect quiet hours and the lead's time zone
- Never ask for what the form already told you
- Unqualified leads get a polite close, not a sequence
