---
name: tech-stack-targeting
description: Build an audience of companies using the tools you replace or integrate with, with a pitch angle per stack. Use when someone asks to target companies by the software or tools they use, or by technographics.
metadata:
  agent: Luna
  category: Signals
  ends_in: audience
---

# Tech Stack Targeting

The tools a company runs say a lot about what it needs next.

## How it runs

1. **Find companies** using the tools you name
2. **Group them** by stack: replace, integrate or complement
3. **Write the pitch angle** for each group
4. **Build the audience** with the stack on every record

## Run it with the Alta connector

The connector cannot find companies by the tools they use: neither the people search nor enrichment carries tech
stack. It can build the audience when your CRM already holds the stack; otherwise use "Run it in Alta".

1. `list_crm_lists` for a companies list of the accounts on those tools, and `get_crm_fields` to find the field that
   holds the stack. Map it to an Alta field in the import so every record carries it.
2. `create_audience` with entityType company and `update_audience` with crmList. `get_audience` shows the CRM list as
   the record's source.
3. Group the accounts by replace, integrate or complement from that field, and write one pitch angle per group.
4. For the buyers, `create_audience` again and `update_audience` with companyAudienceListId and a query for their
   titles. Stop at the audience: nothing is contacted.

## Run it in Alta

- **Audiences → Companies → Create Audience → Web Search**: describe the companies ("SaaS companies in the US running
  Salesforce and Outreach"); AI finds them on the web. The search filters of People Search and Company Search have no
  technology field.
- To check a stack on an existing companies audience, **Add Enrichment → AI Custom Enrichment**: ask which of your
  named tools the company uses, with a field for the source, and drop rows it cannot confirm.
- **Find People at These Companies** turns each group into a people audience.

## What good looks like

- Every account shows where the stack data came from
- Accounts are grouped by replace, integrate or complement, each with its own angle
- Stale stack data is dropped rather than guessed

## Rules

- Every match shows where the stack data came from
- Nothing is contacted - the play ends at an audience
