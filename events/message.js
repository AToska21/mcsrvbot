const predb = require('quick.db')
const bconfig = require("../config.json");

module.exports = async (client, message) => {

   let prefix = predb.get(`guild_${message.guild.id}_prefix`) || bconfig.defaultprefix

   //Bot Args
   const args = message.content.slice(prefix.length).trim().split(/ +/);

   //Bot Answer Setup
   if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === "dm") return;

   const command =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.find(
         (cmd) => cmd.aliases && cmd.aliases.includes(args[0].toLowerCase())
      );

   if (!command) return;

   command.execute(message, args, client);

};