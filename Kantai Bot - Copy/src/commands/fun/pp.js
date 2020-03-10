const Embed = require("../../util/embed");
const Colour = require("../../util/color");
const { prefix } = require("../../config");
const Discord = require("discord.js");
const responses = ["Hela small", "Hela big", "Normal", "Cancer", "Mega mega big", "Like ant", "like margil", "like loli", "like ben", "so gay", "so BIG YOU KNOW I LIKE IT",
"So weird", "AWDA(*W&DSDh", "Bad", "So lewd", "SUCC", "bigger than Ben", "smaller than ben", "the best in universe"];

function getResponse() {return responses[Math.floor(Math.random()*responses.length)]}
module.exports = {
    name: "pp",
    description: "How big is your pp??",
    aliases: ["pp", "size"],
    usage: `\n${prefix}pp\n`,
    execute(client, msg, args){
        const embed = new Discord.RichEmbed()
        .setTitle(`Your pp is ${getResponse()}`)
        .setColor(0xFF33EC)
        msg.channel.send(embed)
    }   
}