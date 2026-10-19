---
name: campaign-doctor
description: Diagnose why a campaign underperforms - deliverability, list, message or timing - and suggest one fix. Use when someone says a campaign is not working, no replies, low reply rate or low open rate.
metadata:
  agent: Luna
  category: Learn
  ends_in: diagnosis
---

# Campaign Doctor

A campaign fails for one main reason. Find it before changing everything.

## How it runs

1. **Deliverability** - bounces, spam placement, sending domains
2. **The list** - wrong titles, wrong companies, stale data
3. **The message** - too long, no reason to reply, weak first line
4. **The timing** - send days, hours, follow-up spacing
5. **Name the main cause** and one fix to try first

## Run it with the Alta connector

The connector reads bounces, the list, the messages and the schedule. It cannot see spam placement: say so, and judge
deliverability from bounces and failed sends.

1. `list_campaigns` (`statuses` `active`) to find the campaign, then `get_campaign` for its audience, reps, sending
   `schedule`, `prospectLimitations` and `workflow` (each step, its wait and its content).
2. **Deliverability**: `ask_alta_agent` for the campaign's bounce rate and bounce reasons, failed sends by error type
   and the bounce rate of each sending domain, over the last 30 days.
3. **The list**: `list_prospects` with `campaignId` (`limit` 100), then `get_person` on a sample to check titles and
   countries against the pitch; ask `ask_alta_agent` for skipped prospects by reason.
4. **The message**: `list_email_messages` with `campaignId` and `type` `campaign` (`limit` 20), or
   `list_linkedin_messages`, to read what actually went out.
5. **The timing**: `ask_alta_agent` for sends and replies by weekday and hour, next to the schedule from step 1.

## Run it in Alta

1. **Analyze → Performance → Email Health**, filtered to the campaign: **Bounce rate**, **Bounces by reason** and
   **Mailbox health**.
2. **Campaigns** → open the campaign → **Analytics**: **Unqualified Prospects** and **Steps Progress** for the list,
   **Steps Engagement** for the messages, **Email Engagements by Hour** and **Linkedin Engagements by Hour** for timing.
3. The campaign's **Prospects** tab to open prospects and read what they were sent, and the builder's **Touch points**
   and **Setup** for the steps and the schedule.
4. **Ask Alta** (sidebar, top): ask why this campaign's reply rate is low; it runs the same checks.

## What good looks like

- The diagnosis names one main cause, with evidence
- Deliverability is checked before the message is blamed
- It suggests one fix, so you can tell if it worked

## Rules

- Check in this order - each step can hide the next
- Suggest one fix at a time, so the result is readable
- Nothing is changed - the play only diagnoses

## What you get

- The main cause, with the evidence
- One fix to try first
