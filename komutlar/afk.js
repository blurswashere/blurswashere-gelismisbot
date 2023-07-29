const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = function(client, message, args) {

// Diyelimki Bir İşiniz Çıktı Ve Kullanıcıların Bundan Haberdar Olmasını İstiyorsunuz. <prefix>afk <sebep> yazdıktan sonra afk moduna geçersiniz, Birisi sizi etiketlediğinizdede yazdığınız sebebi kullanıcılara söyler.

  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor("#00ff00")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`AFK Olmak için bir sebep belirtmelisiniz.\n\n Örnek Kullanım : ${prefix}afk <sebep>`)
  if(!REASON) return message.channel.send(embed)
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const afk = new Discord.MessageEmbed()
  .setColor("#00ff00")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`<:idle:1134845097087869020> Başarıyla, \`${REASON}\` Sebebiyle AFK moduna girdiniz.`)
  message.channel.send(afk)
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'afk',
  description: 'afk komutu',
  usage: 'afk'
};