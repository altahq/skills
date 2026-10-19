---
name: speed-to-call
description: Call new qualified form fills within minutes with an approved script, and follow up by message if there is no answer. Use when someone asks about speed to lead, calling inbound leads right away or instant callbacks.
metadata:
  agent: Alex
  category: Inbound
  ends_in: approved script, then live calls
---

# Speed-to-Call

The first team to call usually gets the meeting.

## What it asks you once

1. **Which forms count** and who qualifies
2. **Calling hours** and how many attempts

## How it runs

1. **Draft the script** and the rules
2. **Stop for approval** - nothing goes live before you approve
3. **Call within minutes** of a qualified form fill
4. **Follow up by message** if no one answers
5. **Log the outcome** and book the meeting

## Run it with the Alta connector

Calling form fills is set up in Alta only: the connector cannot create an assistant, and the campaigns it builds send
email and LinkedIn from a search or an audience, not from a form. Draft the script and the rules with the user here,
get their approval, then walk them through "Run it in Alta". The connector can then:

1. `build_workflow` with a task such as "when a form posts to this webhook and the lead qualifies, trigger an
   assistant call", naming the assistant. It saves an unpublished draft; the user reviews and publishes it in Alta.
2. `list_calls` with `limit` 100, keeping `callType` `outbound`, and `get_call` for the `summary` and `disposition` of
   each attempt.
3. `get_prospect_timeline` for what happened after the call.

## Run it in Alta

1. **Assistants → Create assistant → Calling Assistant**: the approved script in **Call Flow**, booking under
   **Configurations → Tools**, outcomes in **Call Outputs**. Test it with Test Call.
2. **Campaigns → New campaign**, with **Webhook** as the audience source: your form tool posts each fill to its URL.
   Make a Call step with the assistant the first touch point, and put an SMS or email on its No Answer branch.
3. In **Setup**, set the calling days and hours in **Schedule Settings**, or turn on **Start Sequence Immediately**,
   which ignores them. Calls start when you launch.
4. Follow attempts and outcomes in **Calls** (Analyze) and on the campaign.

## What good looks like

- Qualified leads get a call within minutes, inside calling hours
- Only people who asked to be contacted are called
- Every attempt and outcome is logged

## Rules

- Nothing goes live until you approve the script and the rules
- Only call people who asked to be contacted
- Respect calling hours and opt-outs

## What you get

- Qualified leads called within minutes
- Meetings booked, outcomes logged
