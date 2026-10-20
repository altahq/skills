---
name: pipeline-attribution
description: Connect campaigns, channels and plays to the meetings, pipeline and revenue they produced. Use when someone asks about ROI, attribution, pipeline generated or which campaigns pay back.
metadata:
  agent: Luna
  category: Learn
  ends_in: report
---

# Pipeline Attribution

Replies are a signal. Pipeline and revenue are the answer.

## What it asks you once

1. **The period** - a month, a quarter, or since launch
2. **Your attribution rule** - first touch, last touch, or both

## How it runs

1. **Join campaigns to the CRM** - meetings, opportunities and closed deals
2. **Credit each deal** to the campaign, channel and play that sourced or touched it
3. **Rank by pipeline and revenue**, not by replies
4. **Show cost per meeting and per deal** where spend is known
5. **Write the report**

## Run it with the Alta connector

Alta has no attribution model: deals are credited by joining Alta's prospects to your CRM in the warehouse, which
needs the CRM connected as a data source. Say which rule each number uses.

1. `list_campaigns` (`limit` 100) for the campaigns in the period, with their `launchedAt`.
2. `ask_alta_agent`: for each campaign, meetings booked, then the CRM deals whose contact or company matches a
   prospect of the campaign, with amount, stage, created and close dates. First touch: the earliest campaign that
   contacted the person before the deal was created; last touch: the latest one. Ask for each view separately so no
   deal is counted twice within a view.
3. `ask_alta_agent` again for the same per channel (email, LinkedIn, calls), and replies per campaign, to show the
   campaigns with fewer replies but more pipeline.
4. Cost per meeting and per deal only where the user gives the spend.

## Run it in Alta

- **Analyze → Performance**, filtered by **Campaign** or **Campaign Tag** (to group campaigns into plays):
  **Meeting Booked** and **Prospect Status** for each.
- **Ask Alta** (sidebar, top): ask for pipeline and won revenue per campaign, first touch and last touch, from your
  connected CRM.

## What good looks like

- Every number shows the attribution rule behind it
- No deal is counted twice
- At least one surprise: a campaign with fewer replies but more pipeline

## Rules

- Show the attribution rule on every number
- Never double-count a deal across first and last touch views
- Nothing is changed - the play only reports

## What you get

- Pipeline and revenue per campaign, channel and play
- The campaigns that pay back, and the ones that only get replies
