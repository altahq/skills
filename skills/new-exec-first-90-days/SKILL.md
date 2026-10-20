---
name: new-exec-first-90-days
description: Reach newly hired or promoted executives in their first 90 days, with an introduction built around what new leaders fix first. Use when someone asks about leadership changes, new CRO, new VP of Sales or new executives.
metadata:
  agent: Katie
  category: Signals
  ends_in: draft messages
---

# New Exec, First 90 Days

New leaders review the stack, the team and the plan in their first 90 days. That is the window.

## What it asks you once

1. **The roles** - for example CRO, VP Sales, Head of Growth
2. **New hires, promotions or both**

## How it runs

1. **Find leaders** who started or were promoted in the last 90 days
2. **Read their background** - where they came from and what they ran
3. **Write an introduction** about what new leaders in that seat usually fix first
4. **Stop for approval**

## Run it with the Alta connector

The people search cannot filter on when someone started, so the play takes everyone in those seats at ICP companies
and asks Alta which of them are new. Drafts land in Alta as a draft campaign: the connector saves a draft message only
on an existing conversation.

1. `search_prospects` for the roles (job_title, job_seniority) at ICP companies. Show the user the query.
2. `create_audience`, then `update_audience` with that query and an amount.
3. `estimate_audience_enrichment`, then `enrich_audience` with enrichmentGoals ["live_profile_data"]: that finds job
   and role changes. `get_audience_enrichment_progress` says when it has finished.
4. `list_audience_people` with signals ["job_change"] for new hires, ["role_change"] for promotions. Each signal
   carries the title, start date and previous company or role. Keep starts within the last 90 days.
5. Write the introductions here from each leader's background and wait for approval.
6. `remove_audience_records` with excludeAudienceListItemIds set to the leaders you keep, then `load_skill` with
   `campaign-creation` over that audience, with the approved angle as the pitch brief. Do not call `launch_campaign`:
   call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

- **Audiences → Create Audience** with Search, for the roles at ICP companies.
- **Signal Trackers** (under Build, Beta, when it is on for your account): New tracker → Audience: that list →
  Signal: Job change (a second tracker for Role change) → Schedule → Actions: Add to an audience list. Do not pick
  Enroll in a campaign: it starts outreach.
- **Or once**: Add Enrichment → Alta enrichment → Person Signals, then Filters → Signals.
- **Or by search**: Campaigns → New campaign → Target audience → Trigger Events, with Leadership change or Job change
  and Last X Days 90.
- **Create Campaign** from the list of new leaders and leave it as a draft. **Ask Alta** can do the same and stops at
  a saved draft.

## What good looks like

- Every leader started within the last 90 days
- The message references their background, not a generic congratulations
- It never criticizes their predecessor

## Rules

- Congratulate briefly, then be useful
- Never assume what their predecessor did wrong
- Never launch. The play ends at a draft.

## What you get

- New leaders at ICP companies, with their start date
- An introduction for each
