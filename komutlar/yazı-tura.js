const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();
// Eğlence Komutudur. Botta Birlikte Yazı-Tura Oynarsınız.
const cevaplar = [
    "`YAZI-TURA`:**TURA**",
    "`YAZI-TURA`:**YAZI**"
];

exports.run = function(client, message) {
    
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    
    if (cevap === "`YAZI-TURA`:**YAZI**") {
        
         const yazi = new Discord.MessageEmbed()
        .setColor(0xf4b942)
        .setDescription(cevap)
        .setThumbnail("http://www.freakonomics.com/wp-content/uploads/2013/01/coin-300x218.jpg")
        message.channel.send(yazi);
        
    } else if (cevap === "`YAZI-TURA`:**TURA**") {
        
        const tura = new Discord.MessageEmbed()
        .setColor(0xf4b942)
        .setDescription(cevap)
        .setThumbnail("https://www.wallets-online.com/webadmin/items/ogon/ogon_cd_red_1.jpg")
        message.channel.send(tura);
        
    }
        

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazı-tura', 
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};