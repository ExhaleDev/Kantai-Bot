const { prefix } = require("../../config");
const Embed = require("../../util/embed");
const Colour = require("../../util/color");
const Discord = require("discord.js");
const { get } = require("https");
module.exports = {
    name: "kiss",
    description: "Kiss picture picture very weird ass",
    aliases: ["kiss"],
    usage: `\`${prefix}kiss\``,
    execute(client, msg, args ) {
        if(!msg.channel.nsfw){
            return msg.channel.send("Use in nfsw in #anime-lewd-shit-for-some-pervert")
        }
        get("https://neko-love.xyz/api/v1/kiss", (res) => {
    const { statusCode } = res;
    if (statusCode != 200) {
        res.resume;
    }
    res.setEncoding("utf8");
    let rawData = '';
    res.on("data", (chunk) => {
        rawData += chunk;
    });
    res.on("end", () => {
        try {
            const parsedData = JSON.parse(rawData);
            msg.channel.send({
                embed: {
                    image: {
                        url: parsedData.url
                    },
                    fotter: {
                        text: `Very cool neko picture by longray`
                    }
                }
            })
        } catch (e) {
            console.error(e.message);
        }
    });
}).on("error", (err) => {
    console.error(err.message);
});
    }
}