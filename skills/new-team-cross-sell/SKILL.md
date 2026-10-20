---
name: new-team-cross-sell
description: Find other teams at current customers that match your ICP and draft an intro through your existing champion. Use when someone asks to expand into other teams or departments at an existing customer, or to cross-sell through a champion.
metadata:
  agent: Katie
  category: Expansion
  ends_in: draft intros
---

# New Team Cross-Sell

The easiest new logo is a new team at a company that already trusts you.

## How it runs

1. **Map your current customers** - which teams use you today
2. **Find the other teams** that match your ICP
3. **Find the leader** of each team
4. **Draft an intro** through your existing champion, plus a direct note
5. **Stop for approval**

## Run it with the Alta connector

1. **Map the customers**: ask `ask_alta_agent` for current customers with the contacts and departments you work with
   at each, and the champion (it reads a CRM synced to Alta's warehouse).
2. **Find the other teams**: `search_prospects` with company_domain in the customers' domains, job_department not in
   the teams already using you, and job_seniority for leaders. Show the query and the leaders it found.
3. **Champion first**: write the ask to each champion in the chat. If the champion is a prospect in Alta, send it with
   `send_email_message` only after the user approves the text; otherwise the rep sends it from their own mailbox.
4. **Direct note**: once a champion agrees, `create_audience` and `update_audience` with that customer's query, then
   `load_skill` with `campaign-creation` on it, naming what the first team got in the `pitchBrief`. Do not call
   `launch_campaign`; call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

1. **Ask Alta** (sidebar, top): ask which teams at each customer you already work with, and who leads the others.
2. **Audiences → People → Create Audience → People Search**: the customers' companies, the departments you do not
   serve yet, and leader seniority.
3. **Campaigns → New campaign** on that audience, with the first team's result in Value proposition. Leave it as a
   draft until the champion has said yes.

## What good looks like

- The champion is asked before anyone in the new team is contacted
- Each new team matches your ICP, not just the company
- The intro names what the first team got from you

## Rules

- Ask the champion first, never go around them
- Never launch. The play ends at a draft.
