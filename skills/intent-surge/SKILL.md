---
name: intent-surge
description: Reach ICP accounts showing a surge in research on your category, ranked by how fast they are heating up. Use when someone asks about intent data, accounts researching their category, or in-market accounts to prioritize.
metadata:
  agent: Katie
  category: Signals
  ends_in: draft campaign
---

# Intent Surge

When an account starts researching your category, the race is on.

## How it runs

1. **Read intent data** for your topics
2. **Keep ICP accounts** with a real surge, not a one-day spike
3. **Rank by speed** of the surge
4. **Draft outreach** for the top accounts
5. **Stop for approval**

## Run it with the Alta connector

Alta holds no third-party intent data and does not measure surges, so the connector cannot find or rank surging
accounts. Bring them from your intent provider, synced to a CRM list with its surge score, and use Alta for the second
signal and the draft:

1. `list_crm_lists` for that companies list, then `create_audience` (entityType company) and `update_audience` with
   crmList. Rank by the provider's score; Alta does not compute one.
2. `estimate_audience_enrichment`, then `enrich_audience` with companyEnrichmentGoals ["signals"] and enrichmentGoals
   [] for the second signal. `get_audience_enrichment_progress` says when it has finished, and `list_audience_people`
   with signals (for example ["funding_announcement", "hiring"]) shows which accounts have one.
3. `create_audience` a people audience, then `update_audience` with companyAudienceListId, the titles to reach and
   peoplePerCompany.
4. `load_skill` with `campaign-creation` over the people audience, with a pitch brief that never mentions intent
   data. Do not call `launch_campaign`: call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

Alta has no category intent data. The closest signals it has, and the way in for accounts from your provider:

- **Website visitors** (under Manage, Beta, when it is on for your account): companies on your own site, returning
  visitors and what they viewed.
- **Social Signals** as an audience source: Search posts by your category keywords, Last month, to find people
  talking about the problem now.
- **Accounts from your provider**: Audiences → Companies → Create Audience from your CRM list or a CSV, Add Enrichment
  → Alta enrichment → Company Signals for the second signal, then Find People at These Companies.
- **Create Campaign** from that audience, go through Target audience, Value proposition, Touch points and Setup, and
  leave it as a draft.

## What good looks like

- Only sustained surges count, not one-day spikes
- A second signal backs the top accounts whenever one exists
- The message never mentions intent data

## Rules

- Stack with a second signal before reaching out when you can
- Never mention intent data in the message
- Never launch. The play ends at a draft.
