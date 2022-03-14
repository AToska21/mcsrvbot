# Minecraft Server Status Discord Bot

<p align="center">
    Minecraft Server Status Bot is a Discord Bot Which Gives You Status Of Your Minecraft Server .
</p>

# Bot-Setup

Before you go into `Bot Configuration` or `First Start` make sure you have downloaded and installed these things :

**[Latest Version Of NodeJS](https://nodejs.org/en/)**

After the successful installation of NodeJS, follow this process:

```
1- Click On The Windows-Key Of Your Keyboard .

2- Type Powershell/Cmd (It's Totally Your Choice) And Right Click On First Result .

3- Click "Run As Administrator" .

4- When The Terminal Is Opened Type npm install --global windows-build-tools --vs2015 In It And The Installation Will Start (Sometimes This Can Take Long) .

5- When The Installation Is Finished You Can Close The Terminal .
```

After completing `Bot Setup` move to `Bot Configuration` .

# Bot Configuration

You have a file named config.json like this:

```json
{
  "websitelink":"your-bot-website-link",
  "botinvitelink": "your-bot-invite-link",
  "bottoken": "your-bot-token",
  "discordinvitelink": "your-discord-server-invite-link",
  "defaultprefix": "your-bot-default-prefix",
  "botago": "86400000",
  "botoldcolor": "RED",
  "botnewcolor": "GREEN",
  "botreportchannel": "channel-id-where-report-command-send-reports"
}
```
In the first line put **`Your Bot Website Link`**.
In the second line put **`Your Bot Invite Link`**.
In the third line put **`Your Bot Token`**.
In the fourth line put **`Your Discord Server Invite Link`**.
In the fifth line put **`Your Bot Default Prefix`**.
Do not make changes in the **`Sixth`**, **`Seventh`**, And **`Eighth`** lines.
In the ninth line put the **`Discord Channel Id`** where the bot sends a report when someone uses the report command.

After Completing `Bot Configuration` Move To `First Start` .

# First Start

When you completed the above steps run these commands:

```
npm install discord.js@12.5.3 discord.js-pagination fs glob node-fetch quick.db
npm run start
```

Congrats! Your bot is now up and running. Enjoy :D
