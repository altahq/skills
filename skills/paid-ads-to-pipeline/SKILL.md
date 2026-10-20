---
name: paid-ads-to-pipeline
description: Connect Google Ads, LinkedIn Ads and Microsoft Ads spend to CRM pipeline, with cost per meeting and per deal per campaign. Use when someone asks about ad spend, cost per lead, paid acquisition or ROAS.
metadata:
  agent: Luna
  category: Learn
  ends_in: report
---

# Paid Ads to Pipeline

Cost per click is the ad platform's number. Cost per deal is yours.

## What it asks you once

1. **The ad accounts** - Google, LinkedIn, Microsoft
2. **How leads reach the CRM** - forms, UTM fields or campaign names

## How it runs

1. **Pull spend** per campaign from each ad account
2. **Match leads** to CRM contacts, meetings and opportunities
3. **Compute cost per lead, per meeting and per deal**
4. **Flag campaigns** that look good on clicks and bad on pipeline
5. **Write the report**

## Run it with the Alta connector

The connector has no ad-platform tools. Spend is reachable only for ad accounts connected to Alta as data sources, and
pipeline only if the CRM is connected too. Check this first and say what is missing.

1. `ask_alta_agent`: which ad and CRM data the account has, and the dates each covers.
2. `ask_alta_agent`: spend, clicks and leads per ad campaign for the period; then the leads matched to CRM contacts by
   the field the user named (form, UTM field or campaign name), with their meetings, opportunities and amounts.
   Ask it to count the leads it could not match and to say how each match was made.
3. Compute cost per lead, per meeting and per deal per campaign, and mark each scale, fix or cut.

## Run it in Alta

This report is built in Luna, Alta's RevOps workspace:

1. **Connect → Integrations**: connect the ad accounts (Google Ads and LinkedIn Ads have connectors) and the CRM as
   data sources.
2. **Ask Alta** (sidebar, top): ask for cost per meeting and per deal per ad campaign, with the unmatched leads shown.
3. **Explore → Data Explorer** or **SQL Runner** to check a match.

## What good looks like

- Every campaign has a cost per meeting, not just per click
- Leads that cannot be traced are counted and shown, not hidden
- Each campaign ends with scale, fix or cut

## Rules

- Every match shows how the lead was traced
- Nothing is changed in the ad accounts - the play only reports

## What you get

- Cost per meeting and per deal for every paid campaign
- The campaigns to scale, fix or cut
