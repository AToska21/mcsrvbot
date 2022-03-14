const Discord = require('discord.js');
const bconfig = require('../../config.json')

module.exports = {
    name: 'vote',
    execute(message, _args, client) {

        // bot-perm
        if (!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send('Please Give Me **EMBED_LINKS** permission in this channel .')

        let embedVote = new Discord.MessageEmbed();
        embedVote.setTitle(client.user.username)
        embedVote.setURL(bconfig.websitelink)
        embedVote.setDescription("ERROR :-")
        embedVote.addFields([
            {
                "name": "Voting is not supported due to this being a private bot.",
                "value": "[You can selfhost it though!](https://github.com/AToska21/mcsrvbot)"
            }
        ])
        embedVote.setColor("BLUE");
        embedVote.setThumbnail(client.user.displayAvatarURL({ format: "png", size: 128, dynamic: true }))
        embedVote.setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
        embedVote.setTimestamp();
        message.channel.send(embedVote);

    }
}
