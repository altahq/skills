---
name: lookalikes-from-closed-won
description: Build an audience of companies that look like your best customers and that you are not talking to yet. Use when someone asks for lookalike accounts, companies like their best customers, or to build an audience from closed-won deals.
metadata:
  agent: Luna
  category: Build lists
  ends_in: audience
---

# Lookalikes From Closed-Won

Your best customers already tell you who to go after next.

## How it runs

1. **Read closed-won accounts** from your CRM
2. **Find what they share** - industry, size, stack, hiring, region
3. **Search for the closest matches**
4. **Remove** customers, open deals and accounts already in a campaign
5. **Build the audience** and show why each account matched

## Run it with the Alta connector

The connector searches people by their company's industry, size and location. It cannot search on tech stack or
hiring, and it cannot find companies similar to a list of domains: say so, build the match from the traits it can
search, and use "Run it in Alta" for a true company lookalike.

1. `ask_alta_agent`: closed-won deals of the last 12 months with company, domain, industry, employee count and
   country; then the domains of open deals, and the domains of prospects in active campaigns. It answers from the CRM
   synced to Alta. Without one, import a customers list instead (`list_crm_lists`, `create_audience` with entityType
   company, `update_audience` with crmList) and read it with `list_audience_people`.
2. Name the two or three traits most customers share and show them to the user before searching.
3. `search_prospects` with a people query on those traits plus the titles that buy, and a not_in on the company
   domain for every customer, open deal and account already in a campaign. Show the total and the previews.
4. `create_audience`, then `update_audience` with the same query and an amount. `remove_audience_records` with the
   companies filter takes out any customer that still slipped in.
5. Stop there: no campaign. Give the traits each part of the audience matched on.

## Run it in Alta

- **Ask Alta** (sidebar, top): ask what your closed-won customers share and which open deals to leave out. It reads
  the CRM synced in Settings → Integrations, and can run the people search on those traits.
- **Audiences → Companies → Create Audience**: choose **Company Lookalike** (when your account has it) and enter your
  best customers' domains, or **Company Search** with the shared traits. Remove customers and open deals with
  **Delete from audience**.
- **Find People at These Companies** turns the company list into a people audience, with the buyer titles and how
  many people per company.

## What good looks like

- Each lookalike shows the two or three traits it shares with your best customers
- Customers, open deals and accounts already in a campaign are gone
- You would be glad to call the top ten tomorrow

## Rules

- Every match shows the traits it shares
- Nothing is contacted - the play ends at an audience
