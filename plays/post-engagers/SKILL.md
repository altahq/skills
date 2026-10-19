---
name: post-engagers
description: Reach people at ICP accounts who engaged with your company's content, with a note that continues the conversation. Use when someone asks to reach people who liked, commented on or shared their company's posts or content.
metadata:
  agent: Katie
  category: Signals
  ends_in: draft messages
---

# Post Engagers

People who engage with your content are telling you what they care about.

## How it runs

1. **Collect recent engagers** with your company's content
2. **Keep ICP matches** only
3. **Draft a short note** that continues the topic they engaged with
4. **Stop for approval**

## Run it with the Alta connector

The connector cannot collect engagers: the Social Signals source that finds them is set up in Alta (see "Run it in
Alta"). Once that audience exists, the connector reviews it and drafts the campaign:

1. `list_audiences` and `get_audience` to find the Social Signals audience and what it holds.
2. `list_audience_people` with signals ["social_signal"]. Each person carries the post and what they did with it
   (comment, reaction), with their title and company.
3. Keep ICP matches only: `remove_audience_records` with audienceListItemIds for the rest.
4. Write the notes here, each continuing the topic of the post and asking for nothing, and wait for approval.
5. `load_skill` with `campaign-creation` over that audience, with the approved note as the pitch direction. Do not
   call `launch_campaign`: call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

- **Audiences → Create Audience → Social Signals**: on Specific companies, paste your company's LinkedIn page (or
  Specific posts for a few posts), pick the engagement types (Comments, Reactions, Shares), and set Last month.
- Add your ICP filters; Audience Balance shows how many engagers pass them. Daily Flow keeps adding new engagers.
- **Create Campaign** from that audience, go through Target audience, Value proposition, Touch points and Setup, and
  leave it as a draft. The same source is under Campaigns → New campaign → Target audience.
- **Ask Alta** in the campaign builder can fill in the Social Signals setup for you ("Posts mentioning our company").

## What good looks like

- The note continues the topic the person engaged with
- The first message asks for nothing
- Only people at ICP accounts are contacted

## Rules

- Continue the conversation, never pitch in the first message
- Never mention how you know unless it is natural
- Never send. The play ends at a draft.
