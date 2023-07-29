const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client();

exports.run = (client, message) => {


   message.channel.send('**Hemen ölçüyorum bekle...**').then(message => {
   var espriler = [' **Ulan ne sapık adamsın bir de iman edip namaz kılacaksın ülkemizin haline bak !**  ' ,'**Senin Malafatın  11CM ** :eggplant:','**Senin Malafatın  12CM ** :eggplant:' ,'**Senin Malafatın 32CM  ** :eggplant:' ,'**Senin Malafatın  35CM ** :eggplant:' ,'**Senin Malafatın  8CM  ** :eggplant:' ,'**Senin Malafatın  65CM  ** :eggplant:' ,'**Senin Malafatın 5CM  ** :eggplant:' ,'**Senin Malafatın 31CM  ** :eggplant:' ,'**Senin Malafatın  14CM ** :eggplant:' ,'**Senin Malafatın  1CM ** :eggplant:','**Senin Malafatın  31CM ** :eggplant:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç','kaccm','kac-cm'],
  permLevel: 0
};

exports.help = {
  name: 'kaç-cm',
  description: 'Malafatını Söyler.',
  usage: '!kaç-cm'
};