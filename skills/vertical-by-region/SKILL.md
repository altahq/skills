---
name: vertical-by-region
description: Build an audience for one industry in one region, with a vertical-specific pitch, split into campaigns per territory. Use when someone asks for an audience or campaign for one industry in one region, or to split outreach by territory.
metadata:
  agent: Katie
  category: Build lists
  ends_in: draft campaigns
---

# Vertical by Region

One industry, one territory, one pitch that sounds like you know their world.

## What it asks you once

1. **The vertical** - the industry to cover
2. **The region** - and how it splits into territories
3. **What that vertical cares about** - in your words, or let the Company Brain suggest it

## How it runs

1. **Build the audience** for the vertical in the region
2. **Write the pitch** around that vertical's priorities
3. **Split into one campaign per territory**, each with its rep
4. **Stop for approval** on every campaign

## Run it with the Alta connector

1. Call `load_skill` with `campaign-creation` and follow it once per territory. Each run's `search_prospects` query
   takes the vertical (company_industry) and only that territory's places (location_country, location_region or
   location_city), so no person lands in two territories. Show the user each query at the first pause.
2. At the pitch pause, put the vertical's priorities in the user's own words into the `pitchBrief` of
   `build_campaign_pitch`.
3. At the last pause, set the territory's rep: `match_campaign_rep`, then `update_campaign` with `repIds`.
4. Where the skill says to launch, do not call `launch_campaign`. Call `open_draft_campaign_in_alta` for each campaign
   and give the user the links: this play ends at drafts.

## Run it in Alta

- **Ask Alta** (sidebar, top): give it the vertical, the territories and the rep for each, and ask for one draft
  campaign per territory. It stops at saved drafts.
- **By hand**: Campaigns → New campaign, once per territory. In Target audience, search for the industry and that
  territory's locations; in Value proposition, write the vertical's priorities; in Setup, pick the territory's rep.
  Leave each one as a draft.

## What good looks like

- The pitch uses that industry's own words and problems
- Each territory campaign goes to the rep who owns it, with no overlap
- No campaign is so small it is not worth a rep's week

## Rules

- Never launch. The play ends at drafts.
