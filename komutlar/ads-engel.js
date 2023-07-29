const Discord = require('discord.js')
const db = require('quick.db')
// Reklam Engel Sistemi. Açıldığı zaman sunucuda birisi reklam yaptığında mesajını siler ve uyarı verir. Genel ayarları bot.js den yapabilirsiniz.
    exports.run = (client, message, args) => {

        if(!args[0]){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`**Reklam Engel Sistemini Açabilmek & Kapatabilmek İçin \`<prefix>reklam-engel aç\`, \`<prefix>reklam-engel kapat\``)
            .setColor('#36393F')
            return message.channel.send(cmfhata)
        }
        if(args[0] === 'aç'){
            // Data İşemeleri
            db.set(`linkcodemarefi_${message.guild.id}`, 'codemarefiaktif')


            const sistemaktif = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} - Başarılı`, message.author.avatarURL({dynamic: true}))
            .setDescription(`**Reklam Engel Sistemini Başarılı Bir Şekilde Açtınız. Eğer Kaptmak İstersenizde** \`<prefix>reklam-engel kapat\``)
            .setColor('#36393F')
            return message.channel.send(sistemaktif)
        }

        if(args[0] === 'kapat'){

            db.delete(`linkcodemarefi_${message.guild.id}`)


            const sistemdevredişi = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} - Başarılı`, message.author.avatarURL({dynamic: true}))
            .setDescription(`**Reklam Engel Sistemini Başarılı Bir Şekilde Kapattınız. Eğer Açmak İstersenizde** \`<prefix>reklam-engel aç\``)
            .setColor('#36393F')
            return message.channel.send(sistemdevredişi)
        }

    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Reklam engel','REKLAM ENGEL', 'reklam engel','Reklam-engel','REKLAM-ENGEL'],
    permLevel: 0
}

exports.help = {
    name: 'reklam-engelle'
}