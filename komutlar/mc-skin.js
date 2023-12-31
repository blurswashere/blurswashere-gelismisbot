const Discord = require(`discord.js`);
exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(" ");
  let member = message.mentions.members.first();
  let body = "https://mc-heads.net/body/" + mesaj;
  let user = message.mentions.users.first() || message.author;
// Minecraft oyuncusunun ismini komutu yazarken girdiğinizde o oyuncunun skin'ini & karakterini gösterir.
  let userinfo = {};
  userinfo.avatar = user.avatarURL();
  if (mesaj.length < 1)
    return message.channel.send(`Bir oyuncu adı belirtmelisin.`);
  if (mesaj == member) {
    return message.channel.send(
      `Kullanıcı değil, bir oyuncu adı belirtmelisin`
    );
  } else {
    const mcbody = new Discord.MessageEmbed()
      .setColor("#496f91")
      .setTitle("Oyuncu: " + mesaj)
      .setImage(body)
      .setFooter(
        `${message.author.username} tarafından istendi.`,
        userinfo.avatar
      );
    message.channel.send(mcbody);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "mc-skin",
  description: "Belirtilen oyuncunun kostümünü gösterir.",
  usage: "mcskin <oyuncu>"
};
