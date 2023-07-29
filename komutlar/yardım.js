const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()

.setColor('EMBED_RENGI') // Embed mesajı rengini ayarlarsınız. Örnek : Blue, Yellow, Red, Brown & #496f91, #495591, #549149, #917249
  .setTitle(`<BOT_ADI> Yardım Menüsü`)
  .setDescription(`
  <BOT_ADI> Yardım Menüsüne Hoşgeldiniz!
  __Genel Komutlar,__
  \`${prefix}ping - Botun ping değerlerini gösterir.
  \`${prefix}öp - Belirtilen kullanıcıyı öptüğünüze dair gif atar.
  \`${prefix}şarkı-öner - Kurucu tarafından sizlere önerilen şarkıları görürsünüz.
  \`${prefix}sor - Bota soru sorarsınız.
  \`${prefix}steam-oyun - Steam üzerinden oyun aratırsınız.
  \`${prefix}film-ara - IMDB üzerinden film ararsınız.
  \`${prefix}yaz - Belirttiğiniz kelimeyi bota yazdırırsınız.
  \`${prefix}istatistik & \`${prefix}i - Botun genel bilgilerini görürsünüz.

  __Kategoriler;__ 
**<a:mavikalpciklar:1134874690872152085>  » \`${prefix}eğlence |** Eğlence komutlarını gösterir.                             
  
**<a:mavikalpciklar:1134874690872152085>  » \`${prefix}kullanıcı |** Kullanıcı komutlarını gösterir.                                           
 
**<a:mavikalpciklar:1134874690872152085>  » \`${prefix}yetkili | Bot yetkili komutlarını gösterir.                                                

**<a:mavikalpciklar:1134874690872152085>  » \`${prefix}güvenlik | Güvenlik komutlarını gösterir.                                                                                                                                                                                 


Bağlantılar;
Botu [**Davet**](BOTUN_DAVET_LİNKİ) Et!\nDestek [**Sunucusuna**](DESTEK_SUNUCUSU_LİNKİ) Katıl!`)
  
 .setImage("") // Komutun altında gösterilecek banner'ın URL'sini soldaki yere yapıştırın.

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["help"]

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}