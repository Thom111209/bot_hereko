const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor('#00BDFF')
	.setTitle('📑・Liste des commandes.')
	.setURL('https://www.youtube.com/channel/UCK5GnuUgN4oObcVMSdO17nw')
	.setAuthor(config.Speudo, config.Image, 'https://www.youtube.com/channel/UCK5GnuUgN4oObcVMSdO17nw')
	.setThumbnail(config.Image)
	.addFields(
    { name: '📃-help', value: '(Affiche les fonctionalité du bot.)' },
    { name: '🎮-ping', value: '(Affiche le ping du bot.)' },
    { name: '🎫-infocpu', value: '(Affiche cpu du bot.)' },
    )
	
	.setTimestamp()
	.setFooter(config.Speudo, config.Image);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"help1"
}