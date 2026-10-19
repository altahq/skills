---
name: competitor-customers
description: Reach companies using a competitor, but only where there is a real reason to switch now. Use when someone asks to target a competitor's customers or to find companies ready to switch from a competitor.
metadata:
  agent: Katie
  category: Competitive
  ends_in: draft campaign
---

# Competitor Customers

A competitor's customer is a buyer who already said yes to the category.

## How it runs

1. **Find companies** using the competitor you name
2. **Look for a reason now** - renewal season, a new leader, complaints, growth
3. **Keep only accounts with a reason**
4. **Draft a compare-and-switch campaign**
5. **Stop for approval**

## Run it with the Alta connector

The connector cannot find a competitor's customers: `search_prospects` has no tech-stack filter. Ask the user for the
list (a CRM list, a CSV, or companies you researched with them), then:

1. Build a people audience with `create_audience`. From a CRM companies list: `list_crm_lists`, a companies audience
   filled with `update_audience` (crmList), then `update_audience` with `companyAudienceListId` and the buyer's roles.
   From domains: `update_audience` with a query on company_domain and the buyer's titles.
2. **Reason now**: quote with `estimate_audience_enrichment`, then `enrich_audience` with `companyEnrichmentGoals`
   signals (and live_profile_data for new leaders). Keep the records `list_audience_people` returns for signals such as
   leadership_change, funding_announcement, hiring or company_growth.
3. Drop the rest with `remove_audience_records` (`excludeAudienceListItemIds` set to the records to keep).
4. Call `load_skill` with `campaign-creation` and run it on that audience. Put the switch angle and the facts the
   comparison may use in the `pitchBrief`.
5. Do not call `launch_campaign`. Call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

1. **Audiences → Companies → Create Audience**: from your CRM, a CSV of the competitor's customers, or Web Search
   ("companies using …") where your account has it. Add Enrichment with signals, and delete the companies with no
   fresh signal.
2. **Audiences → People → Create Audience → People Search**: choose Existing company audience and the roles to reach.
3. **Campaigns → New campaign**: in Target audience pick that audience, write the compare-and-switch angle in Value
   proposition, and leave it as a draft.

## What good looks like

- Every account has a reason to switch now, named in the first line
- The comparison is fair and backed by facts
- Accounts with no reason to switch are left alone

## Rules

- No claims about the competitor you cannot back with facts
- Never launch. The play ends at a draft.
