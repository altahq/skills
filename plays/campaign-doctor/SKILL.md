---
name: campaign-doctor
description: Check every live campaign (rank by positive replies and meetings, flag sender risk, one change each) or diagnose why one campaign underperforms (deliverability, list, message or timing) and suggest one fix. Use when someone asks how their campaigns are doing, which ones to fix or pause, about sender or deliverability risk, or says a campaign is not working, gets no replies, or has a low reply or open rate.
metadata:
  agent: Luna
  category: Learn
  ends_in: report or diagnosis
---

# Campaign Doctor

A campaign fails for one main reason. Find it before changing everything, and know which campaigns to scale, fix or stop.

## How it runs

1. **Pick the scope**: every live campaign (a weekly health check) or one campaign that is not working
2. **Every live campaign**: read each one, rank by positive replies and meetings (not opens), flag senders close to
   bounce or complaint limits, and suggest the one change most likely to help each
3. **One campaign**: check in order - **deliverability** (bounces, spam placement, sending domains), **the list**
   (wrong titles, wrong companies, stale data), **the message** (too long, no reason to reply, weak first line),
   **the timing** (send days, hours, follow-up spacing)
4. **Name the main cause** and one fix to try first
5. **Write the report** - scale, fix or stop for every campaign, or the diagnosis for one

## Run it with the Alta connector

The connector reads bounces, the list, the messages and the schedule. It cannot see spam placement, and Alta does not
record spam complaints: say so, and judge deliverability from bounces and failed sends.

1. `list_campaigns` with `statuses` `active` (`limit` 100) to read every live campaign or find the one, then
   `get_campaign` for its audience, reps, sending `schedule`, `prospectLimitations` and `workflow` (each step, its
   wait and its content). For every campaign, call it on each one you suggest a change to, so the change fits.
2. **Every campaign**: `ask_alta_agent` for each active campaign's contacted prospects, emails sent and bounced,
   positive replies and meetings booked in the last 7 and 30 days, with rates on delivered messages (sent minus bounced).
3. **Deliverability**: `ask_alta_agent` for bounce rate per sending domain and mailbox, bounce reasons and failed sends
   by error type - over the last 7 days for every campaign, the last 30 for one.
4. **The list** (one campaign): `list_prospects` with `campaignId` (`limit` 100), then `get_person` on a sample to check
   titles and countries against the pitch; ask `ask_alta_agent` for skipped prospects by reason.
5. **The message** (one campaign): `list_email_messages` with `campaignId` and `type` `campaign` (`limit` 20), or
   `list_linkedin_messages`, to read what actually went out.
6. **The timing** (one campaign): `ask_alta_agent` for sends and replies by weekday and hour, next to the schedule.
7. Write the report or diagnosis. Change nothing: do not call `pause_campaign` or `update_campaign`.

## Run it in Alta

1. **Analyze → Performance → Overview**: the **Campaign Performance** table for every campaign's contacted prospects,
   replies and bounces; filter by **Campaign** for its **Meeting Booked** count.
2. **Analyze → Performance → Email Health**, filtered to a campaign if you check one: **Bounce rate**, **Bounces by
   reason** and **Mailbox health** for each mailbox.
3. **Campaigns** → open a campaign → **Analytics**: **Unqualified Prospects** and **Steps Progress** for the list,
   **Steps Engagement** for the messages, **Email Engagements by Hour** and **Linkedin Engagements by Hour** for timing.
4. The campaign's **Prospects** tab to open prospects and read what they were sent, and the builder's **Touch points**
   and **Setup** for the steps and the schedule.
5. **Ask Alta** (sidebar, top): ask which active campaigns are stuck or underperforming, with their key stats, or why
   one campaign's reply rate is low; it runs the same checks.

## What good looks like

- Campaigns are ranked by positive replies and meetings, with rates on delivered messages
- Sender risk is flagged before it becomes a deliverability problem
- A diagnosis names one main cause, with evidence
- Deliverability is checked before the message is blamed
- Each campaign gets exactly one change, not a list, so you can tell if it worked

## Rules

- Rates use delivered messages as the base
- Check one campaign in this order - each step can hide the next
- Suggest one fix at a time, so the result is readable
- Nothing is changed - the play only suggests and diagnoses

## What you get

- Every campaign: scale, fix or stop, with one change each and the senders at risk
- One campaign: the main cause, with the evidence, and one fix to try first
