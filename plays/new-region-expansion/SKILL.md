---
name: new-region-expansion
description: Reach ICP companies that are opening a new office or entering a new region, with outreach about winning the new market. Use when someone asks about geo expansion, new offices, new markets or international expansion signals.
metadata:
  agent: Katie
  category: Signals
  ends_in: draft campaign
---

# New Region Expansion

A new office comes with a target, a new team and no pipeline yet.

## What it asks you once

1. **Which regions matter** to you
2. **How fresh** - announcements in the last 30 to 60 days

## How it runs

1. **Find expansion news** at ICP companies - new offices, new regions
2. **Find who leads the new region**
3. **Write the angle** - getting known and building pipeline in a new market
4. **Draft the outreach** and stop for approval

## Run it with the Alta connector

The people search has no expansion filter, so the play asks Alta for each ICP company's signals. Geographic expansion
is off by default: turn it on in Alta (Knowledge → Signals) first, since the connector cannot.

1. `search_prospects` for leaders at ICP companies, then `create_audience` and `update_audience` with that query and
   an amount.
2. `estimate_audience_enrichment`, then `enrich_audience` with companyEnrichmentGoals ["signals"] and enrichmentGoals
   []. `get_audience_enrichment_progress` says when it has finished.
3. `list_audience_people` with signals ["geo_expansion"]. Each signal carries the region, country or city, the
   announcement date and its source link. Keep the regions the user cares about, inside the chosen window.
4. Find who leads the new region: `search_prospects` with the expanding companies' company_domain, location_country
   set to the new market and leadership seniority. Then `create_audience` and `update_audience` with that query and an amount.
5. `load_skill` with `campaign-creation` over that audience, with winning the new market as the pitch brief. Do not
   call `launch_campaign`: call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

- **Knowledge → Signals**: turn on Geographic expansion.
- **Campaigns → New campaign → Target audience → Trigger Events**: Add Trigger, pick Geographic expansion, write who
  to reach in "What you're looking for" (for example "the head of the new UK office"), and set Last X Days to 60.
- **Or from an audience**: Add Enrichment → Alta enrichment → Company Signals, Filters → Signals, then a Search
  audience with those company domains and the new country to find who leads it.
- Go through Value proposition, Touch points and Setup, and leave the campaign as a draft.
- **Ask Alta** can run the signals, find the regional leaders and draft the campaign; it stops at a saved draft.

## What good looks like

- Every expansion is recent and cites its source
- The message goes to the person who owns the new region
- It speaks to that market, not the company in general

## Rules

- Every expansion cites its source
- Never launch. The play ends at a draft.

## What you get

- ICP companies expanding, with the region and source
- A draft for the person leading the new region
