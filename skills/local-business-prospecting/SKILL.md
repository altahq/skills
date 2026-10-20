---
name: local-business-prospecting
description: Find local businesses by city and business type from Google Maps, find the owner or manager, and draft a local campaign. Use when someone sells to clinics, dealerships, restaurants, franchises or other local businesses.
metadata:
  agent: Katie
  category: Pipeline
  ends_in: draft campaign
---

# Local Business Prospecting

Local businesses are not in the usual B2B databases. They are on the map.

## What it asks you once

1. **The business type** - for example dental clinics, car dealerships, golf clubs
2. **The area** - cities or regions
3. **Who decides** - owner, manager, or a specific role

## How it runs

1. **Search Google Maps** for the business type in each area
2. **Find the decision maker** for each business
3. **Drop chains you already sell to** and duplicates
4. **Write a local pitch** that names the area and the business type
5. **Draft the campaign** and stop for approval

## Run it with the Alta connector

The connector cannot search Google Maps: that source is in Alta's campaign builder only. Say so, and send the user to
"Run it in Alta" for the map search. Over the connector you can still:

1. `search_prospects` as a fallback: the business type (company_industry), the area (company_city, location_city or
   location_region) and the decider (job_title contains owner, manager or the role named). Tell the user it reaches
   only businesses in Alta's people dataset, which misses many local ones.
2. **Drop chains you sell to**: get your customers' domains from `ask_alta_agent`, and add company_domain not_in to
   the query. `list_communication_opt_outs` shows the domains on the DNC list.
3. Call `load_skill` with `campaign-creation` on that query, naming the area and the business type in the
   `pitchBrief`. Do not call `launch_campaign`; call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

1. **Campaigns → New campaign → Target audience → ABM → Companies Google Maps** (Find Local Businesses): pick the
   search area and radius, the business types or keywords, select the businesses, then in **People** the owner or
   manager role to reach at each.
2. **Settings → DNC List → Companies**: add the domains of chains you already sell to, so no campaign reaches them.
3. **Value proposition**: the local pitch. **Setup → Schedule Settings**: Prospect timezone and local working hours
   for quiet hours. Leave it as a draft.

## What good looks like

- Every business on the list is open and matches the type you asked for
- Each one has a named decision maker, not a generic inbox
- The pitch mentions the area and the business type, never a template feel

## Rules

- Respect local quiet hours and opt-outs
- Never launch. The play ends at a draft.

## What you get

- A list of local businesses with their decision maker
- A pitch written for that business type and area
