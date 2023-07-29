const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
 // Komutun yazıldığı sunucunun resmini gösterir.
exports.run = (client, message, params) => {
  
  const codwa = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`${message.guild.name} Adlı Sunucunun Resmi`)
  .setImage(message.guild.iconURL())
  message.channel.send(codwa)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
    aliases: ["sunucuresmi"],
}


exports.help = {
  name: 'sunucu-resmi',
  description: 'Sunucuresmi.',
  usage: 'sunucuresmi',
};