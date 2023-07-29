const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('#496f91')
.setTitle('» Davet Linki')
.setTimestamp()
.setDescription('[**Davet Et**](https://discord.com/api/oauth2/authorize?client_id=1134565665265692802&permissions=8&scope=bot%20applications.commands)')
.setFooter('blurswashere', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setImage("https://cdn.discordapp.com/attachments/1134567013445017641/1134852964792668170/blurswasherebanner.jpg")
message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};
'!davet'
exports.help = {
  name: 'davet',
  description: 'davet komutlarını gösterir.',
  usage: 'davet'
};