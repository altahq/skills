---
name: closed-lost-win-back
description: Reopen closed-lost deals where something changed since, and draft a campaign around what is new. Use when someone asks to win back lost deals, revisit closed-lost opportunities, or reopen deals that went cold.
metadata:
  agent: Katie
  category: Win back
  ends_in: draft campaign
---

# Closed-Lost Win-Back

Most lost deals were lost for a reason. This play finds the ones where that reason no longer holds.

## What it asks you once

1. **Time window** - deals lost in the last 6 to 24 months
2. **Loss reasons to include** - for example timing, budget, no decision
3. **What changed on your side** - new features or pricing worth mentioning

## How it runs

1. **Pull closed-lost deals** from your CRM with their loss reason
2. **Check each account** for a new leader, new funding or new hiring
3. **Keep only accounts with a real change**
4. **Write the pitch** around what is new, on both sides
5. **Draft the campaign** and stop for approval

## Run it with the Alta connector

1. **Closed-lost deals**: ask `ask_alta_agent` for deals lost in the window, with their loss reason, company domain and
   contacts, leaving out accounts that churned or gave notice. It reads a CRM synced to Alta's warehouse; without one,
   use a closed-lost list from the CRM through `list_crm_lists`.
2. Build a people audience: `create_audience`, then `update_audience` with the CRM list (crmList), or with a query on
   company_domain and the buyer's titles for the domains it returned.
3. **What changed**: quote with `estimate_audience_enrichment`, then `enrich_audience` with live_profile_data and
   `companyEnrichmentGoals` signals. Keep the records `list_audience_people` returns for job_change,
   leadership_change, funding_announcement or hiring, and drop the rest with `remove_audience_records`
   (`excludeAudienceListItemIds` set to the records to keep). Show each kept account with its change.
4. Call `load_skill` with `campaign-creation` on that audience, with what is new on both sides in the `pitchBrief`.
   Do not call `launch_campaign`; call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

1. **Ask Alta** (sidebar, top): ask for deals lost in your window, with loss reasons, leaving out churned accounts.
2. **Audiences → People → Create Audience**: from the CRM's closed-lost list, or People Search on those companies.
   **Add Enrichment** with signals and profile data, then delete the people with no change since the loss.
3. **Campaigns → New campaign** on that audience, with what changed in Value proposition. Leave it as a draft.

## What good looks like

- Fewer than a third of lost deals make the list - each with a named change since the loss
- The message opens with what changed, never with why they said no
- Nobody who churned or gave notice is contacted

## Rules

- Never mention why they said no unless the change answers it
- Skip accounts that churned or gave notice
- Never launch. The play ends at a draft.
