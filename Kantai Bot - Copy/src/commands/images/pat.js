const { prefix } = require("../../config");
const Embed = require("../../util/embed");
const Colour = require("../../util/color");
const Discord = require("discord.js");
const { get } = require("https");
module.exports = {
    name: "pat",
    description: "Patting cat",
    aliases: ["patting"],
    usage: `\`${prefix}pat\``,
    execute(client, msg, args ) {
        get("https://neko-love.xyz/api/v1/pat", (res) => {
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