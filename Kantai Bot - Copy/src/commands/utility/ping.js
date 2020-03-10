const { prefix } = require("../../config");
const Embed = require("../../util/embed");
const Colour = require("../../util/color");
const Discord = require("discord.js")
module.exports = {
    name: "ping",
    description: "View the delay of the bot(ms)",
    aliases: ["ping", "ms"],
    usage: `\`${prefix}ping\``,
    execute(client, msg, args ) {
        const embed = new Discord.RichEmbed()
        .setTitle("Bot Ping, Latency")
        .setDescription(`Ping: ${Math.ceil(client.ping)}ms`)
        .setColor(`RANDOM`)
        msg.channel.send(embed)
    }
}