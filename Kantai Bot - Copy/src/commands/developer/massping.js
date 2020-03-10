const Embed = require("../../util/embed");
const Colour = require("../../util/color");

module.exports = {
    name: "massping",
    description: "⚠ Only bot developer can use this ⚠",
    aliases: ["lag", "nigga"],
    cooldown: 0,
    execute(client, msg, args) {
        let user = msg.mentions.members.first();
        if(msg.author.id === '344035924222672897'){
            if(user){
                msg.channel.send(`${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}${user}`)
                msg.channel.send(`${user} suck loli ass, is a cunt and a retard and fucking niggas`)
            }
        }
    }
}