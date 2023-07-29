const Discord = require("discord.js");
// Komutun yazıldığı kanalı mesaj yazılamaz hale getirir. Buda üyelerin komutun yazıldığı kanala mesaj atamamasıdır.
exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: true
  });

  const Embed = new Discord.MessageEmbed()
      .setColor("#00ff00")
  .setDescription("**Başarıyla Sohbet Kanalı Açıldı!**");
  message.channel.send(Embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "sohbet-aç",
  description: "kapat ac",
  usage: "prefix + sohbet-aç"
};
