const Discord = require('discord.js');
const bconfig = require('../../config.json')

module.exports = {
    name: 'invite',
    execute(message, _args, client) {

        // bot-perm
        if (!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send('Please Give Me **EMBED_LINKS** permission in this channel .')

        let invlink = `[You cannot invite this bot. You can selfhost it though!](https://github.com/AToska21/mcsrvbot)`

        let embedInvite = new Discord.MessageEmbed();
        embedInvite.setTitle(client.user.username)
        embedInvite.setURL(bconfig.websitelink)
        embedInvite.setDescription("Invite Link Panel Here :-")
        embedInvite.addField("Invite", invlink)
        embedInvite.setColor("BLUE");
        embedInvite.setThumbnail(client.user.displayAvatarURL({ format: "png", size: 128, dynamic: true }))
        embedInvite.setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
        embedInvite.setTimestamp();
        message.channel.send(embedInvite);

    }
}
