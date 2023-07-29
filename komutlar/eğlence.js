const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()

.setColor('EMBED_RENGI') // Embed mesajı rengini ayarlarsınız. Örnek : Blue, Yellow, Red, Brown & #496f91, #495591, #549149, #917249
  .setTitle('<BOT_ADI> Eğlence Komutları')
  .setDescription(`
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}kasa-aç |** CS:GO kasaları açar. 
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}kaçcm |** Malafatınızın uzunluğunu söyler.  
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}espri |** Rastgele espri atar.    
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}lafat |** Rastgele kapak laflar söyler.  
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}zarat |** Zar atarsınız.   
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}aşkölçer |** Belirlediğiniz kişiye karşı aşkınızı gösterir.  
  <a:mavikalpciklar:1134874690872152085> **| \`${prefix}tkm |** Taş kağıt makas oynarsın.
`)
  
.setImage("") // Gözükmesini istediğiniz resmin URL'sini koyabilirsiniz. 
 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["fun", "eğ"]

}

exports.help = {

  name: 'eğlence',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}