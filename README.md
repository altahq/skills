# Alta

![Alta](assets/logo.svg)

Run outbound sales campaigns in [Alta](https://www.altahq.com), the AI Revenue Workforce Platform, straight from a conversation with Claude.

This plugin pairs the Alta connector, which gives Claude your Alta account's tools, with skills that tell Claude how to use them: which tools to call, in what order, and where to stop and let you decide.

## What's inside

| Component | What it does |
| --- | --- |
| Alta connector (`.mcp.json`) | Connects Claude to your Alta account through Alta's remote MCP server at `https://api.altahq.com/mcp`. |
| [`campaign-creation`](skills/campaign-creation/SKILL.md) skill | Builds a draft outbound campaign end to end: audience, pitch, workflow, sending rep, launch. It pauses three times for your approval: after the audience, after the pitch, and after the workflow. |

## Getting started

1. Install the plugin from the Claude directory, or in Claude Code run `claude --plugin-dir <path-to-this-repo>`.
2. Connect the Alta connector. On claude.ai and in Cowork, open the plugin's **Connectors** tab and select **Connect**. In Claude Code, run `/mcp` and authenticate the `alta` server.
3. Sign in with your Alta account in the browser window that opens. You need an active Alta account; the connector acts with your own user's permissions.

## Using it

Ask Claude for a campaign in plain words, for example:

- "Create a campaign targeting VPs of Sales at US SaaS companies with 50 to 500 employees."
- "Build an email and LinkedIn campaign for the audience I uploaded yesterday and assign it to Dana."

Claude finds or builds the audience, writes the pitch from your company's Compass knowledge base, generates the multi-channel workflow, and matches a sending rep. It stops at each pause so you can review and edit. The campaign stays a draft in Alta until you explicitly ask Claude to launch it, and you can open it in Alta at any point to review it there.

## Data and privacy

- The plugin itself contains only Markdown and JSON. It runs no local code, scripts, or hooks, and installs no packages.
- All tool calls go to Alta's MCP server at `https://api.altahq.com/mcp` over HTTPS, authenticated with OAuth 2.0 against your Alta account. No credentials are stored in the plugin.
- What is sent: the campaign details you discuss with Claude, such as audience filters, pitch text, workflow steps, and rep choice. What comes back: prospect previews, campaign drafts, and workflow previews from your Alta account.
- Launching a campaign makes Alta send outreach (email, LinkedIn, and other channels you choose) to the campaign's prospects. Claude asks before it launches.
- Data is handled under Alta's [Privacy Policy](https://www.altahq.com/privacy-policy) and [Terms of Service](https://www.altahq.com/terms-of-service).

## Support

Questions or problems: [support.altahq.com](https://support.altahq.com) or support@altahq.com.

## License

[MIT](LICENSE)
