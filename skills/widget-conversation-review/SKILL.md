---
name: widget-conversation-review
description: Review website chat and voice widget conversations weekly - top questions, unanswered questions, drop-off points and qualification rate. Use when someone asks what visitors are asking, about chat transcripts, widget quality or conversation volume.
metadata:
  agent: Luna
  category: Learn
  ends_in: weekly report
---

# Widget Conversation Review

Every widget conversation is a visitor telling you what your site does not explain.

## How it runs

1. **Read the week's conversations** from the website widget
2. **Group the questions** visitors ask most
3. **Flag the ones left unanswered** or answered badly
4. **Find where visitors drop off** in the conversation
5. **Count volume and qualified conversations**, week over week
6. **Write the report** with the content to add first

## Run it with the Alta connector

The connector reaches voice widget conversations only, and only as summaries; chat widget conversations are not
reachable. Say so before you start, and send the user to Alta for the full review.

1. `list_calls` with `limit` 100 returns the latest calls of every kind. Keep those with `callType` `web` from the
   past two weeks. If the oldest of the 100 is still inside that period, say the count is a lower bound.
2. For each, `get_call` gives the `summary` and `disposition`: read the questions and outcomes from them.
3. For counts over a longer period, ask `ask_alta_agent` for web calls per week by disposition.

## Run it in Alta

Assistants → open the web assistant:

- **Web Chats** (chat widget) or **Web Calls** (voice widget): every conversation, with its transcript. Read the
  week's conversations here for the questions, the unanswered ones and where visitors stopped.
- **Analytics**: conversations over time, dispositions, meetings booked and visitors who left an email. Use it for
  volume and qualified rate, week over week.

## What good looks like

- Every unanswered question comes with a real, anonymized example
- Volume and quality are compared week over week
- It ends with the one or two pieces of content to add first

## Rules

- Quote visitors anonymized
- Compare to last week, not to a single good day
- Nothing is changed - the play only reports

## What you get

- Top questions and the ones left unanswered
- Volume, qualified rate and drop-off points, week over week
- The content to add to your knowledge base first
