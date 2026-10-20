---
name: renewal-expansion-brief
description: Before each renewal, summarize usage and value delivered and draft an upsell proposal sized to real usage. Use when someone is preparing for a customer renewal, an upsell, or a quarterly business review.
metadata:
  agent: Luna
  category: Expansion
  ends_in: brief and draft proposal
---

# Renewal Expansion Brief

A renewal is the one meeting where growth is already on the agenda.

## How it runs

1. **Find renewals** coming up in the next 60 to 90 days
2. **Summarize usage** and the value delivered, from your own data
3. **Size the upsell** to how the account actually uses you
4. **Draft the proposal** and the talking points for the account owner

## Run it with the Alta connector

Every number comes from `ask_alta_agent`, which reads the CRM and any usage data synced to Alta's warehouse. If your
product usage is not synced there, say so: ask the user for it and mark those numbers as theirs. Nothing is sent.

1. `ask_alta_agent`: customers whose renewal falls in the next 60 to 90 days, with owner and current amount. Ask the
   user which CRM field holds the renewal date (a renewal deal's close date or a contract end date) if it is not clear.
2. `ask_alta_agent` per account: usage over the term and its trend, and recent meetings and emails from the CRM.
   Keep the table or report each number came from.
3. Flag at-risk accounts (usage falling, no recent meeting, open issues the user names) for a save plan, not an
   upsell.
4. Write the brief, the sized proposal and the owner's talking points in the chat.

## Run it in Alta

- **Ask Alta** (sidebar, top): ask for renewals in the next 90 days, then the brief per account. It answers from the
  data synced in Settings → Integrations and says when something it needs is not there.
- Connect your CRM and usage source under **Settings → Integrations** first, so the numbers have a source.

## What good looks like

- The brief is ready 60 to 90 days before renewal
- Every number comes from your own usage data, with its source
- At-risk accounts get a save plan, not an upsell

## Rules

- Only numbers from your own data, each with its source
- Flag at-risk accounts instead of pitching them
