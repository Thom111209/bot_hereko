const Discord = require('discord.js')
module.exports.run = async(client, message, args) => {
    message.delete()
    if(message.author.bot) return

    let msg = await message.channel.send("Nous sommes entrain de faire le test...")
    msg.delete();

    let PING = new Discord.MessageEmbed()
    .setColor('#00BDFF')
    .setThumbnail('')
    .setTitle("PONG !")
    .setDescription("Voici les résultats de votre demande :")
    .addField("Ma latence est de :", Math.floor(msg.createdAt - message.createdAt)+ " " + "ms") 
    .setTimestamp()
    message.channel.send(PING)
}

module.exports.help = {
    name: 'ping'
}