const db = require('quick.db')
const Discord = require('discord.js')
// Selamun Aleyküm & Aleyküm Selam Sistemi. Birisi sistemin açıldığı kanala 'Sa' veya 'Selamun Aleyküm' yazarsa ona otomatik cevap verir.
exports.run = async (bot, message, args) => {
  
  
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Yetkiniz bulunamadı :(')
  if (!args[0]) return message.channel.send('Lütfen \`<prefix>sa-as aç\` yada \`<prefix>sa-as kapat\` yazınız.')
  
    if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapalı')
    
      message.channel.send(`Başarıyla Sa-as oto cevap sistemi kapatıldı! `)
    
  } 
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')  
      message.channel.send(`Başarıyla Sa-as oto cevap sistemi açıldı!`)
    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['saas'],
  permLevel: 3
};

exports.help = {
  name: 'sa-as',
  description: 'sa as moruq',
  usage: 'sa-as'
};