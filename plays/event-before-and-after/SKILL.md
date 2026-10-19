---
name: event-before-and-after
description: Turn an event attendee list into meetings with a pre-event invite and a post-event follow-up. Use when someone is going to a conference or trade show and wants meetings booked before it or follow-up after it.
metadata:
  agent: Katie
  category: Events
  ends_in: two draft campaigns
---

# Event Before and After

An event is the one week a cold list becomes warm. This play makes sure you use both sides of it.

## What it asks you once

1. **The event** - name, dates and where your team will be
2. **The list** - an attendee CSV, or the speaker and sponsor pages
3. **Your goal** - meetings at the event, or calls after it

## How it runs

1. **Match the list** to your ICP and drop the rest
2. **Find the right contact** where only a company is listed
3. **Draft a pre-event invite** with a reason to meet there
4. **Draft a post-event follow-up** that references the event
5. **Stop for approval** on both

## Run it with the Alta connector

The connector does not read web pages or files. Work from the attendee rows, or the speaker and sponsor names, that
the user pastes in.

1. `create_audience`, then `add_prospects` with the attendees (up to 100 per call; each needs an email, a LinkedIn URL,
   or first name, last name and company).
2. **Company only**: `update_audience` with a query on company_domain or company_name and the ICP titles, to find the
   right contact at each.
3. **ICP filter**: read the audience with `list_audience_people`, show the user who fails the ICP and why, and take
   them out with `remove_audience_records`.
4. Call `load_skill` with `campaign-creation` twice on that audience: the pre-event invite (the event, the dates and a
   reason to meet there in the `pitchBrief`), then the post-event follow-up.
5. Do not call `launch_campaign`. Call `open_draft_campaign_in_alta` for both and give the user the links. Remind them
   to launch the follow-up as soon as the event closes.

## Run it in Alta

1. **Audiences → People → Create Audience → CSV**: upload the attendee list (it needs an email or LinkedIn URL column)
   and map its columns. For companies with no contact, Add people → People Search with the companies and the roles.
2. Filter the audience and **Delete from audience** the people outside your ICP.
3. **Campaigns → New campaign**, twice, on that audience: the invite and the follow-up. Leave both as drafts, and
   launch the follow-up from Setup within two days of the event closing.

**Ask Alta** (sidebar, top) can build both drafts once the audience exists.

## What good looks like

- Under half the attendee list survives the ICP filter - a list that barely shrinks was not filtered
- The pre-event invite names a reason to meet at this event, not a generic demo ask
- The follow-up goes out within two days of the event closing

## Rules

- Never claim someone attended a session you cannot confirm
- Never launch. The play ends at a draft.
