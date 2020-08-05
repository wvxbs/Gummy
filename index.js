const Discord = require("discord.js");
const { Token } = require("./token");

const Client = new Discord.Client()

Client.once("ready", () => {
    console.log("Hello World");
})

Client.login(Token)