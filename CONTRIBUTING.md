# Contributing

Alta's GTM plays live in `skills/`: one folder per play, named by its slug, each a `SKILL.md` that runs on Katie, Alex or Luna.
`campaign-creation` sits next to them but is not a play, and is rendered from the alta repo.

Every play follows the skill format (`name` and a `description` that says when to use it; the play's agent,
category and end state under `metadata`) and says how to run it, right after `## How it runs`:

- `## Run it with the Alta connector`: the connector's tools in order, and what the connector cannot reach. Only
  tools listed in `scripts/mcp-tools.json` may be named. The list is read from the connector in altahq/alta with
  `node scripts/sync-mcp-tools.mjs <alta checkout>`; run it when the connector's tools change.
- `## Run it in Alta`: the screens in the product, and what to do on each.

## Changing a play

Edit its `SKILL.md` and open a pull request. CI runs `node scripts/check-plays.mjs`: the frontmatter, the required
sections, and no tool the connector does not have.
