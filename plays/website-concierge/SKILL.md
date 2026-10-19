---
name: website-concierge
description: Set up Alex as a chat or voice concierge on your website that answers from your content, qualifies visitors, books meetings and hands off to a person. Use when someone asks about a website chat, chatbot, voice widget or converting website visitors.
metadata:
  agent: Alex
  category: Inbound
  ends_in: approved prompt, then live widget
---

# Website Concierge

Most visitors leave without asking their question. Give them someone to ask.

## What it asks you once

1. **Your website** - Alex reads it to draft the first prompt
2. **Chat, voice or both**
3. **Who qualifies**, and when to hand off to a person

## How it runs

1. **Draft the prompt** from your site and knowledge files - opening line, answers, qualifying questions
2. **Stop for approval** - nothing goes live before you approve
3. **Talk to visitors** and answer from your own content
4. **Book meetings** for qualified visitors, hand off the rest to a person
5. **Summarize and label** every conversation

## Run it with the Alta connector

Setting up the widget happens in Alta only: the connector cannot create a web assistant or change its prompt. Draft
the prompt, the qualifying questions and the handoff rule with the user here, get their approval, then walk them
through "Run it in Alta". Once it is live, the connector reaches voice widget conversations as summaries; chat widget
conversations are not reachable:

1. `list_calls` with `limit` 100, keeping `callType` `web`.
2. `get_call` for the `summary`, `disposition` and the conversation's output fields (`customFields`).
3. `ask_alta_agent` for web conversations per week by disposition.

## Run it in Alta

1. **Assistants → Create assistant → Web Assistant**, then Chat Widget or Voice Widget.
2. **Chat Flow** (or **Call Flow**): enter your site URL to generate the prompt, refine the opening line and the
   instructions, and add knowledge base files.
3. **Configurations → Tools**: book meeting and check availability, and the details form before booking. There is no
   handoff setting for the widget: say in the prompt how to hand off to a person.
4. **Chat Outputs** (or **Call Outputs**): the summary, dispositions and tags for every conversation.
5. **Embed Code**: the widget goes live when you add the snippet to your site, so add it only after you approve.
6. Review conversations in the assistant's **Web Chats** or **Web Calls** and **Analytics**.

## What good looks like

- Answers come only from your content, and it says so when it does not know
- Qualified visitors leave with a booked meeting
- A person is offered whenever the visitor asks

## Rules

- Nothing goes live until you approve the prompt and the rules
- Answer only from your content - say so when an answer is not there
- Always offer a person when the visitor asks

## What you get

- Every conversation summarized and labeled
- Meetings booked from your website
