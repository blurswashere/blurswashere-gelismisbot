const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()

.setColor('EMBED_RENGI') // Embed mesajı rengini ayarlarsınız. Örnek : Blue, Yellow, Red, Brown & #496f91, #495591, #549149, #917249
  .setTitle('<BOT_ADI> Kullanıcı Komutları')
  .setDescription(`
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}istatistik |** Bot bilgisini gösterir.
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}avatar |** Avatarınızı gösterir.
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}afk |** AFK olunca seni etiketleyen kişiye sebebini yazar. 
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}sunucubilgi |** Sunucu bilgisini söyler. 
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}sunucuresmi |** Sunucu resmini atar. 
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}yaz |** Yazmak istediğiniz şeyi bota yazdırır.
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}rozetler |** Rozet gösterir.
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}rol-bilgi |** Rol bilgisini gösterir.
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}profil |** Profilinizi gösterir.
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}emojiler | ** Sunucudaki emojileri gösterir.`)

    .setImage("") // Gözükmesini istediğiniz resmin URL'sini koyabilirsiniz. 
 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["member"]

}

exports.help = {

  name: 'kullanıcı',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}