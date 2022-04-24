# McSrvBot

<p align="center">
    McSrvBot is a bot which allows you to look at your Minecraft server status without even opening Minecraft!
</p>

# Setting up the bot

Before you go to the step `Configuring the bot` or `The First Start` make sure you have downloaded and installed these things:

**[Latest Version Of NodeJS](https://nodejs.org/en/)**

After the successful installation of NodeJS, follow this process IF YOU ARE ON WINDOWS!:

```
1- Click On The Windows-Key Of Your Keyboard .

2- Type Powershell/Cmd (It's Totally Your Choice) And Right Click On First Result .

3- Click "Run As Administrator" .

4- When The Terminal Is Opened Type npm install --global windows-build-tools --vs2015 In It And The Installation Will Start (Sometimes This Can Take Long) .

5- When The Installation Is Finished You Can Close The Terminal .
```

MacOS users do:
``xcode-select --install`` in the terminal.

Linux users do nothing.

After completing `Setting up the bot` move to `Configuring the bot`.

# Configuring the bot

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

After Completing `Configuring the bot` Move To `The First Start` .

# The First Start

When you completed the above steps run these commands:

```
npm install discord.js@12.5.3 discord.js-pagination fs glob node-fetch quick.db
npm run start
```

Congrats! Your bot is now up and running. Enjoy :D
