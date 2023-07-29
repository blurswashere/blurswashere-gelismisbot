const Discord = require("discord.js");
// Belirtilen Mesajı Embed Şeklinde Yazmanıza Yarayan Komuttur.
exports.run = async function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      ":warning: Bu Komutu kullanmanız için `Mesajları Yönet` yetkisine sahip olmalısınız."
    );
  let ottoman = args.slice(0).join(" ");
  if (ottoman.length < 1) {
    return message.channel.send(`Yazmamı istediğin kelime/cümleyi gir!`);
  } else {
    message.delete(3);
    const ottomancode = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`**${ottoman}**`)
      .setFooter("", client.user.avatarURL);
    return message.channel.sendEmbed(ottomancode);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["embedyaz"],
  permLevel: 0
};

exports.help = {
  name: "embed-yaz",
  description: "yaz.",
  usage: "yaz"
};