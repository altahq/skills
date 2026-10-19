---
name: icp-to-campaign
description: Turn a one-paragraph ICP into an audience, a pitch and a draft campaign in Alta. Use when someone describes their ideal customer and wants a campaign built from it, or asks to start outbound from scratch.
metadata:
  agent: Katie
  category: Build lists
  ends_in: draft campaign
---

# ICP to Campaign

From one paragraph about your buyer to a campaign ready to review.

## What it asks you once

1. **Your ICP** - one paragraph: who, what size, what problem
2. **What you sell** - one sentence
3. **Who sends** - the rep whose mailbox Katie writes from

## How it runs

1. **Turn the paragraph into filters** - titles, seniority, industry, size, region
2. **Build the audience** and remove titles that never buy
3. **Write the pitch** from the Company Brain
4. **Draft the campaign** and stop for approval

## Run it with the Alta connector

1. Call `load_skill` with `campaign-creation` and follow it for the audience, the pitch and the workflow, with its
   three pauses. Show the user the filters `search_prospects` built from their paragraph at the first pause.
2. Where that skill says to launch, do not call `launch_campaign`. Call `open_draft_campaign_in_alta` and give the user
   the link: this play ends at a draft, even when the user says "launch" (tell them to launch it from Alta).
3. When the user names a list in their CRM instead of a paragraph, use the skill's CRM path (`list_crm_lists`,
   `create_audience`, `update_audience`) for the audience.

## Run it in Alta

- **Ask Alta** (sidebar, top): paste the paragraph and ask for a draft campaign. It runs the same flow and stops at a
  saved draft with a link to it.
- **By hand**: Campaigns → New campaign, then the builder's four steps: Target audience, Value proposition, Touch
  points, Setup. Launch from Setup when you are ready.

## What good looks like

- Every filter traces back to a phrase in your paragraph, and you can see which
- The audience is a few hundred real buyers, not thousands of loose matches
- The pitch names a problem your buyer has this quarter, not a feature list

## Rules

- Show the filters it used, so you can correct them
- Never launch. The play ends at a draft.
