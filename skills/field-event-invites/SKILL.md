---
name: field-event-invites
description: Invite the right buyers to a dinner, meetup or roundtable near them, and follow up after. Use when someone is hosting a dinner, meetup, roundtable or local event and wants the right people invited.
metadata:
  agent: Katie
  category: Events
  ends_in: draft invites and follow-ups
---

# Field Event Invites

Small rooms build big pipelines when the right people are in them.

## What it asks you once

1. **The event** - city, date, format and seat count
2. **Who belongs in the room** - titles and accounts

## How it runs

1. **Find target accounts** within reach of the venue
2. **Pick the right person** at each
3. **Draft a personal invite** with the reason they belong there
4. **Draft the follow-up** for after the event
5. **Stop for approval**

## Run it with the Alta connector

1. `search_prospects` for the room: the titles the user named, and location_city or location_region around the venue
   (or company_domain for named accounts). Show the query and the count.
2. `create_audience`, then `update_audience` with that query and `amount` no higher than the seat count, so the guest
   list cannot outgrow the room. Review it with `list_audience_people` and drop anyone who does not belong with
   `remove_audience_records`.
3. Call `load_skill` with `campaign-creation` twice on that audience: the invite (city, date, format and why this
   person belongs, in the `pitchBrief`), then the follow-up for after the event.
4. Do not call `launch_campaign`. Call `open_draft_campaign_in_alta` for both and give the user the links.

## Run it in Alta

1. **Audiences → People → Create Audience → People Search**: the titles, and the city or region of the venue. Import
   no more people than you have seats, and delete the ones who do not belong.
2. **Campaigns → New campaign**, twice, on that audience: the invite, then the follow-up. Put the event details and
   the reason to come in Value proposition, and leave both as drafts.

**Ask Alta** (sidebar, top) can build the audience and both drafts from the event details.

## What good looks like

- Every invitee can reach the venue easily and belongs in the room
- The invite says why this person, not just when and where
- The guest list never exceeds the seat count

## Rules

- Never overbook beyond the seat count
- Never launch. The play ends at a draft.
