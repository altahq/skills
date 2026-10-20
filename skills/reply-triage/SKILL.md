---
name: reply-triage
description: Sort new replies by intent and draft the right answer for each one. Use when someone asks to go through their replies or inbox, sort responses, or draft answers to prospects.
metadata:
  agent: Alex
  category: Qualify
  ends_in: draft replies
---

# Reply Triage

Every reply deserves an answer the same morning. This play sorts them and drafts each one.

## How it runs

1. **Read new replies** across your campaigns
2. **Sort by intent** - interested, not now, wrong person, unsubscribe
3. **Draft the answer** for each, in the rep's voice
4. **Offer times** to the interested ones from the rep's calendar
5. **Stop for approval** before anything is sent

## Run it with the Alta connector

1. `list_email_messages` with `type` `received` and `onlyLastMessagePerThread` true, and `list_linkedin_messages`
   with `type` `received` and `unread` true. Alta's tags (Positive, Nurturing, Bad Timing, Reply Needed, Irrelevant,
   Out Of Office Reply) can narrow it with `tag`.
2. `get_prospect_timeline` for what was sent before each reply. Sort each reply: interested, not now, wrong person,
   unsubscribe.
3. Unsubscribes: `add_communication_opt_outs` with their email, right away, no draft.
4. Everyone else: `create_email_draft` on the reply's message (`emailMessageIdToReplyTo`) or `create_linkedin_draft`.
   The connector has no calendar: offer times or a booking link the user gives you. `assign_tags` to mark the intent.
5. Do not call `send_email_message` or `send_linkedin_message`: this play ends at drafts the user sends from Alta.

## Run it in Alta

- **Assistants → Create assistant → Reply Assistant** (the Meeting Booker template fits): the goal and tone in
  **Goal**, with **Use rep linked tools** so it offers times from the rep's calendar; the intents as outcomes in
  **Output**.
- **Campaigns → campaign → Setup → Reply Assistant**: choose it and pick **Save as draft**, so every answer waits for
  you.
- **Inbox**: replies are tagged automatically; open a thread to review the assistant's draft and send it. **Daily →
  Reply needed** lists the replies still waiting.

## What good looks like

- Every reply has a sorted intent and a drafted answer before noon
- Interested replies get meeting times in the first answer, not a second round
- Unsubscribes are honored the same hour

## Rules

- Unsubscribes are honored right away, no draft needed
- Wrong person: ask for the right contact, never guess
- Never send. The play ends at a draft.
