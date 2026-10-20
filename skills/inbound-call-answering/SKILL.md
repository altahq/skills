---
name: inbound-call-answering
description: Have Alex answer an inbound phone line, qualify callers, book meetings and log every call, including after hours. Use when someone asks about inbound calls, a receptionist, missed calls or answering the phone.
metadata:
  agent: Alex
  category: Inbound
  ends_in: approved script, then live answering
---

# Inbound Call Answering

Every missed call is a buyer who tried and gave up.

## What it asks you once

1. **The phone number** to connect
2. **Who qualifies** - and what to do with everyone else
3. **When to answer** - always, or after hours only

## How it runs

1. **Draft the call script** and the qualifying rules
2. **Stop for approval** - nothing goes live before you approve
3. **Answer calls** with the approved script
4. **Book meetings** for qualified callers, route the rest
5. **Log every call** with a summary

## Run it with the Alta connector

Setting up the assistant and connecting the number happen in Alta only: the connector cannot create an assistant or
assign a phone number. Draft the script and the qualifying rules with the user here, get their approval, then walk
them through "Run it in Alta". Once it is live, the connector reviews the calls:

1. `list_calls` with `limit` 100, keeping `callType` `inbound`.
2. `get_call` for the `summary`, `disposition` and the call's output fields (`customFields`).
3. `get_prospect` or `get_prospect_timeline` for who called and what happened next.

## Run it in Alta

1. **Assistants → Create assistant → Calling Assistant.** Put the approved script in **Call Flow**, the qualifying
   rules and outcome labels in **Call Outputs**, booking under **Configurations → Tools** (book meeting, check
   availability), and the human to transfer to in **Handoff**.
2. **Test it** with Test Call before any caller reaches it.
3. **Settings → Phone Numbers**: import the number (Twilio or Aircall, connected in Integrations), then choose the
   assistant under **Inbound Settings**. Calls to the number reach the assistant from the moment you save.
4. Review calls under the assistant's **Call logs** and **Analytics**, or in **Calls**.

## What good looks like

- No call goes unanswered in the hours you chose
- Qualified callers leave with a booked meeting
- Every call has a summary, and a human was offered whenever asked

## Rules

- Nothing goes live until you approve the script and the rules
- Always offer a human when the caller asks for one
- Never promise prices or terms that are not in the script

## What you get

- Every call answered, summarized and logged
- Meetings booked for qualified callers
