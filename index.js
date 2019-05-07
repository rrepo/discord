const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${574748430145028096}!`);
});

client.on('message', msg => {
  
  if (msg.content === 'ping') {
    msg.reply('Pong!');
    
  }

  if (msg.content === ':topic') {
        
    var dice =Math.floor(Math.random()*(5-1)+1);
    if (dice ===1){
        msg.channel.send("\nおすすめの話題  修学旅行らしく恋バナ");
    } else if(dice ===2){
        msg.channel.send("\nおすすめの話題  趣味");
    }else if(dice ===3){
        msg.channel.send("\nおすすめの話題  自己紹介（まだ人には教えていない自分の一面）");
    }else if(dice ===4){
        msg.channel.send("\nおすすめの話題  なんで保存したのかわからない画像");
    }else if(dice ===5){
        msg.channel.send("\nおすすめの話題  推し紹介");
    }
  }
  
  if (msg.content === ":alltopic") {
    msg.channel.send("話題一覧\n修学旅行らしく恋バナ、趣味、自己紹介（まだ人には教えていない自分の一面）、なんで保存したのかわからない画像を晒す、推し紹介");
  }

  
});

client.login('NTc0NzQ4NDMwMTQ1MDI4MDk2.XM967A._Iwx48xalIjdejjhzqCkjVG2IfA');

// const Discord = require("discord.js");
// const client = new Discord.Client();

// client.on("ready", () => {
//   console.log(Botを起動しました);
// });

// client.on('message', message => {
//   if (message.content === ":topic") {



    // message.channel.send("\n----------------");
    // message.channel.send("話題一覧  修学旅行らしく、恋バナ、趣味、自己紹介（まだ人には教えていない自分の一面）、今日の天気");
  // }

ç
// });

// client.login("NTczNDY4MDU2MTU2ODk3MzEw.XMvw3Q.A7ERkrXp5rh01R1aeXL-xYM2_CU");
