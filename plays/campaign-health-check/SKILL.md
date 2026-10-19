---
name: campaign-health-check
description: Rank live campaigns by positive replies and meetings, flag sender risk, and suggest one change for each. Use when someone asks how their campaigns are doing, which ones to fix or pause, or about sender or deliverability risk.
metadata:
  agent: Luna
  category: Reporting
  ends_in: report
---

# Campaign Health Check

A weekly look at what to scale, what to fix and what to stop.

## How it runs

1. **Read every live campaign**
2. **Rank by positive replies and meetings**, not opens
3. **Flag senders** close to bounce or complaint limits
4. **Suggest the one change** most likely to help each campaign
5. **Write the report** - scale, fix or stop

## Run it with the Alta connector

1. `list_campaigns` with `statuses` `active` (`limit` 100).
2. `ask_alta_agent`: for each active campaign, contacted prospects, emails sent and bounced, positive replies and
   meetings booked in the last 7 and 30 days, with rates on delivered messages (sent minus bounced).
3. **Sender risk**: `ask_alta_agent` for bounce rate per sending domain and mailbox, and failed sends by error type,
   over the last 7 days. Alta does not record spam complaints: say so.
4. `get_campaign` for each campaign you suggest a change to, so the change fits its audience, schedule and steps.
5. Write the report: scale, fix or stop. Change nothing: do not call `pause_campaign` or `update_campaign`.

## Run it in Alta

- **Analyze → Performance → Overview**: the **Campaign Performance** table for every campaign's contacted prospects,
  replies and bounces; filter by **Campaign** for its **Meeting Booked** count.
- **Email Health**: **Bounce rate**, **Bounces by reason** and **Mailbox health** for each mailbox.
- **Campaigns** → open a campaign → **Analytics** before suggesting its change.
- **Ask Alta** (sidebar, top): ask which active campaigns are stuck or underperforming, with their key stats.

## What good looks like

- Campaigns are ranked by positive replies and meetings, with rates on delivered messages
- Each campaign gets exactly one suggested change, not a list
- Sender risk is flagged before it becomes a deliverability problem

## Rules

- Rates use delivered messages as the base
- Nothing is changed - the play only suggests
