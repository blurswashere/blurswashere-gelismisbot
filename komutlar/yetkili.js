const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  // Yetkili komutlarını gösteren mesaj.

  const embed = new Discord.MessageEmbed()

.setColor('EMBED_RENGI') // Embed mesajı rengini ayarlarsınız. Örnek : Blue, Yellow, Red, Brown & #496f91, #495591, #549149, #917249
  .setTitle('<BOT_ADI> Yetkili Komutları')
  .setDescription(`
<a:mavikalpciklar:1134874690872152085> **| \`${prefix}sil |** Belirlediğiniz kadar mesaj siler.
<a:mavikalpciklar:1134874690872152085> **| \`${prefix}link-engel |** Link engeller. 
<a:mavikalpciklar:1134874690872152085> **| \`${prefix}ban |** Sunucudan belirlediğiniz kişiyi banlar.
<a:mavikalpciklar:1134874690872152085> **| \`${prefix}kick |** Sunucudan belirlediğiniz kişiyi atar.  
<a:mavikalpciklar:1134874690872152085> **| \`${prefix}mute |** Belirlediğiniz kişiyi susturur .
<a:mavikalpciklar:1134874690872152085> **| \`${prefix}nuke |** Kanalı siler, yeniden oluşturur.
<a:mavikalpciklar:1134874690872152085> **| \`${prefix}oylama |** Sunucuda oylama başlatırsınız.
<a:mavikalpciklar:1134874690872152085> **| \`${prefix}üyedurum |** Sunucuda kaç kişi olduğunu gösterir.
<a:mavikalpciklar:1134874690872152085> **| \`${prefix}yavaşmod | \`${prefix}slowmode |** Kanala belirlediğiniz saniye kadar yavaş mod getirir.
<a:mavikalpciklar:1134874690872152085> **| \`${prefix}sohbet-aç |** Sohbet açar.
<a:mavikalpciklar:1134874690872152085> **| \`${prefix}sohbet-kapat |** Sohbet kapatır.
<a:mavikalpciklar:1134874690872152085> **| \`${prefix}yetkilerim |** Yetkinizi gösterir.`)
.setImage("") // İstediğiniz banner'ın URL'sini yapıştırabilirsiniz.
 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["moderator"]

}

exports.help = {

  name: 'yetkili',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}