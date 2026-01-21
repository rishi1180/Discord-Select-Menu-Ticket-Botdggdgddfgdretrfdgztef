# Multipurpose Discord Bot

## Overview
A multipurpose Discord bot built with Discord.js v13 featuring:
- Music playback (via Lavalink/erela.js)
- Moderation commands
- Fun commands & games
- Social media integrations (Twitter, TikTok, YouTube)
- Giveaways
- Welcome/leave messages
- AI chat
- And much more

## Project Structure
```
├── botconfig/       # Bot configuration files
├── commands/        # Legacy prefix commands
├── slashCommands/   # Discord slash commands
├── events/          # Discord event handlers
├── handlers/        # Various feature handlers
├── dashboard/       # Dashboard files (optional)
├── databases/       # Database storage (enmap/SQLite)
├── languages/       # Internationalization files
├── social_log/      # Social media integration configs
└── index.js         # Main entry point
```

## Running the Bot
- Command: `npm start` or `node index.js`
- The bot runs as a console application (no web frontend)

## Required Environment Variables
- `token` - Discord bot token (required)
- `memer_api` - Memer API key (optional, for meme commands)

## Configuration
Main configuration is in `botconfig/config.json`:
- `prefix` - Command prefix (default: `!`)
- `ownerIDS` - Bot owner Discord IDs
- `clientsettings.nodes` - Lavalink node configuration for music

## Music Setup
For music functionality, connect to a Lavalink server. Configure nodes in `botconfig/config.json` under `clientsettings.nodes`.

## Dependencies
- Node.js 18+
- Discord.js v13
- better-sqlite3 (via enmap)
