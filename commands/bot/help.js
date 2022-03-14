const Discord = require('discord.js');
const paginationEmbed = require('discord.js-pagination');
const bconfig = require('../../config.json')

module.exports = {
   name: 'help',
   execute(message, _args, client) {

      // bot-perm
      if (!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send('Please Give Me **EMBED_LINKS** permission in this channel .')

      let botcommands = [
         "help - Shows This Panel", "info - Gives My Info", "invite - Gives My Invite Link", "prefix - Shows Default and Custom Prefix", "update - Shows Bot Latest Update", "report - Report Your Issue To My Dev", "stats - Gives My Stats", "vote - Gives My Voting Sites Link", "setup-prefix - Sets Custom Prefix", "reset-prefix - Reset Custom Prefix"
      ]
      let minecraftcommands = [
         "setup - Sets Your IP and PORT", "reset - Resets Your IP and PORT", "status-java - Shows Your Java Server Status", "status-bedrock - Shows Your Bedrock Server Status", "ip - Shows Your IP and PORT"
      ]

      let embed1 = new Discord.MessageEmbed();
      embed1.setTitle(client.user.username)
      embed1.setURL(bconfig.websitelink)
      embed1.setDescription("Helping Panel Here :-")
      embed1.addFields([
         {
            "name": "Commands",
            "value": botcommands
         }
      ])
      embed1.addField("Help & Updates", `• For Any Help & Updates [Join My Discord Server](${bconfig.discordinvitelink})`)
      embed1.setColor("BLUE");
      embed1.setThumbnail(client.user.displayAvatarURL({ format: "png", size: 128, dynamic: true }))
      embed1.setTimestamp();


      let embed2 = new Discord.MessageEmbed();
      embed2.setTitle(client.user.username)
      embed2.setURL(bconfig.websitelink)
      embed2.setDescription("Helping Panel Here :-")
      embed2.addFields([
         {
            "name": "Commands",
            "value": minecraftcommands
         }
      ])
      embed2.addField("Help & Updates", `• For Any Help & Updates [Join My Discord Server](${bconfig.discordinvitelink})`)
      embed2.setColor("BLUE");
      embed2.setThumbnail(client.user.displayAvatarURL({ format: "png", size: 128, dynamic: true }))
      embed2.setTimestamp();

      let pages = [
         embed1,
         embed2
     ]

     let emojiList = ['⏪', '⏩']

     let timeout = 15000

     paginationEmbed(message, pages, emojiList, timeout);
   }
}