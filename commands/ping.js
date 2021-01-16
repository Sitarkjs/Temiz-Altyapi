const Discord = require("discord.js");

exports.execute = async (client, message, args) => {
    message.channel.send(`Pong!`)
};

exports.conf = {
  command: "ping",
  description: "",
  aliases: []
}