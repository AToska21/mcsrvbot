const Discord = require('discord.js');
const predb = require('quick.db')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const bconfig = require("../../config.json");

module.exports = {
    name: 'status-bedrock',
    async execute(message, _args, client) {

        let mcIP = predb.get(`guild_${message.guild.id}_ip`) || "Not Setup"
        let mcPort = predb.get(`guild_${message.guild.id}_port`) || "Not Setup"

        // bot-perm
        if (!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send('Please Give Me **EMBED_LINKS** permission in this channel .')

        let embedstatuserr = new Discord.MessageEmbed()
        embedstatuserr.setDescription(`
        • Maybe, IP and PORT Has Been Not Setuped For This Server .

        • If you thought that bot is giving wrong reply then use **${bconfig.defaultprefix}reset** for reset and then **${bconfig.defaultprefix}setup** command for setup your server ip and port again`)
        embedstatuserr.setColor('RED')
        embedstatuserr.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
        embedstatuserr.setTimestamp()

        if (!message.guild.id === predb.has(`guild_${message.guild.id}_ip`)) return message.channel.send(embedstatuserr)
        if (!message.guild.id === predb.has(`guild_${message.guild.id}_port`)) return message.channel.send(embedstatuserr)

        let embederr = new Discord.MessageEmbed()
        embederr.setDescription(`
        • Your Server Is Not Reachable , Here Are Possible Reasons -

        • Your IP/PORT Is Wrong .

        • Your Minecraft Server Is Offline .

        • Your Minecraft Server Query Is False .
        `)
        embederr.setColor('RED')
        embederr.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
        embederr.setTimestamp()

        let serverURL = `https://api.mcsrvstat.us/bedrock/2/${mcIP}:${mcPort}`;

        try {

            await fetch(serverURL)
                .then(response => response.json())
                .then(data => {

                    let status = "Offline"
                    let color = bconfig.botoldcolor
                    let people = "Currently Players are Hidden For This Server"
                    let attachment = new Discord.MessageAttachment(client.user.displayAvatarURL({ format: "png", size: 64, dynamic: true }), "icon.png")
                    let motd = "A Minecraft Server"

                    if (data.online === true) {

                        status = "Online"
                        color = bconfig.botnewcolor

                        if (data.icon) {
                            attachment = new Discord.MessageAttachment(Buffer.from(data.icon.substr('data:image\/png;base64,'.length), 'base64'), "icon.png")
                        }

                        if (data.motd.clean) {
                            motd = data.motd.clean
                        }

                        if (data.players.list) {

                            people = data.players.list.join(' , ')

                        }
                        else if (data.players.online === 0) {

                            people = "Currently No One Is Playing In Server"
                        }
                    }

                    let embedStatus = new Discord.MessageEmbed();
                    embedStatus.setTitle(client.user.username)
                    embedStatus.setURL(bconfig.websitelink)
                    embedStatus.setDescription("Your Minecraft Server Panel Here :-")
                    embedStatus.addFields([
                        {
                            "name": "Ip",
                            "value": "```" + `${mcIP}` + "```",
                            "inline": true
                        },
                        {
                            "name": "Port",
                            "value": "```" + `${mcPort}` + "```",
                            "inline": true
                        },
                        {
                            "name": "Status",
                            "value": "```" + status + "```",
                            "inline": true
                        },
                        {
                            "name": "Motd",
                            "value": "```" + motd + "```"
                        },
                        {
                            "name": "Player Count",
                            "value": "```" + data.players.online + "/" + data.players.max + "```",
                            "inline": true
                        },
                        {
                            "name": "Version",
                            "value": "```" + data.version + "```",
                            "inline": true
                        },
                        {
                            "name": "Players",
                            "value": "```" + people + "```"
                        }
                    ])
                    embedStatus.setColor(color);
                    embedStatus.attachFiles(attachment)
                    embedStatus.setThumbnail("attachment://icon.png")
                    embedStatus.setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
                    embedStatus.setTimestamp();
                    message.channel.send(embedStatus);
                })

        } catch (err) {
            return message.channel.send(embederr);
        }
    }
}