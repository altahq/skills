---
name: competitor-switch
description: Reach companies on a competitor or provider, but only where there is a real reason to switch now, such as their renewal season coming up, with a compare-and-switch campaign. Use when someone asks to target a competitor's customers, to find companies ready to switch from a competitor, or to target companies whose contract with a competitor or provider is up for renewal soon.
metadata:
  agent: Katie
  category: Competitive
  ends_in: draft campaign
---

# Competitor Switch

A competitor's customer already said yes to the category; the best time to win them is when they have a reason to switch, just before they renew.

## What it asks you once

1. **The provider list** - companies known to use the competitor or provider
2. **Renewal season** - the month most of them renew, if you are timing to it
3. **Why switch** - the one reason you win comparisons

## How it runs

1. **Build the audience** from the provider list
2. **Find the owner** of that tool at each company
3. **Pick the reason now**: renewal season, a new leader, complaints or growth. For renewal, time the campaign to land 30 to 60 days before it
4. **Keep only accounts with a reason**
5. **Write a compare-and-switch pitch** with no claims you cannot back
6. **Draft the campaign** and stop for approval

## Run it with the Alta connector

The connector cannot find a competitor's customers: `search_prospects` has no tech-stack filter and cannot tell which
tool a company uses, so the provider list comes from the user (a CRM list, a CSV, or companies you researched with
them). The connector also cannot schedule a launch date: a renewal draft is launched by hand 30 to 60 days before the
renewal.

1. The provider list and its owners: from a CRM companies list, `list_crm_lists`, `create_audience` (entityType
   company) filled with `update_audience` (crmList), then a people audience with `create_audience` and
   `update_audience` with `companyAudienceListId`, the owner's titles and peoplePerCompany. From domains, use
   `search_prospects` with company_domain and the titles, then `update_audience` with that query and an amount.
2. **Reason now** (when the reason is a signal, not the renewal): quote with `estimate_audience_enrichment`, then
   `enrich_audience` with `companyEnrichmentGoals` signals (and live_profile_data for new leaders). Keep the records
   `list_audience_people` returns for signals such as leadership_change, funding_announcement, hiring or
   company_growth, and drop the rest with `remove_audience_records` (`excludeAudienceListItemIds` set to the records
   to keep).
3. Call `load_skill` with `campaign-creation` and run it on that audience. Put the one switch reason and only the facts
   the user can back, which the comparison may use, in the `pitchBrief`.
4. Do not call `launch_campaign`. Call `open_draft_campaign_in_alta` and give the user the link, and for a renewal the
   date to launch. When the campaign has a sending schedule, `update_campaign` with an end date can stop it at the
   renewal.

## Run it in Alta

1. **Audiences → Companies → Create Audience**: from your CRM list, a CSV of the competitor's or provider's customers,
   or Web Search ("companies using …") where your account has it. For signals, add Enrichment and delete the companies
   with no fresh signal.
2. **Audiences → People → Create Audience → People Search** (or **Find People at These Companies**): choose Existing
   company audience and the titles that own the tool.
3. **Campaigns → New campaign** from the people audience: go through Target audience, Value proposition (the
   compare-and-switch angle), Touch points and Setup. In the sending schedule, End campaign date can stop it at the
   renewal.
4. Leave it as a draft; for a renewal, launch it 30 to 60 days before the renewal month. **Ask Alta** can build the
   audiences and the draft; it stops at a saved draft.

## What good looks like

- Every account has a reason to switch now, named in the first line; accounts with none are left alone
- A renewal campaign lands 30 to 60 days before the renewal, not after it
- Each account has the person who owns the tool, not a generic exec
- The switch reason is one specific thing you win on, and the comparison is fair and backed by facts

## Rules

- No claims about the competitor, and never name it, in a way you cannot back with facts
- Never launch. The play ends at a draft.
