---
name: lead-routing
description: Route every new lead to the right owner by territory, account ownership or round robin, with a handoff note. Use when someone asks about lead routing, round robin, lead assignment or who owns a lead.
metadata:
  agent: Alex
  category: Inbound
  ends_in: routing card for approval
---

# Lead Routing

A lead that waits for an owner goes cold.

## What it asks you once

1. **Your routing rules** - territories, account owners, round robin groups
2. **What to do with ties** and unknown leads

## How it runs

1. **Match the lead** to an existing account and owner
2. **Apply your rules** - account owner first, then territory, then round robin
3. **Write a handoff note** - who it is, why now, what they asked for
4. **Show the routing** for approval, then hand it off

## Run it with the Alta connector

The connector cannot assign an owner in the CRM or set a campaign's rep assignment. It can look up the owner and
write the handoff note here, and build the routing as an automation for the user to publish.

1. `ask_alta_agent` with the lead's email and company: does the account exist in the CRM, who owns it, and the
   territory fields of the record.
2. `list_reps` for the reps who can take the lead; apply the user's rules in order (account owner, territory, round
   robin) and show which rule decided it.
3. `get_prospect_timeline` when the lead is already a prospect in Alta, for what they asked and why now.
4. To run it on every new lead: `build_workflow` with the trigger (a new lead or contact in the CRM, or a webhook from
   the form), the rules, a Slack approval step and the owner update in the CRM. It saves an unpublished draft; the
   user reviews and publishes it in Alta.

## Run it in Alta

- **Campaigns → campaign → Setup → Rep Assignments**: decides which rep reaches each prospect in that campaign. Order
  the rules: lead owner, contact owner or company owner on the CRM, a rep in a CRM user field, the rep who already
  engaged with the company on Alta, then take turns across the assignable reps. It assigns without approval.
- **Settings → CRM Settings → Rep mapping**: maps each rep to a CRM user, used as the record owner when Alta pushes to
  the CRM.
- **Workflows** (Build) → Add workflow: for territory rules, approval and a handoff message, build them as a workflow
  and publish it.

## What good looks like

- Every lead has an owner within minutes, with the rule that decided it
- Existing account owners are never skipped
- The handoff note says why this lead matters now

## Rules

- An existing account owner always wins
- Every routing shows which rule decided it
- Nothing is assigned without approval

## What you get

- An owner for every lead, with the rule that decided it
- A handoff note the rep can act on
