---
name: target-account-blitz
description: Run an account-based campaign on named target accounts - map the right people at each and reach several of them with one coordinated story. Use when someone has a target account list, ABM, named or tier 1 accounts.
metadata:
  agent: Katie
  category: Win deals
  ends_in: draft account campaign
---

# Target Account Blitz

One contact per account is a guess. Three people hearing one story is a campaign.

## What it asks you once

1. **The accounts** - a named list, a CRM segment or a tier
2. **The roles to reach** - for example the buyer, a user and their manager

## How it runs

1. **Map each account** - find the people in the roles you named
2. **Write one story per account** from its news and signals
3. **Tailor it per role** - the same story, a different angle for each person
4. **Space the touches** so the account hears you, not the same email three times
5. **Stop for approval**

## Run it with the Alta connector

1. **Map each account**: `create_audience`, then `update_audience` with a query on company_domain (the named
   accounts) and the roles to reach. From a CRM companies list: `list_crm_lists`, a companies audience filled with
   `update_audience` (crmList), then a people audience with `companyAudienceListId`, the roles as filters and
   `peoplePerCompany` 3 or more (up to 6).
2. **Open deals**: ask `ask_alta_agent` which of the accounts have an open deal (it reads a CRM synced to Alta's
   warehouse). Take those out with `remove_audience_records` unless the owner agrees.
3. **News and signals**: quote with `estimate_audience_enrichment`, then `enrich_audience` with
   `companyEnrichmentGoals` signals. `list_audience_people` shows each account's people and signals; check that every
   account has at least three.
4. Call `load_skill` with `campaign-creation` on that audience. In the workflow instructions, ask for one story per
   account, a different angle per role, and never the same message to two people at one company.
5. Do not call `launch_campaign`. Call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

1. **Audiences → Companies → Create Audience**: the named accounts from your CRM or a CSV. **Add Enrichment** with
   signals for each account's news.
2. **Audiences → People → Create Audience → People Search**: choose Existing company audience, the roles to reach,
   and People per company of 3 or more.
3. **Campaigns → New campaign** on that audience, with the account story in Value proposition. In Setup, Prospect
   Limitations, set Limit prospects per company to the number of roles. Leave it as a draft.

**Ask Alta** (sidebar, top) can map the accounts and build the draft from the account list.

## What good looks like

- Every account has at least three people mapped
- The story is the same across roles, the angle is not
- No two people at one company get the same email

## Rules

- Skip accounts with an open deal unless the owner agrees
- Never send the same message to two people at one company
- Never launch. The play ends at a draft.

## What you get

- People mapped at every named account
- One coordinated draft campaign per account
