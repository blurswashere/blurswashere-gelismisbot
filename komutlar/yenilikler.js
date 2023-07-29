const Discord = require('discord.js');

// Bota Kod Eklediğiniz Zaman Alttaki Kısma Yazabilirsiniz. Bottaki yenilikleri gösteren komuttur.

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Yenilikler')
.setTimestamp()
.addField('» Yenilik Bulunmuyor.', [
'Bota Eklenen Herhangi Bir Yenilik Bulunmuyor.'])

message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};
'!yenilikler'
exports.help = {
  name: 'yenilikler',
  description: 'yenilikleri gösterir.',
  usage: 'yenilikler'
};