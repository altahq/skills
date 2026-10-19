# Plays

Alta's GTM plays: one folder per play, named by its slug, each a `SKILL.md` that runs on Katie, Alex or Luna.

Every play follows the skill format (`name` and a `description` that says when to use it; the play's agent,
category and end state under `metadata`) and says how to run it, right after `## How it runs`:

- `## Run it with the Alta connector`: the connector's tools in order, and what the connector cannot reach. Only
  tools listed in `mcp-tools.json` may be named. The list is read from the connector in altahq/alta with
  `node scripts/sync-mcp-tools.mjs <alta checkout>`; run it when the connector's tools change.
- `## Run it in Alta`: the screens in the product, and what to do on each.

The plays are not part of the Alta plugin yet: they sit outside `skills/`, so installing the plugin does not load them.

## Changing a play

Edit its `SKILL.md` and open a pull request. CI runs `node scripts/check-plays.mjs`: the frontmatter, the required
sections, and no tool the connector does not have.
