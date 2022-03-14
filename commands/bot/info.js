const Discord = require('discord.js');
const bconfig = require('../../config.json')

module.exports = {
  name: 'info',
  execute(message, _args, client) {

    // bot-perm
    if (!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send('Please Give Me **EMBED_LINKS** permission in this channel .')

    let embedInfo = new Discord.MessageEmbed();
    embedInfo.setTitle(client.user.username)
    embedInfo.setURL(bconfig.websitelink)
    embedInfo.setDescription("Info Panel Here :-")
    embedInfo.addFields([
      {
        "name": "Language",
        "value": "**[JavaScript](https://www.javascript.com)**",
        "inline": true
      },
      {
        "name": "Platform",
        "value": "**[NodeJS](https://nodejs.org/en)**",
        "inline": true
      },
      {
        "name": "Library",
        "value": "**[Discord.js](https://discordjs.guide)**",
        "inline": true
      },
      {
        "name": "Packages",
        "value": "**[NPM](https://www.npmjs.com)**",
        "inline": true
      },
      {
        "name": "Api",
        "value": "**[Mcsrvstat](https://api.mcsrvstat.us)**",
        "inline": true
      },
      {
        "name": "Database",
        "value": "**[Quick.db](https://quickdb.js.org)**",
        "inline": true
      },
      {
        "name": "Website",
        "value": `**[Here](${bconfig.websitelink})**`,
        "inline": true
      },
    ])
    embedInfo.setColor("BLUE");
    embedInfo.setThumbnail(client.user.displayAvatarURL({ format: "png", size: 128, dynamic: true }))
    embedInfo.setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
    embedInfo.setTimestamp();
    message.channel.send(embedInfo);
  }

}
