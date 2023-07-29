const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()

.setColor('RANDOM')
  .setTitle('Güvenlik')
  .setDescription(`<a:arrow:1003715640915394620> **| ?ban |** Sunucuda belirlediğiniz kişiyi banlar. 
  <a:arrow:1003715640915394620> **| ?kick |** Sunucuda belirlediğiniz kişileri kickler. 
  <a:arrow:1003715640915394620> **| ?mute |** Sunucuda belirlediğiniz kişileri susturur.
  <a:arrow:1003715640915394620> **| ?link-engel |** Sunucuda atılan linkleri siler.
  <a:arrow:1003715640915394620>  **| ?reklam-engelle |** Sunucuda atılan reklamları siler.
  <a:arrow:1003715640915394620>  **| ?küfür-engelle |** Küfür eden kişinin mesajını siler, uyarı verir.

Bağlantılar 
**» Davet Linki** [**Botu Davet Et**](https://discord.com/oauth2/authorize?client_id=1005733481239810128&scope=bot&permissions=27648860222)\n**» Destek Sunucusu** **[Destek Sunucusu](https://discord.gg/dqCC4GK3xx)**
`)

    .setImage("https://cdn.discordapp.com/attachments/1005738748610355200/1006666641112838266/standard.gif")
 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["guard"]

}

exports.help = {

  name: 'güvenlik',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}