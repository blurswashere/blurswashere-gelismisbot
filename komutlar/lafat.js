exports.run = async (client, msg, args) => {
    let kapak=[
      "<a:kkapak:1134860611759636542> Yalanım yok ki benim, aklımdasın hala. Ne yapayım güzelim gereksiz şeyleri kafa hep takıyorum.",
      "<a:kkapak:1134860611759636542> A101'de satılan 25 kuruşluk çikolatanın tadını bile veremeyen insanlar var. Öyle gereksizler... ",
      "<a:kkapak:1134860611759636542> Bazı insanların da aynı televizyon gibi tepesine vurulduğunda düzelmesi en büyük temennimdir.",
      "<a:kkapak:1134860611759636542> Kimine göre kral, kimine göre yalanım... Unutmayın beyler adamına göre adamım... ",
      "<a:kkapak:1134860611759636542> Bazı kişiler dümen çevirmek olunca kaptan olmak için sıraya giriyor.",
      "<a:kkapak:1134860611759636542> Içinden geldiği için bizimle olanları, işinden geldiği için bizimle olanlara değiştik. Yanlış ettik.",
      "<a:kkapak:1134860611759636542> Canımı yakacak kadar güçlü olanın sonuçlarına katlanacak kadar gücü olmalı.",
      "<a:kkapak:1134860611759636542> Eğer ben güneş isem sen aysın. Benim doğduğum yerde sen batarsın.",
      "<a:kkapak:1134860611759636542> Bana laf cambazlığı yapma kızım, bir laf sokarım kürtajla bile aldıramazsın.",
      "<a:kkapak:1134860611759636542> Terk etmek kolaysa senin için, el sallamakta hiç zor olmaz benim için.",
      "<a:kkapak:1134860611759636542> Insanlığa davet etsek yol tarifi isteyecek insanlar var.",
      "<a:kkapak:1134860611759636542> Senin etiketinin olduğu yer fiyatı ben koyarım.",
      "<a:kkapak:1134860611759636542> Balonlar, içi boş şeylerin de bazen yükselebileceğini hatırlatır.",
      "<a:kkapak:1134860611759636542> Bazı insanları sarımsaklasak da mı saklasak, yoksa boğup da rahatlasak mı?",
      "<a:kkapak:1134860611759636542> Laf sokma, kapak olursun. Yalvarma, köpek olursun. Delikanlı ol, belki yanımda yer bulursun.",
      "<a:kkapak:1134860611759636542> Laf Sokarim Derinden Gotun Oynar Yerinden",
      "<a:kkapak:1134860611759636542> Her gün resmine bakmadan duramıyorum. –İlla TÜKÜRECEĞİM!",
      "<a:kkapak:1134860611759636542> Kapak Olana Kapak Laf Sokamam :(",
      "<a:kkapak:1134860611759636542> Top Topu Çeker Dediğinde İnanmamıştım .. Doğruymuş Ama",
      "<a:kkapak:1134860611759636542> Laf dedi oldu kapak, söz söyledi oldu tencereye kapak.",
      "<a:kkapak:1134860611759636542> Çok talibim var diyenler; Sevinmeyin! Ucuz malın alıcısı çoktur.",
      "<a:kkapak:1134860611759636542> Etme sırtını duvardan başkasına emanet. En kralının bile içinde vardır bir nebze ihanet.",
      "<a:kkapak:1134860611759636542> İnsanlar da fotoğraf gibi; ne kadar büyütürsen, o  düşüyor kalitesi.",
      "<a:kkapak:1134860611759636542> Sana biraz adam ol diyeceğim seni de zor durumda bırakmak istemiyorum.",
      "<a:kkapak:1134860611759636542> Uzak dur çek elini benden, senin gibi seviyesizleri çok geride bıraktım ben.",
      "<a:kkapak:1134860611759636542> Bana şiir yaz diyorsun hoş güzel de, peki sen kaç harf edersin.",
      "<a:kkapak:1134860611759636542> 2 dakika adam ol desem kaç dakikam kaldı diye soracak insansın",
      "<a:kkapak:1134860611759636542> Laf sokarım derinden aklın oynar yerinden.",
      "<a:kkapak:1134860611759636542> Ben sana ilaç olurum da, sen benim yan etkilerime dayanamazsın.",
      "<a:kkapak:1134860611759636542> Karabiber Ayran Koyumda Yaylan",
      "<a:kkapak:1134860611759636542> Senden Bir Kaşık Cacık Bile Olmazki Adam Olucaksın",
      "<a:kkapak:1134860611759636542> Sana Laf Sokmucam Şanslısın :) ",
      "<a:kkapak:1134860611759636542> Senin zirven benim zeminim! ",
      "<a:kkapak:1134860611759636542> Sen vurursun bela okurlar. Biz vururuz sala okurlar.",
      "<a:kkapak:1134860611759636542> Sen Vurursun Dikiş Atarlar Ben Vururum ** Toprak Atarlar **",
      "<a:kkapak:1134860611759636542> Yaklaşma toz olursun geçme pişman olursun.",
      "<a:kkapak:1134860611759636542> Uzaktan kusursuz, yakından lüzumsuz insanlar tanıdım.",
      "<a:kkapak:1134860611759636542> Senin artistlik yaptığın yerde bana yönetmenlik düşer.",
      "<a:kkapak:1134860611759636542> bir şey bilmene gerek yok haddini bil yeter.",
      "<a:kkapak:1134860611759636542> Beni eleştireceğine, git beynini geliştir!",
      "<a:kkapak:1134860611759636542> Tipinizin gideri var ama karakterinizin ederi yok.",
      "<a:kkapak:1134860611759636542> Matematikte bir konu olsan “Boş Küme” olursun. Havan kime ?",
      "<a:kkapak:1134860611759636542> 52 ekran televizyon kadar kafan var ama küçük düğmesi kadar beynin yok.",
      "<a:kkapak:1134860611759636542> Konu adamlığa geldi, sen git istersen!",
  
// Belirtilen kullanıcıya yukarıda belirtilen laflardan söyler.

    ]
       let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (':no_entry_sign: Ya Kime Kapak Laf Soyluyecem Etiketlemedin?')
  }});
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${kapak[Math.floor(Math.random() * 16)]}.`)
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
    name: 'lafat',
    description: 'Etiketlediniz Kisiye Kapak Laflar Soler.',
    usage: 'lafat'
   }