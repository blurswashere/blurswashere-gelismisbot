const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()

.setColor('#496f91')
  .setTitle('Bağlantılarım,')
  .setDescription(`<:sasrma:1003715308164501587> [**Botu Davet Et**](https://discord.com/api/oauth2/authorize?client_id=1134565665265692802&permissions=8&scope=bot%20applications.commands)
  <a:renkl:1003715639124443146> [**Destek Sunucusu**](https://discord.gg/xJgvwTv9J6)
`)

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["link"]

}

exports.help = {

  name: 'linkler',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}