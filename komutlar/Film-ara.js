const Discord = require("discord.js");
const film = require("film-apisi");

exports.run = async (client, message, args) => {
   let user = message.mentions.users.first() || message.author;

  let userinfo = {};
  userinfo.avatar = user.avatarURL();
  if (!args.join(" "))                      // Kullanıcıların sunucu içerisinde film arayabilmesini sağlar
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `<@${message.author.id}> | Aramam İçin Bir Film İsmi Girmelisiniz.`
        )
    );
  let film = await film.ara(args.join(" "));
  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle(film.ismi)
    .setThumbnail(film.poster)
    .addField("Yıldızlar:", film.yıldızlar)
    .addField("Tür:", film.tür)
    .addField("Puan:", film.puan)
    .addField("Yıl:", film.yıl)
    .addField("Süre:", film.süre)
    .addField("Sezon:", film.sezon)
    .addField("Bölüm:", film.bölüm)
    .addField("Benzerler:", film.benzerler)
  .setFooter(
      `${message.author.username} tarafından istendi.`,
      userinfo.avatar
    )
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["film-ara"],
  permLevel: 0
};

exports.help = {
  name: "film-ara",
  description: "imdb den arama yapmanızı sağlar",
  usage: "film-ara"
};
