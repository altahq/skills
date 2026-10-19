---
name: booth-lead-follow-up
description: Turn badge scans, business cards and booth notes into same-day follow-up written from what each person said. Use when someone has booth leads, badge scans, business cards or trade show leads to follow up.
metadata:
  agent: Alex
  category: Events
  ends_in: draft follow-ups
---

# Booth Lead Follow-Up

Booth leads go cold in days. Most teams follow up in weeks.

## What it asks you once

1. **The leads** - a badge scan export, card photos or a list
2. **Booth notes** - anything the team wrote down

## How it runs

1. **Clean and enrich** the leads - name, role, company
2. **Match booth notes** to each person
3. **Sort by heat** - asked for a demo, interested, just a badge scan
4. **Draft a follow-up** for each, built on what they said
5. **Stop for approval**

## Run it with the Alta connector

1. Read the scans, card photos and notes in the conversation, and clean them into one list: name, role, company,
   email or LinkedIn URL, and what they said.
2. `create_audience` for the event, then `list_prospect_fields`; `create_prospect_field` for "Booth notes" and "Heat"
   if they are missing. `add_prospects` with the leads and those fields (up to the per-call limit).
3. `estimate_audience_enrichment`, then `enrich_audience` to fill missing emails and roles once the user agrees to the
   cost.
4. `ask_alta_agent` for which of these people or companies are already customers in the CRM, and who owns them. List
   them for the user to pass to their owners, and take them out of the audience: `list_audience_people` for their
   record ids, then `remove_audience_records`.
5. `load_skill` with `campaign-creation` and follow it over this audience, with instructions to write from each
   person's booth notes and to name the event.
6. Do not call `launch_campaign`. Call `open_draft_campaign_in_alta` and give the user the link: this play ends at a
   draft.

## Run it in Alta

- **Audiences**: upload the badge scan export as a CSV (it needs an Email or LinkedIn column), with the notes as a
  column, and enrich it.
- **Campaigns → New campaign** over that audience: write the touch points from the notes, choose **Co-Pilot** in Setup
  so every message waits for review, and save it as a draft.
- **Ask Alta** (sidebar, top): paste the list and the notes and ask for a draft campaign. It stops at a saved draft.

## What good looks like

- Drafts are ready the same day as the event
- Each one uses what the person said at the booth when notes exist
- Hot leads are on top, existing customers go to their owner

## Rules

- Mention the event and what they said, never a generic thanks for stopping by
- Existing customers go to their owner, not a sales follow-up
- Never launch. The play ends at a draft.

## What you get

- Booth leads sorted by heat
- A same-day draft for each
