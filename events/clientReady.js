const Discord = require("discord.js");
const client = global.client;

exports.execute = async () => {
    client.user.setPresence({ activity: { name: "Stark Temiz Altyapı"}, status: "online" });
};

exports.conf = {
  event: "ready"
};