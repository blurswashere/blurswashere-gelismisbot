const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");

module.exports = async client => {

    client.user.setActivity(`???`, { type: "WATCHING" });
  client.user.setStatus("dnd");
  console.log("Aktif Oldu!")
};

  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 

  // OYNUYOR KISMI bot.js'DE OLDUĞU İÇİN BURANIN ÖNEMİ YOK.