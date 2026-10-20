---
name: objection-map
description: Group negative replies and call objections into recurring reasons, ranked by frequency, with a suggested response for each. Use when someone asks why prospects say no, about objections, negative replies or objection handling.
metadata:
  agent: Luna
  category: Learn
  ends_in: report
---

# Objection Map

The same five objections usually cost most of the deals. Name them, then answer them.

## How it runs

1. **Read negative replies** and objections from recorded calls
2. **Group them** into recurring reasons - timing, budget, incumbent, priority, fit
3. **Rank by frequency** and by how often the deal died after
4. **Suggest a response** for each, from replies that turned a no into a meeting
5. **Write the report**

## Run it with the Alta connector

Replies are read in full; calls only as summaries (`get_call` has no transcript).

1. `list_email_messages` with `type` `received` (`limit` 100), once per tag: `tag` `Bad Timing`, then `Irrelevant`,
   then `Nurturing`. Do the same with `list_linkedin_messages`. Quote lines from the message body, anonymized.
2. `list_calls` (`limit` 100), then `get_call` on the outbound ones for the `summary` and `disposition` (Objection
   Raised, Not Interested).
3. Rank the reasons. For how often the prospect ended Not Interested after each, use `get_prospect` on the replies'
   `prospectId`, or ask `ask_alta_agent` for counts across the period.
4. For the suggested responses, find threads that turned into a meeting: `list_email_messages` with `tag` `Positive`
   or `Meeting Booked`, then the whole thread with `emailThreadId`, and quote the reply that worked.

## Run it in Alta

- **Inbox**: filter by the tags **Bad Timing**, **Irrelevant** and **Nurturing** to read the negative replies, and
  **Positive** / **Meeting Booked** for the ones that turned around.
- **Analyze → Calls**: **Logs** for each call's summary and outcome, **Analytics** for outcomes over time. Its
  suggestion "Summarize the objections on my calls" opens Ask Alta on exactly this.
- **Ask Alta** (sidebar, top): ask it to group the period's negative replies and call objections into reasons, ranked.

## What good looks like

- Five to eight reasons cover most of the objections
- Each reason has real, anonymized examples
- Every suggested response comes from a case where it worked

## Rules

- Quote real lines, anonymized
- Suggested responses come from what worked, not from theory

## What you get

- Your top objections, ranked
- A proven response for each
