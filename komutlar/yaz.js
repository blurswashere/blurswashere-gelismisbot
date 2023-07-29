const Discord = require('discord.js');
// Belirttiğiniz Metni Botun Yazmasına Yarayan Komuttur.
exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir metin yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  aliases: ['söyle'],
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
