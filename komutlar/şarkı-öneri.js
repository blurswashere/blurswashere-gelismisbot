const Discord = require('discord.js');

const ayarlar = require("../ayarlar.json");
// Komut kullanıldığında altta yazan metni yazar. 
exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`Spotify`)
    .setTitle(`Populer Şarkılar`)
    .setColor("#00ff00")
  .addField('Sen Varsın DiyeYüzyüzeyken Konuşuruz', [
    'Gitmek için [TIKLA](https://www.youtube.com/watch?v=iTLUb5UmeJo)' // Buralara istediğiniz şarkıları ekleyebilirsiniz.
  ])
  .addField('INDUSTRY BABY (feat. Jack Harlow)Lil Nas X, Jack Harlow', [
    'Gitmek için [TIKLA](https://www.youtube.com/watch?v=UTHLKHL_whs)'
  ])
  .addField('Sefo - Bilmem mi?', [
    'Gitmek için [TIKLA](https://www.youtube.com/watch?v=eFutYdmi2gc)'
  ])
  .addField('Beggin Måneskin.', [
    'Gitmek için [TIKLA](https://www.youtube.com/watch?v=id6l1nMqpvc)'
  ])
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "şarkıöneri",
  description: "Yardım Menüsü",
  usage: "yardım"
};