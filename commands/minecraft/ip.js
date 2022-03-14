const Discord = require('discord.js');
const predb = require('quick.db')
const bconfig = require('../../config.json')

module.exports = {
    name: 'ip',
    execute(message, _args, client) {

        let mcIP = predb.get(`guild_${message.guild.id}_ip`) || "Not Setup"
        let mcPort = predb.get(`guild_${message.guild.id}_port`) || "Not Setup"

        // bot-perm
        if (!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send('Please Give Me **EMBED_LINKS** permission in this channel .')

        let embedIP = new Discord.MessageEmbed();
        embedIP.setTitle(client.user.username)
        embedIP.setURL(bconfig.websitelink)
        embedIP.setDescription("Your Minecraft Server IP & PORT Panel Here :-")
        embedIP.addFields([
            {
                "name": "IP",
                "value": "```" + `${mcIP}` + "```"
            },
            {
                "name": "PORT",
                "value": "```" + `${mcPort}` + "```"
            }
        ])
        embedIP.setColor("BLUE");
        embedIP.setThumbnail(client.user.displayAvatarURL({ format: "png", size: 128, dynamic: true }))
        embedIP.setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
        embedIP.setTimestamp();
        message.channel.send(embedIP);
    }
}