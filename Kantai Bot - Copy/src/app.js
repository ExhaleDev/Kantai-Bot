const { Client } = require("discord.js-trio");
const config = require("./config");
const client = new Client(config);



client.login(config.auth["bot-token"]);

client.on('ready', ()=> {
    client.user.setActivity('with Ben', { type: "PLAYING" });
})