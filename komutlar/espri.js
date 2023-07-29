const Discord = require("discord.js");
const client = new Discord.Client();

     // Eğlence komutudur yazıldığında aşağıdaki gibi rastgele bi espri atar. Eğer eklemek istiyorsanız 26. satırın altına 2 tane " koyup sonuna , koyun. "" içinede esprinizi yazın.

exports.run = (client, message) => {
  message.channel.send("Espri yükleniyor...").then(message => {
    var codwaespri = [
     "<a:hahahaha:1134853826147528835> Almanya'da Almanlar yaşıyorsa, Sakarya'da sakarlar mı yaşar?",
      "<a:hahahaha:1134853826147528835> -File çorap aldım.\n-File niye aldın? Kendine alsaydın ya",
      "<a:hahahaha:1134853826147528835> Kar üzerinde yürüyen adama ne denir. Karabasan.",
      "<a:hahahaha:1134853826147528835> -Fransız ihtilali neye karşı yapılmıştır\n-Sabaha karşı",
      "<a:hahahaha:1134853826147528835> Gidenin arkasına bakmayın yoksa geleni göremezsiniz.",
      "<a:hahahaha:1134853826147528835> -Sen o çeteyi tanıyor musun?-\nHangi çeteyi\n-Peçeteyi.",
      "<a:hahahaha:1134853826147528835> +Kanka ben banyoya 3 kişi giriyom. \n-Oha nasıl? \n+Hacı, Şakir ve ben. \n-Defol lan!",
      "<a:hahahaha:1134853826147528835> +Kocanızla ortak özelliğiniz ne? \n-Aynı gün evlendik.",
      "<a:hahahaha:1134853826147528835> +Evladım ödevini neden yapmadın? \n-Bilgisayarım uyku modundaydı, uyandırmaya kıyamadım.",
      "<a:hahahaha:1134853826147528835> +Bizim arkadaş ortamında paranın lafı bile olmaz. \n-Niye ki? \n+Çünkü hiç birimizin parası yok.",
      "<a:hahahaha:1134853826147528835> En iyi yemek yapan Ceren hangisidir?\nTenceren.",
      "<a:hahahaha:1134853826147528835> Çok makbule geçtişimdi de Ayşe geçiyor.",
      "<a:hahahaha:1134853826147528835> Yılanlardan korkma, yılmayanlardan kork.",
      "<a:hahahaha:1134853826147528835> +Baykuşlar vedalaşırken ne der? \n-Bay bay baykuş.",
      "<a:hahahaha:1134853826147528835> -Alinin selamı var.\n-Hangi Ali?\n-Şehirlerarası Otobüs termin-ali",
      "<a:hahahaha:1134853826147528835> Aaa siz çok terlemişsiniz durun size terlik getireyim.",
      "<a:hahahaha:1134853826147528835> -Örümcek adam ağ atamıyormuş,neden?-Çünkü ağ bağlantısı kopmuş.",
      "<a:hahahaha:1134853826147528835> -4. Murat neden intihar etmiş?\n- İlk 3'e giremediği için.",
    ];
    var espri = codwaespri[Math.floor(Math.random() * codwaespri.length)];
    message.edit(`${espri}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["espiri", "espri-yap", "yap-espri", "yapbi-espri"],
  permLevel: 0
};

exports.help = {
  name: "espri",
  description: "codwa & ottomancode",
  usage: "espri"
};