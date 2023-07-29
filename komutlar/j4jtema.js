const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');
  // Komut kullanıldığında kullanıcılara özelden hazır sunucu şablonu gönderir.
exports.run = async (client, message, args) => {
const datas = await data.fetch(`${message.author.id}.zaman.j4j`);
if(Date.now() < datas) return message.channel.send(new Discord.MessageEmbed().setColor('#496f91').setDescription(`${message.author} **__6__ saat de bir kullanabilirsiniz!**`)).then(m => m.delete({timeout: 6000}));
data.set(`${message.author.id}.zaman.j4j`, Date.now()+ms('6h'));
message.channel.send(new Discord.MessageEmbed()
.setDescription(`${message.author} **J4J Temanızı Özelden Gönderdim.**`));
message.author.send(`> **1 adet __Join 4 Join__ sunucu kurmak için tema geldi.**

> Güle güle kullanın 😇

https://discord.new/p5cWAmc6G3Gr\nHediye olarak 1 adet public sunucu teması geldi : https://discord.new/VfncraFRzE52`).catch(error => message.channel.send(new Discord.MessageEmbed().setDescription("Mesajı gönderemedim. Muhtemelen DM'n kapalı.")));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'j4j-tema'
};