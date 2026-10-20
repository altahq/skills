---
name: call-to-crm
description: After every sales call, draft the summary, next steps and CRM field updates for approval. Use when someone asks about logging calls, call notes, updating Salesforce or HubSpot after calls, or manual CRM entry.
metadata:
  agent: Alex
  category: Clean
  ends_in: CRM updates for approval
---

# Call to CRM

The CRM is only as good as the notes nobody has time to write.

## What it asks you once

1. **Which calls count** - external calls on the calendar
2. **Which CRM fields to keep current** - stage, next step, close date, contacts

## How it runs

1. **Read the call recording** or transcript
2. **Write a short summary** and the next steps that were agreed
3. **Propose field updates** - stage, next step, close date, new contacts
4. **Show the before and after** for approval
5. **Save to the CRM** once approved

## Run it with the Alta connector

The connector reads calls placed through Alta only, as summaries without the transcript, and it cannot write to the
CRM. Draft the updates here, show the before and after, and let the user save them, or build the automation for them
to publish in Alta.

1. `list_calls` with `limit` 100, newest first. Keep the calls since the last run.
2. `get_call` for each: the `summary`, `disposition`, duration and the call's output fields (`customFields`).
3. `ask_alta_agent` for the current CRM values of the record (stage, next step, close date, contacts), so each proposed
   change shows its before and after.
4. To run it on every call: `build_workflow` with a task such as "on Call Completed, draft the CRM updates, ask me for
   approval in Slack, then update the record". It saves an unpublished draft; the user reviews and publishes it in
   Alta.

## Run it in Alta

- **Settings → CRM Settings**: turn on logging calls to the CRM and map the call's summary and output fields to CRM
  fields under **Field Mapping**. Leave **Send On Update** off on fields people edit by hand, so they are never
  overwritten. Calls are pushed as they end, with no approval step.
- **Calls** (Analyze): every call with its recording, transcript and summary.
- **Workflows** (Build) → Add workflow: the Call Completed trigger, a Slack "Request Approval from A User" step and the
  CRM's Custom API Call, for updates that wait for a yes. Publish it when it is right.

## What good looks like

- Every proposed change cites the line from the call behind it
- Updates are ready within the hour after the call
- Nothing a person changed today is overwritten

## Rules

- Nothing is saved before approval
- Every proposed change shows the line from the call behind it
- Never overwrite a field a person changed today

## What you get

- A summary and next steps for every call
- CRM updates ready to approve in one click
