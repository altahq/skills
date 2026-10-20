---
name: benchmark-check
description: Compare outbound rates to market standards, cleaned the way benchmarks are computed (delivered-only denominators, per-campaign averages). Use when someone asks if their reply rate is good, about benchmarks or industry averages.
metadata:
  agent: Luna
  category: Learn
  ends_in: report
---

# Benchmark Check

Most teams compare a raw pooled rate to a cleaned benchmark and think they are losing.

## How it runs

1. **Clean your numbers** the way benchmarks are computed - delivered messages as the denominator, averaged per campaign
2. **Pick the right benchmark** for your channel, segment and deal size
3. **Compare** reply, positive reply, meeting and bounce rates
4. **Name the gaps** worth fixing first
5. **Write the report**

## Run it with the Alta connector

Alta holds your numbers, not market benchmarks: bring the benchmarks from cited public sources and say which ones you
used.

1. `ask_alta_agent`: per campaign over the period, emails sent, emails bounced, contacted prospects, replies, positive
   replies and meetings booked, per channel. Ask it to compute each rate on delivered messages (sent minus bounced)
   and to give both the per-campaign average and the pooled rate.
2. `list_campaigns` and `get_campaign` for the campaigns that drive the numbers: channels, audience and type, to pick
   the matching benchmark.
3. Compare reply, positive reply, meeting and bounce rates with the benchmark computed the same way, and show the
   formula next to each number.

## Run it in Alta

- **Analyze → Performance**: **Overview** shows **Reply Rate** and **Meeting Booked**, and the **Campaign Performance**
  table sent, replied and bounced per campaign; **Email Health** shows **Bounce rate** and **Human reply rate**. These
  rates are on contacted prospects or sent emails, not delivered ones: recompute before comparing.
- **Ask Alta** (sidebar, top): ask for your rates per campaign on delivered messages, then compare them with the
  benchmark.

## What good looks like

- Your numbers and the benchmark use the same denominator
- Every benchmark has a cited source
- The report ends with at most two priorities

## Rules

- Always show how each number was computed
- Never compare a raw rate to a cleaned benchmark
- Cite the source of every benchmark

## What you get

- Your rates next to market standards, computed the same way
- The one or two gaps worth fixing
