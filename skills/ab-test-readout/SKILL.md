---
name: ab-test-readout
description: Read an A/B test on messages or subject lines, pick the winner on positive replies and meetings, and say whether the difference is real or noise. Use when someone asks about A/B tests, split tests or which variant won.
metadata:
  agent: Luna
  category: Learn
  ends_in: readout
---

# A/B Test Readout

Most A/B tests are called too early. This play tells you when it is real.

## How it runs

1. **Read both versions** and their results
2. **Compare on positive replies and meetings**, not opens
3. **Test if the gap is real** given the sample size
4. **Call it** - winner, no difference yet, or keep running and how long

## Run it with the Alta connector

The connector has no A/B test object: in Alta a test is two campaigns that differ in one thing. Read it as two
campaigns, and do the significance test yourself from the counts.

1. `list_campaigns` (`limit` 100) to find the two variants, then `get_campaign` on each to confirm what differs (pitch,
   step content, subject lines) and that the audience source, reps and schedule match.
2. `ask_alta_agent`: for both campaigns over the same dates, contacted prospects, positive replies and meetings booked.
   Leave opens out: they are only recorded where email tracking is on.
3. Test the gap on positive replies and on meetings. If it is not significant, work out the contacted prospects each
   variant still needs, and ask `ask_alta_agent` for each campaign's prospects contacted per day to turn that into days.
4. To show the two versions, `list_email_messages` with `campaignId` and `type` `campaign` (`limit` 10) for each.

## Run it in Alta

- **Analyze → Performance**, filtered by **Campaign** to one variant, then the other: **Contacted Prospects**,
  **Reply Rate** and **Meeting Booked** on **Overview**. The **Campaign Performance** table shows both variants'
  contacted prospects and replies side by side.
- **Campaigns** → open each variant → **Analytics** for its **Outreach Funnel** and **Steps Engagement**.
- **Ask Alta** (sidebar, top): name the two campaigns and ask which wins on positive replies and meetings, and whether
  the gap is real at this sample size.

## What good looks like

- The winner is called on meetings or positive replies, not opens
- Too-early tests get an honest not yet, with the sends still needed
- The confidence of the result is stated in plain words

## Rules

- Never call a winner without enough results
- Say how many more sends are needed when it is too early

## What you get

- The winner, or an honest not yet
- How confident the result is
