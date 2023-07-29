const Discord = require("discord.js");

        // Sunucudaki tüm emojileri gösteren komuttur.


exports.run = async(client, msg, args) => {

        let animEmotes = [],
            staticEmotes = [];
  var guild = msg.guild

        guild.emojis.cache.forEach((e) => {
            e.animated ? animEmotes.push(`<a:${e.name}:${e.id}>`) : staticEmotes.push(`<:${e.name}:${e.id}>`);
        });
        staticEmotes = staticEmotes.length !== 0 ? `__**[${staticEmotes.length}] Normal Emojiler**__\n${staticEmotes.join('')}` : '\n**Normal Emoji Bulunmuyor**';
        animEmotes = animEmotes.length !== 0 ? `\n\n__**[${animEmotes.length}] Hareketli Emojiler**__\n${animEmotes.join('')}` : '\n**Hareketli Emoji Bulunmuyor**';
        try {     
  let botembed = new Discord.MessageEmbed()
            .setColor(`##496f91`)
            .setDescription(staticEmotes + animEmotes)
            .setAuthor(`${msg.guild.name} Sunucusu Emojileri`, msg.guild.iconURL())
    .setFooter('Bu komutu kullanan kullanıcı ' + msg.author.tag, msg.author.avatarURL())
            .setTimestamp()
        return msg.channel.send(botembed)
      } catch (err) {
        const embed = new Discord.MessageEmbed()
            .addField(`Sunucuda Bulunan Emojiler`, 'Üzgünüm ama sunucunuzda ya çok fazla emoji bulunuyor ya da hiç emoji bulunmuyor. Bunları gösteremiyorum. Discord buna izin vermiyor.')
            .setColor('RED')
          .setFooter('Bu komutu kullanan kullanıcı ' + msg.author.tag, msg.author.avatarURL())
            .setTimestamp()
        msg.channel.send(embed)
                              
    }
}
exports.conf = {
 aliases: ['emoji-liste'],
 permLevel: 0,
 kategori: 'Sunucu'
};

exports.help = {
 name: 'emojiler',
 description: 'Sunucudaki tüm emojileri gösterir.',
 usage: 'emojiler'
};
