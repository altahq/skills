---
name: launch-moment
description: Reach ICP companies that just launched a product or major feature, with outreach about selling and growing it. Use when someone wants to target product launches, feature launches or new offerings.
metadata:
  agent: Katie
  category: Signals
  ends_in: draft campaign
---

# Launch Moment

A launch is a public promise to grow. The team behind it needs pipeline now.

## What it asks you once

1. **Which launches count** - new products, major features, or both
2. **How fresh** - launches in the last 14 to 30 days

## How it runs

1. **Find launches** at ICP companies
2. **Read what launched** and who it is for
3. **Find the owner** of go-to-market for the launch
4. **Draft outreach** about getting the launch in front of buyers
5. **Stop for approval**

## Run it with the Alta connector

The people search has no launch filter, so the play builds the audience of go-to-market owners first and asks Alta
for each company's launches. Feature launches are off by default: turn them on in Alta (Knowledge → Signals) first,
since the connector cannot.

1. `search_prospects` for the owners of selling a launch (for example VP Marketing, Head of Product Marketing, VP
   Sales) at ICP companies. Show the user the query.
2. `create_audience`, then `update_audience` with that query and an amount.
3. `estimate_audience_enrichment`, then `enrich_audience` with companyEnrichmentGoals ["signals"] and enrichmentGoals
   []. `get_audience_enrichment_progress` says when it has finished.
4. `list_audience_people` with signals ["product_launch", "feature_launch"]. Each signal carries the product or feature
   name, the launch date and its source link. Keep launches inside the chosen window and name each one as the source
   does.
5. `remove_audience_records` with excludeAudienceListItemIds set to the records you keep clears the rest.
6. `load_skill` with `campaign-creation` over that audience, with the launch as the pitch brief. Do not call
   `launch_campaign`: call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

- **Knowledge → Signals**: turn on Feature launch if you want feature launches (Product launch is on by default).
- **Campaigns → New campaign → Target audience → Trigger Events**: Add Trigger, pick Product launch or Feature launch,
  write who to reach in "What you're looking for", and set Last X Days to 14 or 30.
- **Or from an audience**: Audiences → Create Audience with Search, then Add Enrichment → Alta enrichment → Company
  Signals, and Filters → Signals. Each signal shows what launched and View source.
- Go through Value proposition, Touch points and Setup, and leave the campaign as a draft.
- **Ask Alta** can build the audience, run the signals and draft the campaign; it stops at a saved draft.

## What good looks like

- Every launch is from the last month, with a link to the source
- The message shows you understood what launched
- It goes to the person who owns selling it, not the founder by default

## Rules

- Name the launch accurately, from the source
- Never launch. The play ends at a draft.

## What you get

- ICP companies with a fresh launch, and its source
- A draft built around that launch
