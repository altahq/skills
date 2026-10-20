---
name: hiring-signal-campaign
description: Find companies hiring for the roles your buyer leads, and draft a why-now campaign in Alta for a person to approve. Use when someone asks to target companies that are hiring, or to use job posts as a reason to reach out.
metadata:
  agent: Katie
  category: Signals
  ends_in: draft campaign
---

# Hiring Signal Campaign

A company that posts a role you sell to is changing how that team works. This play finds those companies the week they post and drafts a campaign that says why now. It never sends on its own.

## What it asks you once

1. **Roles that signal intent** - for example SDR, Account Executive, RevOps Manager
2. **Who to reach** - the title that owns that team
3. **Where and how big** - countries and company size
4. **What you sell** - one sentence

## How it runs

1. **Find the posts** from the last 30 days, keeping the URL and date
2. **Find the owner** of each team, plus one level above
3. **Build the audience** in Alta with the post as a signal
4. **Write the pitch** from the Company Brain
5. **Draft the campaign** and stop for approval

## Run it with the Alta connector

The people search has no hiring or job-post filter, so the play builds the audience of team owners first and asks
Alta for each company's hiring signals.

1. `search_prospects` for the owner of the team and one level above (job_department plus job_seniority) at companies
   of the size and countries the user gave. Show the user the query.
2. `create_audience`, then `update_audience` with that query and an amount.
3. `estimate_audience_enrichment`, then `enrich_audience` with companyEnrichmentGoals ["signals"] and enrichmentGoals
   []. `get_audience_enrichment_progress` says when it has finished.
4. `list_audience_people` with signals ["hiring"]. Each signal carries the role, department, location, announcement
   date and its source link. Keep the roles the user named from the last 30 days. The source is the company's hiring
   post or announcement, which is not always the job listing: say so when it is not.
5. Exclusions: `list_communication_opt_outs` for do-not-contact, `ask_alta_agent` for customers and open deals in the
   CRM. `remove_audience_records` with audienceListItemIds clears them, and anyone without a fresh post.
6. `load_skill` with `campaign-creation` over that audience, with the why-now line as the pitch brief. Do not call
   `launch_campaign`: call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

- **Campaigns → New campaign → Target audience → Trigger Events**: Add Trigger, pick Hiring, write who to reach in
  "What you're looking for" (for example "Heads of Sales at 50-500 person SaaS companies in the US hiring SDRs"), and
  set Last X Days to 30. It keeps finding new matches every day.
- **Or from an audience**: Audiences → Create Audience with Search, then Add Enrichment → Alta enrichment → Company
  Signals, and Filters → Signals: Hiring. Each signal shows the role and View source.
- **Knowledge → Signals**: Hiring must be on for enrichment to return it.
- Go through Value proposition, Touch points and Setup, and leave the campaign as a draft.
- **Ask Alta** can build the audience, run the signals and draft the campaign; it stops at a saved draft.

## What good looks like

- Every company cites a live job post from the last 30 days, with the link
- The email is sent to the person the new hire will report to, not the recruiter
- The why-now line would make no sense to a company that is not hiring

## Rules

- Every hiring claim cites its post
- Skip customers, open deals and do-not-contact
- Never launch. The play ends at a draft.
