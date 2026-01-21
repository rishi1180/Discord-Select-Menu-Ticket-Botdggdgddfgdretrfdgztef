const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Gives you information on how fast the Bot can respond to you",
  run: async (client, interaction, args, guildData, player, prefix) => {
    try {
      interaction.reply({
        embeds: [new MessageEmbed()
          .setColor("#2f3136")
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setTitle(`🏓 Pong!`)
          .setDescription(`Bot Latency: \`${Math.floor(client.ws.ping)}ms\``)
        ],
        ephemeral: true
      });
    } catch (e) {
      console.log(String(e.stack).grey);
    }
  }
}
