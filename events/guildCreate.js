const Discord = require('discord.js')
const bconfig = require('../config.json')

module.exports = async (client, guild) => {

    let found = 0;

    guild.channels.cache.map((channel) => {

        if (found === 0) {

            if (channel.type === "text") {

                if (channel.permissionsFor(client.user).has("VIEW_CHANNEL") === true) {

                    if (channel.permissionsFor(client.user).has("SEND_MESSAGES") === true) {

                        if (channel.permissionsFor(client.user).has("EMBED_LINKS") === true) {

                            let embedGC = new Discord.MessageEmbed();
                            embedGC.setTitle(client.user.username)
                            embedGC.setURL(bconfig.websitelink)
                            embedGC.setDescription(`
        • Thanks for adding me to your server , To Get List Of All Commands Run **${bconfig.defaultprefix}help** Command .
 
        • For Setting Up The Bot Run **${bconfig.defaultprefix}setup** Command , This Command Setups Your Server Ip and Port , Correct Way Of Using This Command Is **${bconfig.defaultprefix}setup ip port** .
 
        • After Setup , If Your Server Is Java Minecraft Server Then Run **${bconfig.defaultprefix}status-java** Command To Get Server Status .

        • After Setup , If Your Server Is Bedrock Minecraft Server Then Run **${bconfig.defaultprefix}status-bedrock** Command To Get Server Status .

        • For Reset The Ip and Port Run **${bconfig.defaultprefix}reset** Command and Run **${bconfig.defaultprefix}setup** Command Again For Setup The Bot.
 
        • If You Need Any Help With ${client.user.username} Bot Feel Free To Join ${client.user.username} **[Support Server](${bconfig.discordinvitelink})** To Get Your Answers .
        
        `)
                            embedGC.setColor("BLUE");
                            embedGC.setFooter(`${client.user.tag} By LegendX#8483`, client.user.displayAvatarURL());
                            embedGC.setTimestamp();
                            channel.send(embedGC)

                            found = 1;
                        }
                    }
                }
            }
        }
    });

}