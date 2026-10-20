---
name: competitive-deal-brief
description: When a competitor is mentioned in a deal, write a one-page win plan from your own win and loss history. Use when someone asks how to beat a competitor in a deal, for a battlecard, or for a win plan against a named competitor.
metadata:
  agent: Luna
  category: Competitive
  ends_in: brief
---

# Competitive Deal Brief

Every competitive deal you ran before holds the answer to the next one.

## How it runs

1. **Spot the competitor** in calls, emails or CRM notes
2. **Pull your history** against them - wins, losses and why
3. **Write a one-page plan** - where you win, where they win, the traps to avoid and three questions to ask
4. **Share it** with the deal owner

## Run it with the Alta connector

The connector reads your CRM, your Alta emails and your Alta calls, but has no web search and cannot message a
colleague: back public claims with a source the user gives you, and hand the brief to the user to send to the deal
owner.

1. **Spot the competitor**: `ask_alta_agent` for open deals whose notes, meeting notes or fields name the competitor
   (from the CRM synced to Alta). `list_email_messages` with type received and `get_email_message` find replies that
   name it; `list_calls` and `get_call` do the same in call summaries.
2. **Pull the history**: `ask_alta_agent` for won and lost deals against that competitor, with amount, close date and
   lost reason. If your CRM does not record the competitor on a deal, say so rather than guessing which deals it was.
3. **Write the one-page plan** in the chat: where you win, where they win, traps, and three questions, each claim with
   the deal or source behind it.

## Run it in Alta

- **Ask Alta** (sidebar, top): name the deal and the competitor and ask for the brief. It reads the CRM synced in
  Settings → Integrations and the competitors listed in **Knowledge → Pitch**; turn on **Tools → Web Search** for
  public facts.
- **Inbox** and **Analyze → Calls** hold the emails and call summaries where the competitor came up.
- Copy the brief to the deal owner: Alta does not send it for you.

## What good looks like

- The brief fits on one page and the rep reads it before the next call
- Every claim comes from your own win and loss history or public facts
- The three questions expose where the competitor is weak, without naming it negatively

## Rules

- Only claims you can back with your own data or public facts
- No negative claims about a competitor you cannot prove
