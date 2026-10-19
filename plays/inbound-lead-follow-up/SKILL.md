---
name: inbound-lead-follow-up
description: Call new form fills and MQLs that did not book within minutes with an approved script, message if no one answers, qualify and offer times. Use when someone asks about speed to lead, instant callbacks, MQLs or form fills that did not book a meeting, or following up on inbound leads fast.
metadata:
  agent: Alex
  category: Inbound
  ends_in: approved script, then live follow-up
---

# Inbound Lead Follow-Up

Most form fills never become meetings because nobody answers fast enough. The first team to call usually wins.

## What it asks you once

1. **Which forms count** and who qualifies
2. **Calling hours** and how many attempts

## How it runs

1. **Draft the script** and the rules
2. **Stop for approval** - nothing goes live before you approve
3. **Call within minutes** of a form fill or MQL that did not book, using the page they came from
4. **Follow up by message** if no one answers
5. **Qualify** against your criteria using CRM context
6. **Offer times** from the right rep's calendar, or hand off with a summary, and log the outcome

## Run it with the Alta connector

Calling form fills is set up in Alta only: the connector cannot watch a form, place a call, create an assistant or
build a call campaign (its campaigns send email and LinkedIn from a search or an audience). Draft the script and the
rules with the user here, get their approval, walk them through "Run it in Alta", then:

1. `ask_alta_agent` for recent MQLs and form fills with no meeting booked, with the form's fields and source page.
2. `build_workflow` with a task such as "when a form posts to this webhook and the lead qualifies, trigger an
   assistant call", naming the assistant. It saves an unpublished draft; the user publishes it in Alta.
3. `list_calls` with `limit` 100, keeping `callType` `outbound`, and `get_call` for the `summary` and `disposition` of
   each attempt.
4. `list_prospects` with the campaign's `campaignId` and `get_prospect_timeline` for who was reached and who booked.

## Run it in Alta

1. **Assistants → Create assistant → Calling Assistant**: the approved script in **Call Flow**, book meeting and
   check availability under **Configurations → Tools**, a Get Lead Context tool from **Settings → Tools** for the CRM
   record, outcomes in **Call Outputs**. Test with Test Call.
2. **Campaigns → New campaign**, with **Webhook** as the audience source when your plan has it (your form tool posts
   each fill), or your CRM. There is no MQL trigger. Make a Call step with the assistant the first touch point, and an
   SMS or email on its No Answer branch.
3. **Setup**: a **Reply Assistant** with **Use rep linked tools** offers times from the rep's calendar; its outcomes
   close unqualified leads. Set calling days and hours in **Schedule Settings**, or turn on **Start Sequence
   Immediately**, which ignores them. Calls start when you launch.
4. Follow attempts and outcomes in **Calls** (Analyze) and on the campaign.

## What good looks like

- First touch within minutes, inside calling hours and the lead's working hours
- Qualified leads leave with a booked time, not a promise of a follow-up
- Nobody is asked something the form already answered
- Every attempt and outcome is logged

## Rules

- Nothing goes live until you approve the script and the rules
- Only call people who asked to be contacted
- Respect calling hours, quiet hours, the lead's time zone and opt-outs
- Never ask for what the form already told you
- Unqualified leads get a polite close, not a sequence

## What you get

- Qualified leads called within minutes, meetings booked, outcomes logged
