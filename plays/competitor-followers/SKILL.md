---
name: competitor-followers
description: Reach people at ICP accounts who follow or engage with a competitor's content, with a note that offers a different view. Use when someone asks about competitor audiences, competitor followers or people engaging with a competitor.
metadata:
  agent: Katie
  category: Win deals
  ends_in: draft messages
---

# Competitor Followers

Someone who follows a competitor already cares about the problem. Give them a second point of view.

## What it asks you once

1. **The competitor** - whose audience to look at
2. **Your ICP** - who is worth reaching

## How it runs

1. **Find people** who follow or engage with the competitor's content
2. **Keep ICP matches** only
3. **Draft a short note** that offers a different view on the topic they engaged with
4. **Stop for approval**

## Run it with the Alta connector

The connector cannot find who follows or engages with a competitor: no tool reads LinkedIn followers or post
engagement. Build that audience in Alta (below), then use the connector on it:

1. `list_audiences` and `get_audience` to find it; `list_audience_people` to read who is in it.
2. **ICP only**: show the user who falls outside the ICP and take them out with `remove_audience_records`.
3. Call `load_skill` with `campaign-creation` on that audience. In the `pitchBrief` and the workflow instructions, ask
   for a short note with a different view on the topic, and say never to mention the competitor or how they were
   found.
4. Do not call `launch_campaign`. Call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

1. **Audiences → People → Create Audience → Social Signals**: on the Specific companies tab, paste the competitor's
   LinkedIn company URL and pick the engagement types (Comments, Reactions, Shares). Alta finds the people who engaged
   with its posts; there is no source for followers.
2. Narrow to your ICP with the filters, and delete the rest.
3. **Campaigns → New campaign** on that audience, with the view-led note in Value proposition. Set it to Co-Pilot so
   every message waits for your review, and leave it as a draft.

## What good looks like

- Only ICP people make the list
- The note never mentions the competitor or how you found them
- It adds a real point of view, not a pitch

## Rules

- Never mention that you saw them follow a competitor
- No claims about the competitor you cannot back with facts
- Never launch. The play ends at a draft.

## What you get

- ICP people engaging with a competitor
- A short, view-led draft for each
