---
name: funding-and-ma-moments
description: Reach ICP companies that just raised funding, acquired a company or were acquired, with a message about what that moment changes. Use when someone asks about funding signals, recently raised companies, acquisitions or mergers.
metadata:
  agent: Katie
  category: Signals
  ends_in: draft campaign
---

# Funding and M&A Moments

New money and new owners mean new plans, new hires and new budgets.

## What it asks you once

1. **Which moments count** - funding rounds, acquisitions, or both
2. **How fresh** - the last 30 to 60 days

## How it runs

1. **Find funding and M&A events** at ICP companies
2. **Read the event** - round size, stage, or who joined whom
3. **Match the angle** - growth after funding, integration after a deal
4. **Draft the outreach** and stop for approval

## Run it with the Alta connector

The people search has no funding or deal filter, so the play builds the ICP audience first and asks Alta for each
company's signals.

1. `search_prospects` for the people you would write to (for example CEO, CFO, VP Sales) at ICP companies. Show the
   user the query.
2. `create_audience`, then `update_audience` with that query and an amount.
3. `estimate_audience_enrichment`, then `enrich_audience` with companyEnrichmentGoals ["signals"] and enrichmentGoals
   []. `get_audience_enrichment_progress` says when it has finished.
4. `list_audience_people` with signals ["funding_announcement"], then ["acquisition"]. Each company signal carries the
   round, amount and investors, or the acquired and acquiring company, the announcement date and its source link.
   Keep events inside the chosen window and drop any without a date.
5. Keep funding and M&A apart: one audience and one draft each. `remove_audience_records` with
   excludeAudienceListItemIds set to the records you keep clears the rest.
6. `load_skill` with `campaign-creation` over that audience, with the angle (growth after funding, integration after
   a deal) as the pitch brief. Do not call `launch_campaign`: call `open_draft_campaign_in_alta` and give the user the
   link.

## Run it in Alta

- **Campaigns → New campaign → Target audience → Trigger Events**: Add Trigger, pick Funding announcement or
  Acquisition, describe who to reach in "What you're looking for", and set Last X Days to 30 or 60. It keeps finding
  new matches every day.
- **Or from an audience**: Audiences → Create Audience with Search, then Add Enrichment → Alta enrichment → Company
  Signals, and Filters → Signals. Each signal opens with its details and View source.
- **Knowledge → Signals**: the signal types Katie tracks. Enrichment returns only the ones turned on.
- Go through Value proposition, Touch points and Setup, and leave the campaign as a draft.
- **Ask Alta** can build the audience, run the signals and draft the campaign; it stops at a saved draft.

## What good looks like

- Every event is from the last two months, with its source
- The message is about what changes for them now, not the headline
- Funding and M&A get different angles

## Rules

- Every event cites its source
- Never open with the round size alone
- Never launch. The play ends at a draft.

## What you get

- ICP companies with a fresh funding or M&A event
- A draft with the right angle for each
