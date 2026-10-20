---
name: website-visitor-follow-up
description: Reach the right contact at ICP companies that visited your site, the same day. Use when someone asks about website visitors, de-anonymized traffic, or reaching companies that visited their site.
metadata:
  agent: Alex
  category: Signals
  ends_in: draft messages
---

# Website Visitor Follow-Up

A company reading your pricing page this morning is a different lead tomorrow.

## How it runs

1. **Take identified visiting companies** from your visitor tool
2. **Keep ICP matches** and high-intent pages
3. **Find the right contact** at each
4. **Draft a same-day note** tied to the topic they read
5. **Stop for approval**

## Run it with the Alta connector

The connector has no website visitor tool. Take the visiting companies and the pages they read from the user (Alta's
Website visitors page or their visitor tool), then:

1. `ask_alta_agent` for which of these companies are customers or have an open deal in the CRM, and drop them.
2. `load_skill` with `campaign-creation` and follow it: `search_prospects` for the right roles at the remaining
   companies, the audience, and a pitch about the topic each one read, never about the visit.
3. Do not call `launch_campaign`. Call `open_draft_campaign_in_alta` and give the user the link: this play ends at a
   draft.

## Run it in Alta

- **Website visitors** (Manage, beta): companies identified on your site, with the pages each visitor viewed. It is on
  for accounts with website visitor tracking.
- **Campaigns → New campaign**: target the right roles at those companies, or use **Website Traffic** as the audience
  source when your plan has it (your visitor tool posts to its webhook). Write to the topic they read, choose
  **Co-Pilot** in Setup, and save it as a draft.
- **Ask Alta** (sidebar, top): name the companies and ask for a draft campaign. It stops at a saved draft.

## What good looks like

- Outreach happens the same day as the visit
- The note is about the topic they read, never about tracking them
- Customers and open deals are excluded

## Rules

- Never say you saw them on your site
- Skip customers and open deals
