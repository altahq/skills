---
name: social-engagers
description: Reach people at ICP accounts who engaged with social content, your company's posts (a note that continues the conversation) or a competitor's (a note that offers a different view), as a draft campaign. Use when someone asks to reach people who liked, commented on or shared their company's posts or content, or about competitor audiences, competitor followers or people engaging with a competitor.
metadata:
  agent: Katie
  category: Signals
  ends_in: draft campaign
---

# Social Engagers

People who engage with a post are telling you what they care about. Continue the conversation, or give them a second point of view.

## What it asks you once

1. **Whose content** - your company's, or which competitor's
2. **Your ICP** - who is worth reaching

## How it runs

1. **Pick the source**: your company's posts, or a competitor's
2. **Collect recent engagers** with that content
3. **Keep ICP matches** only
4. **Draft a short note** on the topic they engaged with: for your posts, continue the conversation; for a competitor's, offer a different view
5. **Stop for approval**

## Run it with the Alta connector

The connector cannot collect engagers: no tool reads LinkedIn followers or post engagement. The Social Signals source
that finds them is set up in Alta (see "Run it in Alta"). Once that audience exists, the connector reviews it and
drafts the campaign:

1. `list_audiences` and `get_audience` to find the Social Signals audience and what it holds.
2. `list_audience_people` with signals ["social_signal"]. Each person carries the post and what they did with it
   (comment, reaction), with their title and company.
3. **ICP only**: show the user who falls outside the ICP and take them out with `remove_audience_records` with
   audienceListItemIds.
4. Your posts: write the notes here, each continuing the topic of the post and asking for nothing, and wait for
   approval; the approved note is the pitch direction. A competitor's: in the `pitchBrief` and the workflow
   instructions, ask for a short note with a different view on the topic, and say never to mention the competitor or
   how they were found.
5. `load_skill` with `campaign-creation` over that audience. Do not call `launch_campaign`: call
   `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

1. **Audiences → People → Create Audience → Social Signals**: on the Specific companies tab, paste your company's
   LinkedIn page (or Specific posts for a few posts) or the competitor's LinkedIn company URL, pick the engagement types
   (Comments, Reactions, Shares), and set Last month. Alta finds the people who engaged with its posts; there is no
   source for followers.
2. Add your ICP filters and delete the rest; Audience Balance shows how many engagers pass them. Daily Flow keeps
   adding new engagers.
3. **Create Campaign** from that audience (the same source is under Campaigns → New campaign → Target audience), go
   through Target audience, Value proposition (the continuing or view-led note), Touch points and Setup. Set it to
   Co-Pilot so every message waits for your review, and leave it as a draft.
4. **Ask Alta** in the campaign builder can fill in the Social Signals setup for you ("Posts mentioning our company").

## What good looks like

- Only people at ICP accounts make the list
- The note picks up the topic the person engaged with
- The first message asks for nothing: it continues the conversation or adds a real point of view, not a pitch
- The note never mentions the competitor or how you found them

## Rules

- Continue the conversation or offer a view, never pitch in the first message
- Never mention how you know unless it is natural; never mention that you saw them follow or engage with a competitor
- No claims about the competitor you cannot back with facts
- Never send or launch. The play ends at a draft campaign.

## What you get

- ICP people engaging with your company's or a competitor's content
- A short note for each, continuing the conversation or view-led, in a draft campaign
