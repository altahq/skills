---
name: event-before-and-after
description: Turn a conference or trade show into meetings, with a pre-event invite to the right attendees and a post-event follow-up to attendees and to booth leads from badge scans, cards and notes, written from what each person said. Use when someone is going to a conference or trade show and wants meetings booked before it or follow-up after it, or has booth leads, badge scans, business cards or trade show leads to follow up.
metadata:
  agent: Katie
  category: Events
  ends_in: draft campaigns
---

# Event Before and After

An event is the one week a cold list becomes warm, and booth leads go cold in days. This play uses both sides of it.

## What it asks you once

1. **The event** - name, dates and where your team will be
2. **The list** - before: an attendee CSV, or the speaker and sponsor pages; after: a badge scan export, card photos or a list
3. **Booth notes** - anything the team wrote down
4. **Your goal** - meetings at the event, or calls after it

## How it runs

1. **Pick the side**: before the event (invite attendees to meet), after it (follow up with attendees and booth leads), or both
2. **Clean and match the list** to your ICP and drop the rest; enrich name, role and company
3. **Find the right contact** where only a company is listed
4. **After**: match booth notes to each person and sort by heat - asked for a demo, interested, just a badge scan
5. **Draft**: a pre-event invite with a reason to meet there, and a follow-up that references the event and, for booth leads, what each person said
6. **Stop for approval** on every draft

## Run it with the Alta connector

The connector does not read web pages or files. Work from what is in the conversation: the attendee rows, or the
speaker and sponsor names, the user pastes in, and the scans, card photos and notes you can read there. Clean them
into one list: name, role, company, email or LinkedIn URL, and what they said.

1. `create_audience` for the event. For booth leads, `list_prospect_fields`, then `create_prospect_field` for
   "Booth notes" and "Heat" if they are missing. `add_prospects` with the people (up to 100 per call; each needs an
   email, a LinkedIn URL, or first name, last name and company), with those fields for booth leads.
2. **Company only**: `update_audience` with a query on company_domain or company_name and the ICP titles, to find the
   right contact at each.
3. **Booth leads**: `estimate_audience_enrichment`, then `enrich_audience` to fill missing emails and roles once the
   user agrees to the cost.
4. **ICP filter**: read the audience with `list_audience_people`, show the user who fails the ICP and why, and take
   them out with `remove_audience_records`.
5. **Existing customers**: `ask_alta_agent` for which of these people or companies are already customers in the CRM,
   and who owns them. List them for the user to pass to their owners (the connector does not hand them over), and take
   them out: `list_audience_people` for their record ids, then `remove_audience_records`.
6. Call `load_skill` with `campaign-creation` and follow it on that audience once per side: the pre-event invite (the
   event, the dates and a reason to meet there in the `pitchBrief`), and the post-event follow-up (name the event and
   write from each person's booth notes). The per-person follow-ups live in that one draft campaign.
7. Do not call `launch_campaign`. Call `open_draft_campaign_in_alta` for each draft and give the user the links.
   Remind them to launch the follow-up as soon as the event closes.

## Run it in Alta

1. **Audiences → People → Create Audience → CSV**: upload the attendee list or badge scan export (it needs an Email or
   LinkedIn column), with the booth notes as a column, map its columns and enrich it. For companies with no contact,
   Add people → People Search with the companies and the roles.
2. Filter the audience and **Delete from audience** the people outside your ICP.
3. **Campaigns → New campaign** on that audience, once per side: the invite and the follow-up. Write the follow-up's
   touch points from the notes, choose **Co-Pilot** in Setup so every message waits for review, and leave both as
   drafts. Launch the follow-up from Setup within two days of the event closing.

**Ask Alta** (sidebar, top) can build the drafts once the audience exists, or from a pasted list and notes. It stops
at a saved draft.

## What good looks like

- Under half the attendee list survives the ICP filter - a list that barely shrinks was not filtered
- The pre-event invite names a reason to meet at this event, not a generic demo ask
- Booth follow-up drafts are ready the same day, hot leads on top, each built on what the person said when notes exist
- The follow-up goes out within two days of the event closing
- Existing customers go to their owner

## Rules

- Never claim someone attended a session you cannot confirm
- Mention the event and what they said, never a generic thanks for stopping by
- Existing customers go to their owner, not a sales follow-up
- Never launch. The play ends at a draft.

## What you get

- A draft pre-event invite and a draft follow-up campaign
- Booth leads sorted by heat, with a same-day draft for each
