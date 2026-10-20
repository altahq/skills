---
name: winning-message-miner
description: Find the openers, angles and subject lines that win across all campaigns and save them as reusable patterns. Use when someone asks what's working, which messages perform, or best performing subject lines.
metadata:
  agent: Luna
  category: Learn
  ends_in: report
---

# Winning Message Miner

Your best messages are already in your sent folder. This play finds them.

## How it runs

1. **Read every message** sent in the period, with its outcome
2. **Tag each part** - opener type, angle, proof, call to action, subject line
3. **Compare outcomes** - positive replies and meetings, not opens
4. **Keep patterns** that win across more than one campaign
5. **Write the report** with an example of each pattern

## Run it with the Alta connector

Alta writes each message per prospect, so a pattern is found by reading messages and joining them to outcomes.

1. `ask_alta_agent`: campaigns ranked by positive replies and meetings booked per contacted prospect over the period.
2. For the best and the worst few, `list_email_messages` with `campaignId` and `type` `campaign` (`limit` 100), and
   `list_linkedin_messages` the same. Each message carries its `subject`, `body` and `prospectId`.
3. Join each message to its outcome: `list_prospects` with `campaignId` (`limit` 100) gives each prospect's `status`
   (Interested, Meeting Booked, Not Interested), and `list_email_messages` with `type` `received` and `tag` `Positive`
   shows which threads replied well.
4. `get_campaign` for each campaign's pitch and step instructions, which shape the openers and angles.
5. Tag opener, angle, proof, call to action and subject line, and keep only patterns that won in two campaigns or more.

## Run it in Alta

- **Analyze → Performance**: the **Campaign Performance** table for replies per campaign; filter by **Campaign** for
  its **Meeting Booked** count.
- **Campaigns** → open a winner → **Prospects** to read what each prospect was sent, and **Analytics → Steps
  Engagement** for which step drew the replies.
- **Inbox**, filtered by the **Positive** tag, for the threads that worked.
- **Ask Alta** (sidebar, top): ask which campaigns win on positive replies and meetings, and what their messages share.

## What good looks like

- Every pattern is judged by meetings or positive replies, not opens
- Each pattern won in at least two campaigns
- Each one comes with a real example to copy

## Rules

- Judge by positive replies and meetings, never opens
- A pattern needs to win in at least two campaigns

## What you get

- Winning openers, angles and subject lines, with real examples
- Patterns to reuse in the next campaign
