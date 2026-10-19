---
name: every-market-in-its-language
description: Run one campaign across countries, written natively in each market's language and sent in local working hours. Use when someone sells in several countries or asks for outreach in Spanish, French, German, Hebrew or other languages.
metadata:
  agent: Katie
  category: Pipeline
  ends_in: draft campaigns per language
---

# Every Market in Its Language

A translated email reads like a translated email. This play writes each market natively.

## What it asks you once

1. **Your markets** - countries and the language for each
2. **The core message** - in any one language

## How it runs

1. **Split the audience** by country
2. **Write each segment natively** in its language, with local tone and examples
3. **Set send times** to local working hours
4. **Draft one campaign per language** and stop for approval

## Run it with the Alta connector

1. Call `load_skill` with `campaign-creation` and follow it once per language, each with a `search_prospects` query
   limited to that language's countries (location_country).
2. At the pitch pause, give `build_campaign_pitch` the core message as the `pitchBrief`, with the same names, numbers
   and claims for every market. It always returns American English: before `update_campaign` saves the pitch, set its
   `outreachLanguage` to the market's language (for example Spanish, French, German formal or informal, Hebrew), and
   ask in the workflow instructions for native writing with local examples, not translation.
3. **Local hours**: a new draft has no sending schedule, so the user sets it in Setup (see below). Once it exists,
   `update_campaign` with `schedule` (`useProspectTimezone` true, working days and hours) can adjust it.
4. Do not call `launch_campaign`. Call `open_draft_campaign_in_alta` for each campaign and give the user the links.

## Run it in Alta

Campaigns → New campaign, once per language:

- **Target audience**: the countries of that market.
- **Value proposition**: the core message, and **Outreach Language** set to the market's language.
- **Setup → Schedule Settings**: turn on **Prospect timezone** and set the active days and hours to local working
  hours. Leave each campaign as a draft.

**Ask Alta** (sidebar, top) can draft the campaigns per market; check the Outreach Language and schedule of each in
the builder.

## What good looks like

- A native speaker would not guess the message started in another language
- Claims and numbers are the same in every language
- Every send lands in the prospect's working hours

## Rules

- Write natively, never word-for-word translation
- Keep names, numbers and claims identical across languages
- Never launch. The play ends at a draft.

## What you get

- One draft campaign per language
- Local send times for each market
