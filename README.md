# Alta Skills

Agent skills for the [Alta](https://altahq.com) AI Revenue Workforce Platform.

Each skill is a playbook that teaches an agent how to run one kind of Alta work — which tools to call, in what order, and where to stop and ask. They are written against the tools exposed by the Alta MCP server, so connect that first.

## Skills

| Skill | What it covers |
| --- | --- |
| [`campaign-creation`](skills/campaign-creation/SKILL.md) | Building a draft outbound campaign: audience, pitch, workflow, rep, launch — with the three pauses where the user decides. |

## Using a skill

Point your agent at `skills/<name>/SKILL.md`. In Claude Code, copy the directory into `.claude/skills/` or reference it from a plugin's `skills/` directory.

The Alta MCP server also serves these playbooks at runtime through its `load_skill` tool, so an agent connected to Alta can load them without this repository.
