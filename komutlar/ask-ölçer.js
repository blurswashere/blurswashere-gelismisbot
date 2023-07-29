exports.run = async (client, msg, args) => {
    let ask=[
      "<:kirikkalp:1134846990275068083> Aşk ölçer %3 Gösteriyor. Naptı la bu jojuk sana",
      "<:kirikkalp:1134846990275068083> Aşk ölçer %6 Gösteriyor. Hiçmi sevmedin",
      "<:kirikkalp:1134846990275068083> Aşk ölçer %9 Gösteriyor. Yazık la valla",
      "<:kirikkalp:1134846990275068083> Aşk ölçer %12 Gösteriyor. Ah lan üzüldüm",
      "<:kirikkalp:1134846990275068083> Aşk ölçer %18 Gösteriyor.",
      "<:kirikkalp:1134846990275068083> Aşk ölçer %20 Gösteriyor.",
      "<:kirikkalp:1134846990275068083> Aşk ölçer %23 Gösteriyor.",
      "<:kirikkalp:1134846990275068083> Aşk ölçer %26 Gösteriyor.",
      "<:kirikkalp:1134846990275068083> Aşk ölçer %29 Gösteriyor.",
      "<:kirikkalp:1134846990275068083> Aşk ölçer %30 Gösteriyor.",
      "<:kirikkalp:1134846990275068083> Aşk ölçer %40 Gösteriyor.",
      "<a:birlesenkalp:1134846988853198848> Aşk ölçer %50 Gösteriyor.",
      "<a:birlesenkalp:1134846988853198848> Aşk ölçer %60 Gösteriyor.",
      "<a:birlesenkalp:1134846988853198848> Aşk ölçer %70 Gösteriyor.",
      "<a:birlesenkalp:1134846988853198848> Aşk ölçer %73 Gösteriyor.",
      "<a:birlesenkalp:1134846988853198848> Aşk ölçer %76 Gösteriyor.",
      "<a:birlesenkalp:1134846988853198848> Aşk ölçer %79 Gösteriyor.",
      "<a:birlesenkalp:1134846988853198848> Aşk ölçer %82 Gösteriyor.",
      "<:kalpp:1134846807051079741> Aşk ölçer %85 Gösteriyor.",
      "<:kalpp:1134846807051079741> Aşk ölçer %88 Gösteriyor.",
      "<:kalpp:1134846807051079741> Aşk ölçer %90 Gösteriyor.",
      "<:kalpp:1134846807051079741> Aşk ölçer %91 Gösteriyor.",
      "<:kalpp:1134846807051079741> Aşk ölçer %92 Gösteriyor.",
      "<:kalpp:1134846807051079741> Aşk ölçer %93 Gösteriyor.",
      "<:kalpp:1134846807051079741> Aşk ölçer %94 Gösteriyor.",
      "<:kalpp:1134846807051079741> Aşk ölçer %95 Gösteriyor.",
      "<:kalpp:1134846807051079741> Aşk ölçer %96 Gösteriyor.",  // Devamı siz ekleyin :D
      "<:kalpp:1134846807051079741> Aşk ölçer %97 Gösteriyor. Baklan şu kumyulaya",
      "<:kalpp:1134846807051079741> Aşk ölçer %98 Gösteriyor. OoOoO biyileyi aşık olmuuş",
      "<:kalpp:1134846807051079741> Aşk ölçer %99 Gösteriyor. VAY anam babam bee",
      "<:kalpp:1134846807051079741> Aşk ölçer %100 Gösteriyor. Bu aşk deyilde ne beğğ",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('Aşkınızı Ölçmem İçin Birisini Etiketlemeniz Gerekiyor.')
  }});
 
             // <prefix>aşk-ölçer @kullanıcı yazdığınızda yukarıda bulunan rastgele yüzdelerden birisini atar. | İnanmayın böle selere hihihi
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşk-ölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }