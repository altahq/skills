---
name: expansion-signals
description: Watch current customers for growth signals and draft an expansion note for the account owner. Use when someone asks which customers are ready to expand, about growth signals in their accounts, or about upsell timing.
metadata:
  agent: Luna
  category: Expansion
  ends_in: draft notes and alerts
---

# Expansion Signals

Your customers tell you when they are growing. Most teams find out too late.

## How it runs

1. **Watch current customers** for hiring, funding, new teams and new regions
2. **Match the signal** to what you can sell them next
3. **Alert the account owner** with the signal and the suggested offer
4. **Draft an expansion note** for the owner to send

## Run it with the Alta connector

The connector finds company signals once, when you ask, and does not keep watching; it cannot alert the account owner
or email the customer. Hand the alerts and notes to the user, and use "Run it in Alta" for a standing watch.

1. `list_crm_lists` for your customers list (a companies source), `create_audience` with entityType company, and
   `update_audience` with crmList.
2. `estimate_audience_enrichment` with companyEnrichmentGoals signals, then `enrich_audience` once the user agrees to
   the cost. `get_audience_enrichment_progress` says when it is done; ask the user to check back rather than polling.
3. `list_audience_people` with the signals filter (funding, hiring, growth, geo expansion, leadership change,
   acquisition) returns the customers with a signal.
4. `ask_alta_agent` for each account's owner and open deals in the CRM synced to Alta, and for open support
   escalations if your synced data holds tickets. Otherwise ask the user which accounts to skip.
5. Write one alert per account (signal, source, one offer) and the owner's expansion note, in the chat.

## Run it in Alta

- **Audiences → Companies**: import your customers list from the CRM, then **Add Enrichment → Company Signals**
  (funding, growth, launches and more). The Signals column shows what each customer did.
- **Signal Trackers** (Build, beta, when your account has it): New tracker on a people audience of your contacts at
  customers, pick the signal (job change, promotion, hiring), a weekly schedule, and **Notify me** by in-app, email
  or Slack. It watches people signals only, not company funding.
- **Ask Alta** (sidebar, top): paste the signal and ask for the expansion note.

## What good looks like

- The account owner hears about growth within a week of the signal
- Each alert pairs the signal with one concrete offer
- Accounts with open escalations are skipped

## Rules

- The account owner decides - nothing goes to the customer directly
- Skip accounts with an open support escalation
