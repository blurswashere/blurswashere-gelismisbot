const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const moment = require('moment');
const disbut = require('discord-buttons')(client);
const fetch = require('node-fetch');
require('./util/eventLoader')(client);
const db = require('quick.db');
const { MessageEmbed } = require("discord.js");

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
      // Sa - As Sistemi. Metni İstediğin Gibi Düzeltebilirsin.
client.on("message", async (msg, member, guild) => {
    let i = await db.fetch(`saas_${msg.guild.id}`);
    if (i === "açık") {
      if (msg.content.toLowerCase() === "sa") {
        await msg.react('🇦');
    msg.react('🇸'); 
        msg.reply("**O ne be doğrusu Selamun Aleyküm**");
      }
    }
  });  

        // Sa - As Sistemi. Metni İstediğin Gibi Düzeltebilirsin.
client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "selamun aleyküm") {
      await msg.react('🇦');
  msg.react('🇸'); 
      msg.reply("**Aleyküm Selam Hoşgeldin.**");
    }
  }
});  

       // Botun Bulunduğu Sunucuya Birisi Girdiğinde Kişiye DM'den Atılan Mesaj. İstediğin Gibi Düzenleyebilirsin
client.on("guildMemberAdd", member => {
  const hosgeldin = new Discord.MessageEmbed()
  
   .setColor('#657fdb')
   .setTitle('Sunucumuza Hoşgeldin')
   .setDescription(`<a:selam:1134840267787206857> Merhaba! Sunucumuza Hoşgeldin, Öncelikle sunucudaki kuralları okumanı tavsiye ederim.\nOkuduktan sonra hazırsın demektir, Artık istediğin kadar eğlenebilirsin!`)
   .setTimestamp()
   .setImage(`https://cdn.discordapp.com/attachments/1134567013445017641/1134839736771551395/Alabilirsiniz_3.jpeg`)
  member.send(hosgeldin)
  });


client.on('ready', () => {

                 // Oynuyor Kısmı. İstediğiniz Gibi Düzenleyebilirsiniz.
  
      var actvs = [
        `😨 blurswashere Gelişmiş Public Discord Botu`,
        `😴 Kullanmaya Başlamak İçin ${prefix}yardım Yaz!`,
        `😻 Bu Bot Bi Harika Dostum!`
    ];
                // Bu Kod Olduğu Sürece Bot Yayın Yapıyor Diye gözükür                                             Alttaki yeri değiştirirseniz botun durumundaki izle butonuna bastıklarında sizin kanalınıza giderler.
    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'STREAMING', url: 'https://www.twitch.tv/kanaliniz'});
    setInterval(() => {
        client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'STREAMING', url: 'https://www.twitch.tv/kanaliniz'});
    }, 15000);
  
                           // Consol Log kısmı burası bot çalıştığında botun bilgilerini gösterir. Değiştirebilirsiniz, fakat böyle durması daha sağlıklı.
  
      console.log ('┏━━━━━━━━━━━━━━━blurswashere━━━━━━━━━━━━━━━━━━┓');
      console.log (`Giriş Yapılan İsim     : ${client.user.username}`);
      console.log (`Bulunulan Sunucular          : ${client.guilds.cache.size}`);
      console.log (`Hizmet Verilen Kullanıcılar       : ${client.users.cache.size}`);
      console.log (`Ön Eki           : ${ayarlar.prefix}`);
      console.log (`Oynuyor Kısmı      : ${actvs}`);
      console.log (`Durum              : Çevrimiçi`);
      console.log ('┗━━━━━━━━━━━━━━━blurswashere━━━━━━━━━━━━━━━━━━┛');
    
    });


client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on('message', async message => {
const cdb = require("quick.db");
if(message.guild){
  const data1 = cdb.get("cd1."+message.guild.id)
  const data2 = cdb.get("cd2."+message.channel.id+message.guild.id)
 
                         // Küfür Engel Sistemi, Açıldığında herhangi bir kullanıcı alttaki kelimelerden birini yazarsa mesajı siler uyarı verir.

  if(data1){
  const blacklist = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];

  let content = message.content.split(' ');
 
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(!message.member.permissions.has('BAN_MEMBERS')){
  message.delete({timeout: 1000});
  message.reply("<:bidadebakim:1134842475467513856> __Birbirimizle Saygılı Konuşalım!__ **Lütfen Küfür Etmeyin.**") // Uyarı verdiği mesaj. İstediğiniz Gibi Düzenleyebilirsiniz.
  }
  }
  })
  }

    if(!data1 && data2){
  const blacklist = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "anskm", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];

  let content = message.content.split(' ');
 
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(!message.member.permissions.has('BAN_MEMBERS')){
  message.delete({timeout: 1000});
  message.reply("<:bidadebakim:1134842475467513856> __Birbirimizle Saygılı Konuşalım!__ **Lütfen Küfür Etmeyin.**")
  }
  }
  })
  }
 
}
  });


client.on('message', message => {

 
  let codemarefireklamengel = db.fetch(`linkcodemarefi_${message.guild.id}`)


  if(codemarefireklamengel === 'codemarefiaktif'){
    // Reklam Sistemi. Eğer herhangi bir kullanıcı reklam yaparsa bot o kullanıcının mesajını siler ve uyarı verir.
    const codemarefireklamliste = ['.org','.tr','.space','.funy','.fun','.com','.xyz','.glitch-me','.eueo.org','free.biz','.biz','.free','.blogspot-com','.alan','.com.tr','.sexs','.hub','.dance','.in','.net','.shop','.store','.click','.tech','.best','.college','.me','.site','.online','.art','.host','.baby','.website','.blog','.link','.top','.info','.press','.monster','.services']
    if(codemarefireklamliste.some(codemarefi => message.content.includes(codemarefi))){
   
      message.delete();

      
      const reklamyasak = new Discord.MessageEmbed()
      .setDescription(`${message.author}, __Bu Sunucuda Reklam Yapmanın Yasak Olduğunu Bilmiyormusun!?__ **Lütfen Reklam Yapma.**`) 
      .setColor('#36393F')
      message.channel.send(reklamyasak).then(codemarefisil => {
        codemarefisil.delete({timeout: 5000})
      })
    }
  } else {
    return
  }
})



client.login(process.env.token); // Token'ın Nereye Girileceğinin Kodu Burayı Oynamayın.
