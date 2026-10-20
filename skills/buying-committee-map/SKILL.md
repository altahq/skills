---
name: buying-committee-map
description: Build the org chart and buying committee for a target account or open deal, flag the roles not yet reached, and draft outreach to each. Use when someone asks who the decision makers are, wants an org chart, or a deal is single-threaded.
metadata:
  agent: Luna
  category: Win deals
  ends_in: committee map and draft outreach
---

# Buying Committee Map

Deals are won by committees, not contacts. This play maps the committee and fills the gaps before they cost you the deal.

## What it asks you once

1. **The accounts or deals** - a list, a segment or open deals in a stage
2. **The roles that buy** - for example economic buyer, champion, user, technical evaluator
3. **Who you already know** - pulled from your CRM, you only confirm it

## How it runs

1. **Map the org chart** for each account from people data and your CRM
2. **Place each person in a role** - champion, economic buyer, user, likely blocker
3. **Flag the gaps** - roles you have no contact with yet
4. **Draft outreach** for each missing role, through your champion where you can
5. **Stop for approval**

## Run it with the Alta connector

Neither the connector nor Alta holds an org chart or reporting lines: place people in roles from their title,
department and seniority, and mark every line as likely, with that reason.

1. **The accounts**: `ask_alta_agent` for the open deals in the stage the user named, with company, domain, owner and
   the CRM contacts on each deal (name, title, email), from the CRM synced to Alta. The user confirms who they know.
2. **The org chart**: `search_prospects` per account and role, on the company domain with the job department and
   seniority of that role. Previews stop at 10, so run one search per role rather than one per account.
3. **Roles and gaps**: place each person (champion, economic buyer, user, likely blocker), then rank the roles with no
   contact by risk.
4. **Through the champion first**: when Alta already has an email thread with them (`list_email_messages` with their
   prospectId), `create_email_draft` on it asking for an introduction. Otherwise write the note in the chat.
5. **Drafts for the gaps**: `create_audience` and `update_audience` (or `add_prospects`) with the missing people, then
   `load_skill` with `campaign-creation` to draft the outreach. Do not call `launch_campaign`: call
   `open_draft_campaign_in_alta` and give the user the link, to launch only after the champion answered.

## Run it in Alta

- **Ask Alta** (sidebar, top): name the accounts or the deal stage and ask who you know there and which roles are
  missing. It reads the CRM synced in Settings → Integrations and can search people at each company.
- **Audiences → Companies**: import the accounts from your CRM or Company Search, then **Find People at These
  Companies** with the titles of each role and how many people per company. Open a person for their profile and
  signals.
- **Inbox** for the champion's thread, and **Campaigns** for the draft to the gaps. Launch from Setup only once you
  approve.

## What good looks like

- Every open deal has at least three roles mapped, with the gaps ranked by risk
- Likely reporting lines are marked as likely, never stated as fact
- The champion is used as the path in, not bypassed

## Rules

- Never guess a reporting line - mark it as likely, with the reason
- Ask the champion before going around them
- Never launch. The play ends at a draft.

## What you get

- An org chart and committee map per account
- The roles you have not reached, ranked by risk
- Draft outreach for each gap
