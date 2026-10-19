---
name: renewal-window
description: Reach companies on a competitor or provider ahead of their renewal season with a compare-and-switch campaign. Use when someone asks to target companies whose contract with a competitor or provider is up for renewal soon.
metadata:
  agent: Katie
  category: Signals
  ends_in: draft campaign
---

# Renewal Window

The best time to win a customer from someone else is just before they renew.

## What it asks you once

1. **The provider list** - companies known to use a competitor or provider
2. **Renewal season** - the month most of them renew
3. **Why switch** - the one reason you win comparisons

## How it runs

1. **Build the audience** from the provider list
2. **Find the owner** of that tool at each company
3. **Time the campaign** to land 30 to 60 days before renewal
4. **Write a compare-and-switch pitch** with no claims you cannot back
5. **Draft the campaign** and stop for approval

## Run it with the Alta connector

The people search cannot tell which tool a company uses, so the provider list comes from the user, and the connector
cannot schedule a launch date: the draft is launched by hand 30 to 60 days before the renewal.

1. The provider list: from the CRM with `list_crm_lists` (companies source), `create_audience` (entityType company)
   and `update_audience` with crmList. Or, given a list of domains, go straight to step 2.
2. The owner of the tool at each company: `create_audience` a people audience and `update_audience` with
   companyAudienceListId, the owner's titles and peoplePerCompany. With domains, use `search_prospects` with
   company_domain and the titles, then `update_audience` with that query and an amount.
3. `load_skill` with `campaign-creation` over that audience, with the one switch reason, and only facts the user can
   back, as the pitch brief.
4. Do not call `launch_campaign`: call `open_draft_campaign_in_alta`, give the user the link and the date to launch.
   When the campaign has a sending schedule, `update_campaign` with an end date can stop it at the renewal.

## Run it in Alta

- **Audiences → Companies → Create Audience** from your CRM list or a CSV of the provider's customers.
- **Find People at These Companies**, with the titles that own the tool.
- **Create Campaign** from the people audience and go through Target audience, Value proposition, Touch points and
  Setup. In the sending schedule, End campaign date can stop it at the renewal.
- Leave it as a draft and launch it 30 to 60 days before the renewal month. **Ask Alta** can build the audiences and
  the draft; it stops at a saved draft.

## What good looks like

- The campaign lands 30 to 60 days before the renewal, not after it
- Each account has the person who owns the tool, not a generic exec
- The switch reason is one specific thing you win on, backed by facts

## Rules

- Never name a competitor in a way you cannot back with facts
- Never launch. The play ends at a draft.
