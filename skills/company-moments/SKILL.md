---
name: company-moments
description: Reach ICP companies at a moment that changes what they need (they raised funding, acquired a company or were acquired, launched a product or major feature, or opened a new office or region) with outreach about what it changes. Use when someone asks about funding signals, recently raised companies, acquisitions or mergers, product launches, feature launches or new offerings, geo expansion, new offices, new markets or international expansion signals.
metadata:
  agent: Katie
  category: Signals
  ends_in: draft campaign
---

# Company Moments

New money, new owners, a launch or a new office: new plans and targets, no pipeline yet.

## What it asks you once

1. **Which moments count** - funding rounds, acquisitions, product launches, major feature launches, new offices or regions (and, for expansion, which regions matter to you)
2. **How fresh** - the last 30 to 60 days for funding, M&A and expansion; 14 to 30 days for launches

## How it runs

1. **Find the moments** at ICP companies
2. **Read the event** - round size and stage, who joined whom, what launched and who it is for, or which region
3. **Find who owns what it changes** - leaders after funding or a deal, the launch's go-to-market owner, the head of the new region
4. **Match the angle** - growth after funding, integration after a deal, getting a launch in front of buyers, getting known and building pipeline in a new market
5. **Draft the outreach** and stop for approval

## Run it with the Alta connector

The people search has no funding, deal, launch or expansion filter, so the play builds the ICP audience first and asks
Alta for each company's signals. Feature launch and Geographic expansion are off by default: turn them on in Alta
(Knowledge → Signals) first, since the connector cannot.

1. `search_prospects` for the people you would write to at ICP companies: for funding and M&A, for example CEO, CFO,
   VP Sales; for a launch, the owners of selling it (for example VP Marketing, Head of Product Marketing, VP Sales);
   for expansion, leaders. Show the user the query.
2. `create_audience`, then `update_audience` with that query and an amount.
3. `estimate_audience_enrichment`, then `enrich_audience` with companyEnrichmentGoals ["signals"] and enrichmentGoals
   []. `get_audience_enrichment_progress` says when it has finished.
4. `list_audience_people` with the moment's signals: ["funding_announcement"], ["acquisition"],
   ["product_launch", "feature_launch"] or ["geo_expansion"]. A funding signal carries the round, amount and
   investors; an acquisition the acquired and acquiring company; a launch the product or feature name; an expansion
   the region, country or city. Each carries its date and source link. Keep events inside the chosen window (and, for
   expansion, the regions the user cares about); a funding or M&A event without a date is dropped. Name each launch
   as the source does.
5. Keep the moments apart: one audience and one draft each. `remove_audience_records` with
   excludeAudienceListItemIds set to the records you keep clears the rest.
6. For expansion, find who leads the new region: `search_prospects` with the expanding companies' company_domain,
   location_country set to the new market and leadership seniority. Then `create_audience` and `update_audience` with
   that query and an amount.
7. `load_skill` with `campaign-creation` over that audience, with the moment's angle as the pitch brief. Do not call
   `launch_campaign`: call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

- **Knowledge → Signals**: the signal types Katie tracks; enrichment returns only the ones turned on. Turn on Feature
  launch or Geographic expansion if you want them (Product launch is on by default).
- **Campaigns → New campaign → Target audience → Trigger Events**: Add Trigger, pick Funding announcement,
  Acquisition, Product launch, Feature launch or Geographic expansion, describe who to reach in "What you're looking
  for" (for example "the head of the new UK office"), and set Last X Days to the window
  (14 or 30 for launches, 60 for expansion). It keeps finding new matches every day.
- **Or from an audience**: Audiences → Create Audience with Search, then Add Enrichment → Alta enrichment → Company
  Signals, and Filters → Signals. Each signal opens with its details (what launched, the region) and View source. For
  expansion, then a Search audience with those company domains and the new country to find who leads it.
- Go through Value proposition, Touch points and Setup, and leave the campaign as a draft.
- **Ask Alta** can build the audience, run the signals, find the regional leaders and draft the campaign; it stops at
  a saved draft.

## What good looks like

- Every event is recent (launches from the last month, the rest from the last two months), with its source
- The message is about what changes for them now, not the headline, and shows you understood what happened
- Each moment gets its own angle; an expansion speaks to that market, not the company in general
- It goes to the person who owns what changed (selling the launch, the new region), not the founder by default

## Rules

- Every event cites its source
- Name the launch accurately, from the source
- Never open with the round size alone
- Never launch. The play ends at a draft.

## What you get

- ICP companies with a fresh funding, M&A, launch or expansion event, with its details and source
- A draft with the right angle for each moment, for the person it changes things for
