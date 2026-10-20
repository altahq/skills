---
name: meeting-prep-brief
description: Prep for a sales call or meeting with a one-page brief - attendees, past call history, deal status, fresh signals and questions to ask. Use when someone says prep me for my call, call prep, meeting prep, or what do I need to know before this meeting.
metadata:
  agent: Alex
  category: Meeting prep
  ends_in: one brief per call
---

# Call Prep Brief

The best reps walk in knowing more than the buyer expects. This play does the homework for every call, the night before or an hour before.

## What it asks you once

1. **Your calendar** - which meetings count as external calls
2. **When to deliver** - the night before, or an hour before each call

## How it runs

1. **Find the call** on the calendar and who is coming
2. **Read the history** - past calls, emails and notes with this account
3. **Check the deal** - stage, open questions, next step promised last time
4. **Add fresh signals** - hiring, funding, news, product usage
5. **Write the brief** - one page, with three questions worth asking

## Run it with the Alta connector

The connector has no calendar tool and cannot schedule the brief. Run it when the user asks, the night before or an
hour before.

1. `ask_alta_agent` for the user's external meetings in the window (time, host, guests), and for each guest's company:
   the CRM deal, its stage and the next step recorded.
2. For each guest who is a prospect: `get_prospect_timeline` for the outreach and replies, `list_email_messages` with
   `prospectId` for the latest emails, and `get_prospect` to open their card with buying signals.
3. `list_calls` and `get_call` for past calls with them: the `summary` holds what was promised.
4. Write the brief from these results only, with each fact's source, and three questions that fit only this account.

## Run it in Alta

- **Daily → Meetings**: the reps' upcoming meetings, once a calendar is connected under **Settings → Reps**.
- **Ask Alta** (sidebar, top): "prep me for my 2pm with Acme". It reads the prospect's timeline, the CRM and the web,
  and writes the brief on request; it does not send one on a schedule.
- **Prospects** (Manage): open the person for their timeline.

## What good looks like

- The rep can read it in under two minutes, right before the call
- It names what was promised on the last call, so nothing is dropped
- The three questions could only be asked of this account

## Rules

- Every fact has its source
- Nothing older than a quarter is presented as news
- No brief for internal meetings

## What you get

- One brief per external call
- What each attendee cares about, and what was promised last time
- Three questions that could only be asked of this account
