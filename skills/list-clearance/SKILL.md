---
name: list-clearance
description: Check a list before it reaches a campaign and return a go, fix or stop verdict. Use when someone asks to check, clean or verify a list before a campaign, or to remove customers, opt-outs and duplicates.
metadata:
  agent: Katie
  category: Clean
  ends_in: verdict and clean list
---

# List Clearance

The cheapest bounce is the one you never send.

## How it runs

1. **Remove current customers and open deals**
2. **Remove opt-outs** and your do-not-contact list
3. **Remove duplicates** and people who left the company
4. **Check what is left** for missing emails and wrong titles
5. **Return a verdict** - go, fix or stop - with the rows it kept and why it dropped the rest

## Run it with the Alta connector

1. Get the list into an audience: an existing one with `list_audiences` and `get_audience`; a CRM list with
   `list_crm_lists`, `create_audience` and `update_audience` (crmList); rows the user pastes with `add_prospects`
   (up to 100 per call).
2. **Customers and open deals**: ask `ask_alta_agent` for the domains of current customers and of accounts with an
   open deal. It answers only for a CRM synced to Alta's warehouse; say so if it is not.
3. **Opt-outs**: check each email, LinkedIn URL and domain with `list_communication_opt_outs` (`search` by value).
4. **Duplicates and leavers**: read the rows with `list_audience_people` (up to 100 at a time). For people who left,
   quote the cost with `estimate_audience_enrichment`, then, if the user agrees, `enrich_audience` with
   live_profile_data and read the rows that carry the job_change signal.
5. **What is left**: compare the count from `get_audience` with `list_audience_people` and `hasEmail` true, and read
   the titles.
6. Return the verdict with every dropped row and its reason. Only after the user agrees, take those rows out with
   `remove_audience_records` (by `audienceListItemIds`). It edits the audience only; never call
   `add_communication_opt_outs` unless the user asks.

## Run it in Alta

- **Audiences → People**: open the list, or Create Audience and bring it in from CSV or CRM List. Use **Add
  Enrichment** to refresh profiles and find emails, filter the table, select the rows to drop and **Delete from
  audience**.
- **Settings → DNC List**: the people and companies excluded from outreach in every campaign. Upload CSV there to add
  your own do-not-contact list.
- **In the campaign's Setup**, Prospect Limitations: Skip prospects already in campaigns. The DNC list stays excluded
  unless "Allow outreach to DNC list" is on.
- **Ask Alta** (sidebar, top) can check the audience against your customers, open deals and the DNC list for you.

## What good looks like

- Every dropped row shows its reason
- The verdict is go, fix or stop - never a maybe
- Bounce risk after clearance is low enough to protect the domain

## Rules

- Nothing is deleted from your CRM
- Every dropped row shows the reason
