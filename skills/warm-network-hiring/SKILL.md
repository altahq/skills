---
name: warm-network-hiring
description: Find people in your own network whose companies are hiring for the roles you serve, and draft short warm notes. Use when someone asks to use their own LinkedIn network or connections to find warm openings at hiring companies.
metadata:
  agent: Katie
  category: Signals
  ends_in: draft messages
---

# Warm Network Hiring

The warmest outreach goes to people who already know you. This play finds the ones with a reason to talk now.

## What it asks you once

1. **Roles that signal intent** - the roles you serve when they are hired
2. **Your connections** - the network to check

## How it runs

1. **Check your connections' companies** for open roles you serve
2. **Rank** by how well you know them and how strong the signal is
3. **Draft a short warm note** for each, in your voice
4. **Stop for approval** before anything is sent

## Run it with the Alta connector

The connector cannot import your LinkedIn connections, and Alta does not know how well you know someone: import the
connections in Alta (see "Run it in Alta") and rank the relationship with the user. Then the connector finds the
signals:

1. `list_audiences` to find the connections audience.
2. `estimate_audience_enrichment`, then `enrich_audience` with companyEnrichmentGoals ["signals"] and enrichmentGoals
   ["live_profile_data"]. `get_audience_enrichment_progress` says when it has finished.
3. `list_audience_people` with signals ["hiring", "person_hiring"]: the company's hiring post with the role and its
   source link, or Hiring turned on in the person's LinkedIn profile. Keep the roles the user serves.
4. Rank with the user, write each note here (three sentences, no pitch) and wait for approval.
5. To put them in Alta: `create_audience` and `add_prospects` with each person's linkedinUrl, then `load_skill` with
   `campaign-creation` over that audience, with the approved note as the pitch direction. Do not call
   `launch_campaign`: call `open_draft_campaign_in_alta` and give the user the link.

## Run it in Alta

- **Audiences → More Sources → LinkedIn Connections**: pick the rep's LinkedIn account (connected in rep settings).
- **Add Enrichment → Alta enrichment → Company Signals** (and Person Signals), then Filters → Signals: Hiring or
  Person hiring.
- **Signal Trackers** (under Build, Beta, when it is on for your account) can watch the connections for Person hiring
  every week; choose Add to an audience list or Notify me, not Enroll in a campaign.
- **Create Campaign** from the people you picked and leave it as a draft. **Ask Alta** can run the signals and draft
  it; it stops at a saved draft.

## What good looks like

- Notes sound like you wrote them to a friend - three sentences, no deck
- The strongest relationships with the strongest signals rank first
- Nobody gets a warm note they would read as a disguised pitch

## Rules

- Warm notes only - short, personal, no pitch deck
- Never launch. The play ends at a draft.
