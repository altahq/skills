---
name: webinar-follow-up
description: Follow up with webinar attendees and no-shows with a message that fits what each group saw. Use when someone ran a webinar or virtual event and wants to follow up with attendees and no-shows.
metadata:
  agent: Katie
  category: Events
  ends_in: two draft campaigns
---

# Webinar Follow-Up

Registrants raised a hand. Most never hear from you again. This play fixes that.

## How it runs

1. **Split registrants** into attended and missed
2. **Keep ICP matches** and drop the rest
3. **Draft for attendees** - one idea from the session and a next step
4. **Draft for no-shows** - the recording and one reason to watch
5. **Stop for approval** on both

## Run it with the Alta connector

Alta has no webinar integration: the registrants come from the user, as a CRM list or as rows they paste in, with who
attended.

1. Two audiences with `create_audience`, attended and missed. Fill them from the CRM with `list_crm_lists` and
   `update_audience` (crmList), or with `add_prospects` (up to 100 per call).
2. **ICP filter**: read each with `list_audience_people`, show who falls outside the ICP, and take them out with
   `remove_audience_records`.
3. Call `load_skill` with `campaign-creation` once per audience. For attendees, put one real idea from the session
   and the next step in the `pitchBrief`; for no-shows, the recording link and one reason to watch.
4. Do not call `launch_campaign`. Call `open_draft_campaign_in_alta` for both and give the user the links.

## Run it in Alta

1. **Audiences → People → Create Audience**, twice: one for attendees, one for no-shows, each from CSV or from your
   CRM list. Delete the registrants outside your ICP.
2. **Campaigns → New campaign** on each audience, with its own Value proposition: the session's idea for attendees,
   the recording for no-shows. Leave both as drafts.

**Ask Alta** (sidebar, top) can write both drafts once the two audiences exist.

## What good looks like

- Attendees and no-shows get different messages
- The attendee note quotes one real idea from the session
- Non-ICP registrants are left out, not mass-mailed

## Rules

- Never claim someone asked a question they did not ask
- Never launch. The play ends at a draft.
