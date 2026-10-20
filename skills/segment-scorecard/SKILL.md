---
name: segment-scorecard
description: Break outbound results down by title, industry, company size and region to find which segments reply and convert. Use when someone asks which personas, industries or segments respond best.
metadata:
  agent: Luna
  category: Learn
  ends_in: report
---

# Segment Scorecard

One average hides your best and worst segments. Split it.

## How it runs

1. **Split results** by title, industry, company size and region
2. **Compute reply, meeting and pipeline rates** for each segment
3. **Ignore segments too small** to trust
4. **Name the segments** to double down on and the ones to drop
5. **Write the report**

## Run it with the Alta connector

1. `ask_alta_agent`: over the period, contacted prospects, replies, positive replies and meetings booked, split by
   job title (grouped by seniority or function), industry, company size and country. Ask for the counts, not only the
   rates, so every rate carries its sample size.
2. If the CRM is connected as a data source, ask `ask_alta_agent` for the same split on opportunities and amount.
3. To check a segment by hand, `list_prospects` with `campaignId` (`limit` 100) and `get_person` for the title and
   country of a few in it.

## Run it in Alta

- **Analyze → Performance**: the **Campaign Performance**, **Rep Performance** and **Company Performance** tables
  split results by campaign, rep and company. The page has no split by title, industry, size or region.
- **Ask Alta** (sidebar, top): ask for the reply and meeting rate by title, industry, company size and region, with
  the number of contacted prospects in each.

## What good looks like

- Every rate shows its sample size
- No winner is called from a handful of results
- It ends with clear double down and stop lists

## Rules

- Show the sample size next to every rate
- Never call a winner from a handful of results

## What you get

- A scorecard of every segment
- Where to double down, and what to stop
