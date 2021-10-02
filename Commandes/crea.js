const Discord = require('discord.js');
const config = require("../config.json");
var prefix = config.prefix;

module.exports.run = async(client, message, args) => {
message.delete()
const creaEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setColor("#00BDFF")
    .setDescription("Voici la date de création de ton compte discord !")
    .addField("⬇️⬇️", message.author.createdAt);

message.channel.send(creaEmbed);
}

module.exports.help = {
    name:"crea"
}