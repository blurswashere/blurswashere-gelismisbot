const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms')
 exports.run = (client, message, args) => {
   let oylama =  args.join(' ');
  if (!oylama) return message.reply('Oylama Sorusu Belirtmeden Nasıl Yapmamı Bekliyosun')
   
   // Sunucudaki adaleti sağlamak için güzel bir komuttur. Oylama sorusu yazıldığında bot örnek olarak şöyle mesaj atar : ''<Örnek: Yeni Bot Gelsinmi?> <tepki👍> <tepki👎>'' kullanıcılarda evet veya hayır şeklinde oy verir.
 
  const Ottoman = new Discord.MessageEmbed()
  .setDescription(`${oylama}`)
  .setFooter(`${message.author.tag} Tarafından`)
  return message.channel.send(Ottoman).then(function(message) {

         message.react('👍');

         message.react('👎');

  });

 };

     exports.conf = {
       enabled: true,
       guildOnly: false,
      aliases: ['oylama'],
  permLevel: 2
};

exports.help = {
  name: 'oylama'
};