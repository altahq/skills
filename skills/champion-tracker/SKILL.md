---
name: champion-tracker
description: Track customers, champions and past users who change jobs, and draft a warm note at their new company. Use when someone asks about job changes, former customers, champions who left, or warm outbound.
metadata:
  agent: Katie
  category: Signals
  ends_in: draft notes
---

# Champion Tracker

People who already love your product are your warmest pipeline the day they change jobs.

## What it asks you once

1. **Who to watch** - champions, users and buyers from your CRM
2. **How fresh** - job changes in the last 30 to 90 days

## How it runs

1. **Watch the list** for job changes and new companies
2. **Keep the ones whose new company fits** your ICP
3. **Pull the history** - what they used and liked
4. **Draft a warm note** that congratulates first and offers help second
5. **Stop for approval**

## Run it with the Alta connector

The connector sees job changes only for people already in an Alta audience, and it cannot save a note as a draft
until the person is a prospect in a campaign. So the notes are written here for approval and land in Alta as a draft
campaign.

1. `list_crm_lists` to find the champions list, then `create_audience` and `update_audience` with crmList. Method
   "dynamic" keeps new champions coming in daily, where the CRM source supports it.
2. `estimate_audience_enrichment`, then `enrich_audience` with enrichmentGoals ["live_profile_data"]: that is what
   finds job changes. `get_audience_enrichment_progress` says when it has finished.
3. `list_audience_people` with signals ["job_change"]. Each signal carries the new company, title, start date and
   previous company. Keep moves inside the window the user chose, at companies that fit the ICP.
4. `ask_alta_agent` for what the CRM holds on each person and their old account, so the note names something real.
5. Show the notes and wait for approval. Then `create_audience` and `add_prospects` with each mover's linkedinUrl,
   new company and title, and `load_skill` with `campaign-creation` over that audience, using the approved note as
   the pitch direction. Do not call `launch_campaign`: call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

- **Audiences → Create Audience**, with your CRM as the source and the champions list. Daily Flow keeps it current.
- **Signal Trackers** (under Build, Beta, when it is on for your account): New tracker → Audience: that list →
  Signal: Job change → Schedule → Actions: Add to an audience list, and Notify me. Every move is logged on the
  tracker page with the previous company and role. Do not pick Enroll in a campaign: it starts outreach.
- **Without a tracker**: open the list, Add Enrichment → Alta enrichment → Person Signals, then Filters → Signals:
  Job change.
- From the list of movers, **Create Campaign** and go through Target audience, Value proposition, Touch points and
  Setup. Leave it as a draft.
- **Ask Alta** can run the enrichment, read the movers and build the draft; it stops at a saved draft.

## What good looks like

- The note reaches them within a month of the move, before competitors do
- It names something they actually did with your product
- Only new companies that fit your ICP make the list

## Rules

- Congratulate before you pitch
- Never contact someone who left on bad terms with your product
- Never launch. The play ends at a draft.

## What you get

- Champions who moved, with their new company and role
- A warm draft for each, built on what they used before
