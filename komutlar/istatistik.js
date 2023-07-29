const Discord = require("discord.js");
const db = require("quick.db");
const moment = require('moment')
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const zaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const Ottoman = new Discord.MessageEmbed()
   
                   // İstatistik komutu botun genel bilgilerini gösteren komuttur.
    
  .setColor("#00fff7")   // Buraya kendi ıd'nizi yazabilirsiniz.
  .addField("**Bot Sahibi**", "**<@1126435573922545735>** ", )
  .addField("**Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("**Kullanıcılar**",bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField('**Kanallar**' , bot.channels.cache.size,true)
  .addField('**Ram Kullanım Oranı**', ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}  `, true)
  .addField('**Ping**', bot.ws.ping + 'ms',true)
  .addField('**Çalışma Süresi**', zaman,true) 
  .setImage("https://cdn.discordapp.com/attachments/1134567013445017641/1134852964792668170/blurswasherebanner.jpg")
  .addField("» Bağlantılar", ` [**Davet Et**](<BOTUN_DAVET_LİNKİ>)` + "** | **" + `[Destek Sunucusu](https://discord.gg/xJgvwTv9J6)`  + "** | **" + `[Oy Ver](TOPGG_SİTE_LİNKİ)`  + "** | **" + `[Web Sitesi](WEBSİTE_LİNKİ)  `, false)
                                                                              // (bedava altyapılar için üstteki yere katılabilirsiniz hihihi)                                                   
  return message.channel.send(Ottoman);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "istatistik"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot istatistiği",
  usage: "istatistik"
};