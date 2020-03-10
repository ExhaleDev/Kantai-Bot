const { prefix } = require("../../config");
const Embed = require("../../util/embed");
const Colour = require("../../util/color");
const Discord = require("discord.js")
module.exports = {
    name: "avatar",
    description: "Get people pfp",
    cooldown: 5,
    aliases: ["pfp"],
    usage: `\`${prefix}pfp <User>\``,
    execute(client, msg, args) {
        let user = msg.mentions.members.first();
        if(user){
            const embed = new Discord.RichEmbed()
            .setAuthor(user.user.tag)
            .setImage(user.user.avatarURL)
            .setColor(0x33B5FF)
            msg.channel.send(embed)
        }
    }}