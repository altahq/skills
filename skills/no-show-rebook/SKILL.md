---
name: no-show-rebook
description: Rebook prospects who missed a scheduled meeting, the same day, with new times. Use when someone asks about meeting no-shows, missed demos, or rebooking prospects who did not show up.
metadata:
  agent: Alex
  category: Qualify
  ends_in: rebooked meetings or a draft follow-up
---

# No-Show Rebook

A missed meeting is not a lost lead. Most people who miss a call still want it.

## How it runs

1. **Spot no-shows** from your calendar the same day
2. **Send a short, friendly note** with new times, no guilt
3. **Try a second channel** the next day if there is no answer
4. **Rebook** on the same rep's calendar

## Run it with the Alta connector

The connector cannot read a calendar or book a meeting. It can find the no-shows Alta knows about and draft the note.

1. `ask_alta_agent` for today's meetings with status no-show (Alta sets it from HubSpot meetings), with the guest,
   the host rep and the prospect.
2. `get_prospect_timeline` for each, and `list_email_messages` with `prospectId` for the last email in their thread.
3. `create_email_draft` on that thread with a short note and new times the user gives you, or `create_linkedin_draft`.
   Show the drafts; send with `send_email_message` or `send_linkedin_message` only after the user approves.
4. To run it on every no-show: `build_workflow` with a task such as "when Calendly marks an invitee as a no-show, add them
   to campaign X". It saves an unpublished draft; the user reviews and publishes it in Alta.

## Run it in Alta

- **Daily → Meetings**: meetings with their status, No Show included when it comes from HubSpot.
- **Campaigns → New campaign** for rebooking: a short email the same day, a second channel the next day, and a **Reply
  Assistant** in Setup with **Use rep linked tools**, so times come from the same rep's calendar.
- **Workflows** (Build) → Add workflow: Calendly's "Invitee Marked as No-Show" trigger, then Alta's "Add Prospects to
  Campaign" with the invitee into that campaign. Publish it.

## What good looks like

- The rebook note goes out the same day and sounds friendly, not annoyed
- The meeting stays on the original rep's calendar
- Two tries, then the play stops

## Rules

- Two tries, then stop
- Never sound annoyed
