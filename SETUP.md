# Minecraft Server Status Discord Bot

<p align="center">
    Minecraft Server Status Bot is a Discord Bot Which Gives You Status Of Your Minecraft Server .
</p>

# Bot-Setup

Before Go Into `Bot-Config` or `Bot-Startup` Make Sure You Have Downloaded And Installed These Things :

**[Latest Version Of NodeJS](https://nodejs.org/en/)**

After Successfull Installation Of NodeJS , Follow This Process :

```
1- Click On The Windows-Key Of Your Keyboard .

2- Type Powershell/Cmd (It's Totally Your Choice) And Right Click On First Result .

3- Click "Run As Administrator" .

4- When The Terminal Is Opened Type npm install --global windows-build-tools --vs2015 In It And The Installation Will Start (Sometimes This Can Take Long) .

5- When The Installation Is Finished You Can Close The Terminal .
```

After Completing `Bot-Setup` Move To `Bot-Config` .

# Bot-Config

You Have Found File Named **config.json** like this :

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
In First Line Place **`Your Bot Website Link`** .
In Second Line Place **`Your Bot Invite Link`** .
In Third Line Place **`Your Bot Token`** .
In Fourth Line Place **`Your Discord Server Invite Link`** .
In Fifth Line Place **`Your Bot Default Prefix`** .
Don't Make Changes In **`Sixth`** , **`Seventh`** And **`Eight`** Line .
In Last Line Place **`Discord Channel Id`** Where Bot Sends A Report Whenever Anyone Used Report Command .

After Completing `Bot-Config` Move To `Bot-Startup` .

# Bot-Startup

When You Completed The Above Setup Open Terminal And Use These Commands :

```
npm install discord.js@12.5.3 discord.js-pagination fs glob node-fetch quick.db
npm run start
```

Congo Your Bot Is Working Now , Enjoy .