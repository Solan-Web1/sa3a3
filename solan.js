const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://spam-1-20.glitch.me/`);
}, 280000);

// 100 token dane
//
const Discord = require("discord.js");
const Canvas = require("canvas");
const fs = require("fs");
const cmd = require("node-cmd");
const config = require("./config.json");
const prefix = config.prefix;
const SOLAN = new Discord.Client();
const SOLAN2 = new Discord.Client();
const SOLAN3 = new Discord.Client();
const SOLAN4 = new Discord.Client();
const SOLAN5 = new Discord.Client();
const SOLAN6 = new Discord.Client();
const SOLAN7 = new Discord.Client();
const SOLAN8 = new Discord.Client();
const SOLAN9 = new Discord.Client();
const SOLAN10 = new Discord.Client();
const SOLAN11 = new Discord.Client();
const SOLAN12 = new Discord.Client();
const SOLAN13 = new Discord.Client();
const SOLAN14 = new Discord.Client();
const SOLAN15 = new Discord.Client();
const SOLAN16 = new Discord.Client();
const SOLAN17 = new Discord.Client();
const SOLAN18 = new Discord.Client();
const SOLAN19 = new Discord.Client();
const SOLAN20 = new Discord.Client();
const SOLAN21 = new Discord.Client();
const SOLAN22 = new Discord.Client();
const SOLAN23 = new Discord.Client();
const SOLAN24 = new Discord.Client();
const SOLAN25 = new Discord.Client();
const SOLAN26 = new Discord.Client();
const SOLAN27 = new Discord.Client();
const SOLAN28 = new Discord.Client();
const SOLAN29 = new Discord.Client();
const SOLAN30 = new Discord.Client();
const SOLAN31 = new Discord.Client();
const SOLAN32 = new Discord.Client();
const SOLAN33 = new Discord.Client();
const SOLAN34 = new Discord.Client();
const SOLAN35 = new Discord.Client();
const SOLAN36 = new Discord.Client();
const SOLAN37 = new Discord.Client();
const SOLAN38 = new Discord.Client();
const SOLAN39 = new Discord.Client();
const SOLAN40 = new Discord.Client();
const SOLAN41 = new Discord.Client();
const SOLAN42 = new Discord.Client();
const SOLAN43 = new Discord.Client();
const SOLAN44 = new Discord.Client();
const SOLAN45 = new Discord.Client();
const SOLAN46 = new Discord.Client();
const SOLAN47 = new Discord.Client();
const SOLAN48 = new Discord.Client();
const SOLAN49 = new Discord.Client();
const SOLAN50 = new Discord.Client();
const SOLAN51 = new Discord.Client();
const SOLAN52 = new Discord.Client();
const SOLAN53 = new Discord.Client();
const SOLAN54 = new Discord.Client();
const SOLAN55 = new Discord.Client();
const SOLAN56 = new Discord.Client();
const SOLAN57 = new Discord.Client();
const SOLAN58 = new Discord.Client();
const SOLAN59 = new Discord.Client();
const SOLAN60 = new Discord.Client();
const SOLAN61 = new Discord.Client();
const SOLAN62 = new Discord.Client();
const SOLAN63 = new Discord.Client();
const SOLAN64 = new Discord.Client();
const SOLAN65 = new Discord.Client();
const SOLAN66 = new Discord.Client();
const SOLAN67 = new Discord.Client();
const SOLAN68 = new Discord.Client();
const SOLAN69 = new Discord.Client();
const SOLAN70 = new Discord.Client();
const SOLAN71 = new Discord.Client();
const SOLAN72 = new Discord.Client();
const SOLAN73 = new Discord.Client();
const SOLAN74 = new Discord.Client();
const SOLAN75 = new Discord.Client();
const SOLAN76 = new Discord.Client();
const SOLAN77 = new Discord.Client();
const SOLAN78 = new Discord.Client();
const SOLAN79 = new Discord.Client();
const SOLAN80 = new Discord.Client();
const SOLAN81 = new Discord.Client();
const SOLAN82 = new Discord.Client();
const SOLAN83 = new Discord.Client();
const SOLAN84 = new Discord.Client();
const SOLAN85 = new Discord.Client();
const SOLAN86 = new Discord.Client();
const SOLAN87 = new Discord.Client();
const SOLAN88 = new Discord.Client();
const SOLAN89 = new Discord.Client();
const SOLAN90 = new Discord.Client();
const SOLAN91 = new Discord.Client();
const SOLAN92 = new Discord.Client();
const SOLAN93 = new Discord.Client();
const SOLAN94 = new Discord.Client();
const SOLAN95 = new Discord.Client();
const SOLAN96 = new Discord.Client();
const SOLAN97 = new Discord.Client();
const SOLAN98 = new Discord.Client();
const SOLAN99 = new Discord.Client();
const SOLAN100= new Discord.Client();
const help = `**
    DevSolan
**`;
// dev solan

const err = `** \`\`\`  [ERORR] : لازم تسوي رتبة بـ اسم  \`\`\`
         \`\`  \`\` **`;

// ======= [ settings JSON   ] ======== //
const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
SOLAN.on("message", async msg => {
  if (!msg.guild) return;
  if (msg.author.bot) return;
  if (!dinfo)
    dinfo = {
      //
      owner: config.solanid,
      serverid: "NONE",
      channelid: "NONE",
      timespam: "NONE",
      timestop: "NONE"
    };
  if (msg.content.startsWith(config.prefix + "setownerID")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.owner = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لصاحب التوكانات __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh");
  }
  if (msg.content.startsWith(config.prefix + "setserverID")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "solan"
    dinfo.serverid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لسيرفر الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "setchannelID")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.channelid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لروم الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeSpam")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع وقت الاسبام بـ الثواني **");
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "solan"
    dinfo.timespam = args;
    await msg
      .reply(`** __ تم اضافة مدة ارسال الاسبام ب الثواني __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeStop")) {
    // جمــيع الحقوق محفوظة لدي "solan"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return msg.channel.send(
        "** قم بوضع وقت توقف البوت بعد بداء الاسبام بـ الساعات **"
      );
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "solan"
    dinfo.timestop = args;
    await msg
      .reply(`** __ تم اضافة مدة توقف الاسبام بـ الساعات  __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
});

SOLAN2.on("message", async message => {
  if (message.content === prefix + "reset") {
    if (!dinfo.owner.includes(message.author.id)) return;
    dinfo.serverid = "NONE";
    dinfo.channelid = "NONE";
    dinfo.timespam = "NONE";
    dinfo.timestop = "NONE";
    message.channel.send(`**⚠️ restsettings , <@${dinfo.owner}>**`);
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh");
  }
});

// ======= [ settings JSON - END   ] ======== //

// ======= [ Reload JSON   ] ======== //
// ======= [ Reload JSON - END   ] ======== //

// عیسابی ئەکاونتەکان  50 تۆکین
// ======= [ Console LOG    ] ======== //
SOLAN.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 1`);
  console.log(`Hi ${SOLAN.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN.guilds.size} " ]`);
});
SOLAN2.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 2 `);
  console.log(`Hi ${SOLAN2.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN2.guilds.size} " ]`);
});
SOLAN3.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 3`);
  console.log(`Hi ${SOLAN3.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN3.guilds.size} " ]`);
});
SOLAN4.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 4`);
  console.log(`Hi ${SOLAN4.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN4.guilds.size} " ]`);
});
SOLAN5.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 5`);
  console.log(`Hi ${SOLAN5.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN5.guilds.size} " ]`);
});
SOLAN6.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 6`);
  console.log(`Hi ${SOLAN6.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN6.guilds.size} " ]`);
});
SOLAN7.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 7`);
  console.log(`Hi ${SOLAN7.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN7.guilds.size} " ]`);
});
SOLAN8.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 8`);
  console.log(`Hi ${SOLAN8.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN8.guilds.size} " ]`);
});
SOLAN9.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 9`);
  console.log(`Hi ${SOLAN9.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN9.guilds.size} " ]`);
});
SOLAN10.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 10`);
  console.log(`Hi ${SOLAN10.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN10.guilds.size} " ]`);
});
SOLAN11.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 11`);
  console.log(`Hi ${SOLAN11.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN11.guilds.size} " ]`);
});
SOLAN12.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 12`);
  console.log(`Hi ${SOLAN12.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN12.guilds.size} " ]`);
});
SOLAN13.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 13`);
  console.log(`Hi ${SOLAN13.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN13.guilds.size} " ]`);
});
SOLAN14.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 14`);
  console.log(`Hi ${SOLAN14.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN14.guilds.size} " ]`);
});
SOLAN15.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی15`);
  console.log(`Hi ${SOLAN15.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN15.guilds.size} " ]`);
});
SOLAN16.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی16`);
  console.log(`Hi ${SOLAN16.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN16.guilds.size} " ]`);
});
SOLAN17.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی17`);
  console.log(`Hi ${SOLAN17.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN17.guilds.size} " ]`);
});
SOLAN18.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی18`);
  console.log(`Hi ${SOLAN18.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN18.guilds.size} " ]`);
});
SOLAN19.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی19`);
  console.log(`Hi ${SOLAN19.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN19.guilds.size} " ]`);
});
SOLAN20.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی20`);
  console.log(`Hi ${SOLAN20.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN20.guilds.size} " ]`);
});
SOLAN21.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی21`);
  console.log(`Hi ${SOLAN21.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN21.guilds.size} " ]`);
});
SOLAN22.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی22`);
  console.log(`Hi ${SOLAN22.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN22.guilds.size} " ]`);
});
SOLAN23.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی23`);
  console.log(`Hi ${SOLAN23.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN33.guilds.size} " ]`);
});

SOLAN24.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی24`);
  console.log(`Hi ${SOLAN24.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN24.guilds.size} " ]`);
});
SOLAN25.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی25`);
  console.log(`Hi ${SOLAN25.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN25.guilds.size} " ]`);
});
SOLAN26.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی26`);
  console.log(`Hi ${SOLAN26.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN26.guilds.size} " ]`);
});
SOLAN27.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 27`);
  console.log(`Hi ${SOLAN27.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN27.guilds.size} " ]`);
});
SOLAN28.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 28`);
  console.log(`Hi ${SOLAN28.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN28.guilds.size} " ]`);
});
SOLAN29.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 29`);
  console.log(`Hi ${SOLAN29.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN29.guilds.size} " ]`);
});
SOLAN30.on("ready", () => {
  console.log(`[SOLAN] : الحساب رقم 30 يعمل`);
  console.log(`Hi ${SOLAN30.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN30.guilds.size} " ]`);
});
SOLAN31.on("ready", () => {
  console.log(`[SOLAN] : 31 ئەکاونتی `);
  console.log(`Hi ${SOLAN31.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN31.guilds.size} " ]`);
});
SOLAN32.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 32 `);
  console.log(`Hi ${SOLAN32.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN32.guilds.size} " ]`);
});
SOLAN33.on("ready", () => {
  console.log(`[SOLAN] : 33ئەکاونتی `);
  console.log(`Hi ${SOLAN33.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN33.guilds.size} " ]`);
});
SOLAN34.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی34 `);
  console.log(`Hi ${SOLAN34.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN34.guilds.size} " ]`);
});
SOLAN35.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی35 `);
  console.log(`Hi ${SOLAN35.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN35.guilds.size} " ]`);
});
SOLAN36.on("ready", () => {
  console.log(`[SOLAN] : 36ئەکاونتی `);
  console.log(`Hi ${SOLAN36.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN36.guilds.size} " ]`);
});
SOLAN37.on("ready", () => {
  console.log(`[SOLAN] :37 ئەکاونتی `);
  console.log(`Hi ${SOLAN37.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN37.guilds.size} " ]`);
});
SOLAN38.on("ready", () => {
  console.log(`[SOLAN] : 38ئەکاونتی `);
  console.log(`Hi ${SOLAN38.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN38.guilds.size} " ]`);
});
SOLAN39.on("ready", () => {
  console.log(`[SOLAN] : 39ئەکاونتی `);
  console.log(`Hi ${SOLAN39.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN39.guilds.size} " ]`);
});
SOLAN40.on("ready", () => {
  console.log(`[SOLAN] :40 ئەکاونتی `);
  console.log(`Hi ${SOLAN40.user.tag} , This Code by : SOLAN `);
  console.log(`i Have  [ " ${SOLAN40.guilds.size} " ]`);
});
SOLAN41.on("ready", () => {
  console.log(`[SOLAN] : 41ئەکاونتی `);
  console.log(`Hi ${SOLAN41.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN41.guilds.size} " ]`);
});
SOLAN42.on("ready", () => {
  console.log(`[SOLAN] : 42ئەکاونتی `);
  console.log(`Hi ${SOLAN42.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN42.guilds.size} " ]`);
});
SOLAN43.on("ready", () => {
  console.log(`[SOLAN] : 43ئەکاونتی `);
  console.log(`Hi ${SOLAN43.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN43.guilds.size} " ]`);
});
SOLAN44.on("ready", () => {
  console.log(`[SOLAN] : 44ئەکاونتی `);
  console.log(`Hi ${SOLAN44.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN44.guilds.size} " ]`);
});
SOLAN45.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی45 `);
  console.log(`Hi ${SOLAN45.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN45.guilds.size} " ]`);
});
SOLAN46.on("ready", () => {
  console.log(`[SOLAN] : 46ئەکاونتی `);
  console.log(`Hi ${SOLAN46.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN46.guilds.size} " ]`);
});
SOLAN47.on("ready", () => {
  console.log(`[SOLAN] :47 ئەکاونتی `);
  console.log(`Hi ${SOLAN47.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN47.guilds.size} " ]`);
});
SOLAN48.on("ready", () => {
  console.log(`[SOLAN] :48 ئەکاونتی `);
  console.log(`Hi ${SOLAN48.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN48.guilds.size} " ]`);
});
SOLAN49.on("ready", () => {
  console.log(`[SOLAN] : 49ئەکاونتی `);
  console.log(`Hi ${SOLAN49.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN49.guilds.size} " ]`);
});
SOLAN50.on("ready", () => {
  console.log(`[SOLAN] :50 ئەکاونتی `);
  console.log(`Hi ${SOLAN50.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN50.guilds.size} " ]`);
});
SOLAN51.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 51`);
  console.log(`Hi ${SOLAN51.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN51.guilds.size} " ]`);
});
SOLAN52.on("ready", () => {
 console.log(`[SOLAN] : ئەکاونتی 52`);
  console.log(`Hi ${SOLAN52.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN52.guilds.size} " ]`);
});
SOLAN53.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 53`);
  console.log(`Hi ${SOLAN53.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN53.guilds.size} " ]`);
});
SOLAN54.on("ready", () => {
  console.log(`[SOLAN] :54 ئەکاونتی `);
  console.log(`Hi ${SOLAN54.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN54.guilds.size} " ]`);
});
SOLAN55.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 55`);
  console.log(`Hi ${SOLAN55.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN55.guilds.size} " ]`);
});
SOLAN56.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 56`);
  console.log(`Hi ${SOLAN56.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN56.guilds.size} " ]`);
});
SOLAN57.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 57`);
  console.log(`Hi ${SOLAN57.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN57.guilds.size} " ]`);
});
SOLAN58.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 58`);
  console.log(`Hi ${SOLAN58.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN58.guilds.size} " ]`);
});
SOLAN59.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 59`);
  console.log(`Hi ${SOLAN59.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN59.guilds.size} " ]`);
});
SOLAN60.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 60`);
  console.log(`Hi ${SOLAN60.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN60.guilds.size} " ]`);
});
SOLAN61.on("ready", () => {
  console.log(`[SOLAN] : 61 ئەکاونتی `);
  console.log(`Hi ${SOLAN61.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN61.guilds.size} " ]`);
});
SOLAN62.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 62`);
  console.log(`Hi ${SOLAN62.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN62.guilds.size} " ]`);
});
SOLAN63.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 63`);
  console.log(`Hi ${SOLAN63.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN63.guilds.size} " ]`);
});
SOLAN64.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 64`);
  console.log(`Hi ${SOLAN64.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN64.guilds.size} " ]`);
});
SOLAN65.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 65`);
  console.log(`Hi ${SOLAN65.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN65.guilds.size} " ]`);
});
SOLAN66.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 66`);
  console.log(`Hi ${SOLAN66.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN66.guilds.size} " ]`);
});
SOLAN67.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 67`);
  console.log(`Hi ${SOLAN67.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN67.guilds.size} " ]`);
});
SOLAN68.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 68`);
  console.log(`Hi ${SOLAN68.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN68.guilds.size} " ]`);
});
SOLAN69.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 69`);
  console.log(`Hi ${SOLAN69.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN69.guilds.size} " ]`);
});
SOLAN70.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 70`);
  console.log(`Hi ${SOLAN70.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN70.guilds.size} " ]`);
});
SOLAN71.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 70`);
  console.log(`Hi ${SOLAN70.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN70.guilds.size} " ]`);
});
SOLAN71.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 71`);
  console.log(`Hi ${SOLAN71.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN71.guilds.size} " ]`);
});
SOLAN72.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 72`);
  console.log(`Hi ${SOLAN72.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN72.guilds.size} " ]`);
});
SOLAN73.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 73`);
  console.log(`Hi ${SOLAN73.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN73.guilds.size} " ]`);
});
SOLAN74.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 74`);
  console.log(`Hi ${SOLAN74.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN74.guilds.size} " ]`);
});
SOLAN75.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 75`);
  console.log(`Hi ${SOLAN75.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN75.guilds.size} " ]`);
});
SOLAN76.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 76`);
  console.log(`Hi ${SOLAN76.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN76.guilds.size} " ]`);
});
SOLAN77.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 77`);
  console.log(`Hi ${SOLAN77.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN77.guilds.size} " ]`);
});
SOLAN78.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 78`);
  console.log(`Hi ${SOLAN78.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN78.guilds.size} " ]`);
});
SOLAN79.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 79`);
  console.log(`Hi ${SOLAN79.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN79.guilds.size} " ]`);
});
SOLAN80.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 80`);
  console.log(`Hi ${SOLAN80.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN80.guilds.size} " ]`);
});
SOLAN81.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 81`);
  console.log(`Hi ${SOLAN81.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN81.guilds.size} " ]`);
});
SOLAN82.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 82`);
  console.log(`Hi ${SOLAN82.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN82.guilds.size} " ]`);
});
SOLAN83.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 83`);
  console.log(`Hi ${SOLAN83.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN83.guilds.size} " ]`);
});
SOLAN84.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 84`);
  console.log(`Hi ${SOLAN84.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN84.guilds.size} " ]`);
});
SOLAN85.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 85`);
  console.log(`Hi ${SOLAN85.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN85.guilds.size} " ]`);
});
SOLAN86.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 86`);
  console.log(`Hi ${SOLAN86.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN86.guilds.size} " ]`);
});
SOLAN87.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 87`);
  console.log(`Hi ${SOLAN87.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN87.guilds.size} " ]`);
});
SOLAN88.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 88`);
  console.log(`Hi ${SOLAN88.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN88.guilds.size} " ]`);
});
SOLAN89.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 89`);
  console.log(`Hi ${SOLAN89.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN89.guilds.size} " ]`);
});
SOLAN90.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 90`);
  console.log(`Hi ${SOLAN90.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN90.guilds.size} " ]`);
});
SOLAN91.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 91`);
  console.log(`Hi ${SOLAN91.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN91.guilds.size} " ]`);
});
SOLAN92.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 92`);
  console.log(`Hi ${SOLAN92.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN92.guilds.size} " ]`);
});
SOLAN93.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 93`);
  console.log(`Hi ${SOLAN93.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN93.guilds.size} " ]`);
});
SOLAN94.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 94`);
  console.log(`Hi ${SOLAN94.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN94.guilds.size} " ]`);
});
SOLAN95.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 95`);
  console.log(`Hi ${SOLAN95.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN95.guilds.size} " ]`);
});
SOLAN96.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 96`);
  console.log(`Hi ${SOLAN96.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN96.guilds.size} " ]`);
});
SOLAN97.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 97`);
  console.log(`Hi ${SOLAN97.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN97.guilds.size} " ]`);
});
SOLAN98.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 98`);
  console.log(`Hi ${SOLAN98.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN98.guilds.size} " ]`);
});
SOLAN99.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 99`);
  console.log(`Hi ${SOLAN99.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN99.guilds.size} " ]`);
});
SOLAN100.on("ready", () => {
  console.log(`[SOLAN] : ئەکاونتی 100`);
  console.log(`Hi ${SOLAN100.user.tag} , This Code by : solan `);
  console.log(`i Have  [ " ${SOLAN100.guilds.size} " ]`);
});

// ====[ dev solan ] ==== //
const solanDEV = require("request");
const invitecode = config.invite;
SOLAN.on("ready", () => {
  console.log(`[BOT] ${SOLAN.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN }
  });
});

SOLAN2.on("ready", () => {
  console.log(`[BOT] ${SOLAN2.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

SOLAN3.on("ready", () => {
  console.log(`[BOT] ${SOLAN3.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

SOLAN4.on("ready", () => {
  console.log(`[BOT] ${SOLAN4.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

SOLAN5.on("ready", () => {
  console.log(`[BOT] ${SOLAN5.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});

SOLAN6.on("ready", () => {
  console.log(`[BOT] ${SOLAN6.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN6 }
  });
});

SOLAN7.on("ready", () => {
  console.log(`[BOT] ${SOLAN7.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN7 }
  });
});

SOLAN8.on("ready", () => {
  console.log(`[BOT] ${SOLAN8.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN8 }
  });
});

SOLAN9.on("ready", () => {
  console.log(`[BOT] ${SOLAN9.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN9 }
  });
});

SOLAN10.on("ready", () => {
  console.log(`[BOT] ${SOLAN10.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN10 }
  });
});

SOLAN11.on("ready", () => {
  console.log(`[BOT] ${SOLAN11.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN11 }
  });
});

SOLAN12.on("ready", () => {
  console.log(`[BOT] ${SOLAN12.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN12 }
  });
});

SOLAN13.on("ready", () => {
  console.log(`[BOT] ${SOLAN13.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN13 }
  });
});

SOLAN14.on("ready", () => {
  console.log(`[BOT] ${SOLAN14.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN14 }
  });
});

SOLAN15.on("ready", () => {
  console.log(`[BOT] ${SOLAN15.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN15 }
  });
});

SOLAN16.on("ready", () => {
  console.log(`[BOT] ${SOLAN16.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN16 }
  });
});

SOLAN17.on("ready", () => {
  console.log(`[BOT] ${SOLAN17.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN17 }
  });
});

SOLAN18.on("ready", () => {
  console.log(`[BOT] ${SOLAN18.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN18 }
  });
});

SOLAN19.on("ready", () => {
  console.log(`[BOT] ${SOLAN19.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN19 }
  });
});

SOLAN20.on("ready", () => {
  console.log(`[BOT] ${SOLAN20.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN20 }
  });
});
SOLAN21.on("ready", () => {
  console.log(`[BOT] ${SOLAN21.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN22.on("ready", () => {
  console.log(`[BOT] ${SOLAN22.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN23.on("ready", () => {
  console.log(`[BOT] ${SOLAN23.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
SOLAN24.on("ready", () => {
  console.log(`[BOT] ${SOLAN24.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
SOLAN25.on("ready", () => {
  console.log(`[BOT] ${SOLAN25.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN25.on("ready", () => {
  console.log(`[BOT] ${SOLAN25.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
SOLAN25.on("ready", () => {
  console.log(`[BOT] ${SOLAN25.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
SOLAN26.on("ready", () => {
  console.log(`[BOT] ${SOLAN26.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN27.on("ready", () => {
  console.log(`[BOT] ${SOLAN27.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
SOLAN28.on("ready", () => {
  console.log(`[BOT] ${SOLAN28.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
SOLAN29.on("ready", () => {
  console.log(`[BOT] ${SOLAN29.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN30.on("ready", () => {
  console.log(`[BOT] ${SOLAN30.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
SOLAN31.on("ready", () => {
  console.log(`[BOT] ${SOLAN31.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
SOLAN32.on("ready", () => {
  console.log(`[BOT] ${SOLAN32.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN33.on("ready", () => {
  console.log(`[BOT] ${SOLAN33.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
SOLAN34.on("ready", () => {
  console.log(`[BOT] ${SOLAN34.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
SOLAN35.on("ready", () => {
  console.log(`[BOT] ${SOLAN35.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN36.on("ready", () => {
  console.log(`[BOT] ${SOLAN36.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN37.on("ready", () => {
  console.log(`[BOT] ${SOLAN37.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN38.on("ready", () => {
  console.log(`[BOT] ${SOLAN38.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN39.on("ready", () => {
  console.log(`[BOT] ${SOLAN39.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN40.on("ready", () => {
  console.log(`[BOT] ${SOLAN40.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN41.on("ready", () => {
  console.log(`[BOT] ${SOLAN41.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN42.on("ready", () => {
  console.log(`[BOT] ${SOLAN42.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN43.on("ready", () => {
  console.log(`[BOT] ${SOLAN43.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN44.on("ready", () => {
  console.log(`[BOT] ${SOLAN44.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN45.on("ready", () => {
  console.log(`[BOT] ${SOLAN45.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN46.on("ready", () => {
  console.log(`[BOT] ${SOLAN46.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN47.on("ready", () => {
  console.log(`[BOT] ${SOLAN47.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN48.on("ready", () => {
  console.log(`[BOT] ${SOLAN48.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN49.on("ready", () => {
  console.log(`[BOT] ${SOLAN49.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN50.on("ready", () => {
  console.log(`[BOT] ${SOLAN50.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN51.on("ready", () => {
  console.log(`[BOT] ${SOLAN51.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN52.on("ready", () => {
  console.log(`[BOT] ${SOLAN52.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN53.on("ready", () => {
  console.log(`[BOT] ${SOLAN53.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN54.on("ready", () => {
  console.log(`[BOT] ${SOLAN54.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN55.on("ready", () => {
  console.log(`[BOT] ${SOLAN55.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN56.on("ready", () => {
  console.log(`[BOT] ${SOLAN56.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN57.on("ready", () => {
  console.log(`[BOT] ${SOLAN57.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN58.on("ready", () => {
  console.log(`[BOT] ${SOLAN58.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN59.on("ready", () => {
  console.log(`[BOT] ${SOLAN59.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN60.on("ready", () => {
  console.log(`[BOT] ${SOLAN60.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN61.on("ready", () => {
  console.log(`[BOT] ${SOLAN61.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN62.on("ready", () => {
  console.log(`[BOT] ${SOLAN62.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN63.on("ready", () => {
  console.log(`[BOT] ${SOLAN63.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN64.on("ready", () => {
  console.log(`[BOT] ${SOLAN64.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN65.on("ready", () => {
  console.log(`[BOT] ${SOLAN65.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN66.on("ready", () => {
  console.log(`[BOT] ${SOLAN66.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN67.on("ready", () => {
  console.log(`[BOT] ${SOLAN67.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN68.on("ready", () => {
  console.log(`[BOT] ${SOLAN68.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN69.on("ready", () => {
  console.log(`[BOT] ${SOLAN69.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN70.on("ready", () => {
  console.log(`[BOT] ${SOLAN70.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN71.on("ready", () => {
  console.log(`[BOT] ${SOLAN71.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN72.on("ready", () => {
  console.log(`[BOT] ${SOLAN72.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN73.on("ready", () => {
  console.log(`[BOT] ${SOLAN73.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN74.on("ready", () => {
  console.log(`[BOT] ${SOLAN74.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN75.on("ready", () => {
  console.log(`[BOT] ${SOLAN75.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN76.on("ready", () => {
  console.log(`[BOT] ${SOLAN76.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN77.on("ready", () => {
  console.log(`[BOT] ${SOLAN77.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN78.on("ready", () => {
  console.log(`[BOT] ${SOLAN78.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN79.on("ready", () => {
  console.log(`[BOT] ${SOLAN79.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN80.on("ready", () => {
  console.log(`[BOT] ${SOLAN80.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN81.on("ready", () => {
  console.log(`[BOT] ${SOLAN81.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN82.on("ready", () => {
  console.log(`[BOT] ${SOLAN82.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN83.on("ready", () => {
  console.log(`[BOT] ${SOLAN83.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN84.on("ready", () => {
  console.log(`[BOT] ${SOLAN84.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN85.on("ready", () => {
  console.log(`[BOT] ${SOLAN85.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN86.on("ready", () => {
  console.log(`[BOT] ${SOLAN86.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN87.on("ready", () => {
  console.log(`[BOT] ${SOLAN87.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN88.on("ready", () => {
  console.log(`[BOT] ${SOLAN88.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN89.on("ready", () => {
  console.log(`[BOT] ${SOLAN89.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN90.on("ready", () => {
  console.log(`[BOT] ${SOLAN90.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN91.on("ready", () => {
  console.log(`[BOT] ${SOLAN91.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN92.on("ready", () => {
  console.log(`[BOT] ${SOLAN92.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN93.on("ready", () => {
  console.log(`[BOT] ${SOLAN93.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN94.on("ready", () => {
  console.log(`[BOT] ${SOLAN94.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN95.on("ready", () => {
  console.log(`[BOT] ${SOLAN95.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN96.on("ready", () => {
  console.log(`[BOT] ${SOLAN96.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN97.on("ready", () => {
  console.log(`[BOT] ${SOLAN97.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
SOLAN98.on("ready", () => {
  console.log(`[BOT] ${SOLAN98.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN }
  });
});

SOLAN99.on("ready", () => {
  console.log(`[BOT] ${SOLAN99.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN }
  });
});
SOLAN100.on("ready", () => {
  console.log(`[BOT] ${SOLAN100.user.username} Ready!`);
  solanDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN }
  });
});

// DONE //
// ======= [ Console LOG - END   ] ======== //

SOLAN.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.toLowerCase() === config.prefix + "yalla") {
    message.delete(5000);
    if (!message.channel.guild) return;
    message.channel.send(help);
  }
});

// ======= [ Say MODE  ] ======== //
SOLAN.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "1") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN2.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "2") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN3.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "3") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN4.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "4") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN5.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "5") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN6.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "6") {
    //
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
SOLAN7.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "7") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN8.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "8") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN9.on("message", message => {
  if (message.author.bot) return; //
  if (!message.content.startsWith(config.prefix)) return;
  //
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "9") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN10.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "10") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN11.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "11") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN12.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "12") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN13.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "13") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN14.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "14") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN15.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "15") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN16.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "16") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN17.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "17") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN18.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  //
  if (command == config.groupnm + "18") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
SOLAN19.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //

  if (command == config.groupnm + "19") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan"); //
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN20.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length); //

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "20") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN21.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "21") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN22.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "22") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN23.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "23") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN24.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "24") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN25.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "25") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN26.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "26") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN27.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "27") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

SOLAN28.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "28") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN29.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "29") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN30.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "30") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN31.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "31") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN32.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "32") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN33.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "33") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN34.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "34") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN35.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "35") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN36.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "36") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN37.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "37") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN38.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "38") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN39.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "39") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN40.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "40") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN41.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "41") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN42.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "42") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN43.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "43") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN44.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "44") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN45.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "45") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN46.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "46") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN47.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "47") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN48.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "48") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN49.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "49") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN50.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "50") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN51.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "51") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN52.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "52") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN53.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "53") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN54.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "54") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN55.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "55") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN56.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "56") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN57.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "57") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN58.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "58") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN59.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "59") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN60.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "60") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN61.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "61") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN62.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "62") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN63.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "63") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN64.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "64") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN65.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "65") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN66.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "66") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN67.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "67") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN68.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "68") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN69.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "69") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN70.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "70") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN71.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "71") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN72.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "72") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN73.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "73") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN74.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "74") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN75.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "75") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN76.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "76") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN77.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "77") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN78.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "78") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN79.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "79") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN80.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "80") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN81.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "81") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN82.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "82") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN83.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "83") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN84.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "84") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN85.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "85") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN86.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "86") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN87.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "87") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN88.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "88") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN89.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "89") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN90.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "90") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN91.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "91") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN92.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "92") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN93.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "93") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN94.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "94") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN95.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "95") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN96.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "96") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN97.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "97") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN98.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "98") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN99.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "99") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
SOLAN100.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "100") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.solan");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
// ======= [ Say MODE - END   ] ======== //

// ======= [ MODE - Join Server , add Friend   ] ======== //
SOLAN.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

SOLAN2.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN3.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN4.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN5.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN6.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN7.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN8.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN9.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN10.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN11.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

SOLAN12.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN13.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN14.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN15.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN16.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN17.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN18.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN19.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN20.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN21.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN22.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN23.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN24.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN25.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN26.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN27.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN28.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN29.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN30.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN31.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN32.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN33.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN34.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN35.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN36.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN37.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN38.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN39.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN40.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN41.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN42.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN43.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN44.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN45.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN46.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN47.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN48.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN49.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN50.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN51.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN52.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN53.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN54.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN55.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN56.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN57.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN58.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN59.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN60.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN61.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN62.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN63.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN64.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN65.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN66.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN67.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN68.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN69.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN70.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN71.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN72.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN73.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN74.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN75.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN76.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN77.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN78.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN79.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN80.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN81.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN82.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN83.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN83.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN84.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN85.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN86.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN87.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN88.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN89.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN90.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN91.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN92.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN93.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN94.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN95.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN96.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN97.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN98.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN99.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
SOLAN100.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

// ======= [ MODE - Join Server , add Friend END  ] ======== //

//

// ======= [ MODE - React MSG END  ] ======== //

// ======= [ functions - Join Server , add Friend   ] ======== //
async function joinServer(invite, message) {
  console.log(invite);
  require("request")(
    {
      method: "POST",
      url: `https://discordapp.com/api/v6/invites/${invite}`,
      json: true,
      headers: {
        authorization: message.client.token
      }
    },
    async (err, res, body) => {
      if (err) {
        console.log(err);
        await console.log(`[ERROR] - ${err}`);
        return;
      } else {
        if (body.message.includes("Unknown Invite"))
          return console.log("[ERROR] - Unkown Invite.");
        if (body.message.includes("banned"))
          return console.log("[ERROR] - Banned from this server.");
        await console.log(`[INFO] - Done.`);
      }
    }
  );
}

async function addFriend(id, message) {
  try {
    let user = await message.client.fetchUser(id);
    await require("request")(
      {
        url: `https://discordapp.com/api/v6/users/@me/relationships`,
        method: "POST",
        json: true,
        headers: {
          "Content-Type": "application/json",
          authorization: message.client.token
        },
        body: {
          username: user.username,
          discriminator: parseInt(user.discriminator)
        }
      },
      async (err, res, body) => {
        if (err) {
          await console.log(err);
          await console.log(`[ERROR] - ${err}`);
          return;
        } else {
          await console.log(body ? body.message : "No status message.");
          await console.log(`[INFO] - Done.`);
        }
      }
    );
  } catch (e) {
    console.log(`[ERROR] - ${e}`);
  }
}

// ======= [ functions - Join Server , add Friend END  ] ======== //

// ======= [ StayVoice - MODE  ] ======== //
SOLAN.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN2.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN3.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN4.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN5.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN6.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN7.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN8.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN9.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN10.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN11.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN12.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "solan"
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN13.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN14.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت!**");
    }
  }
});
SOLAN15.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت!**");
    }
  }
});
SOLAN16.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN17.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN18.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN19.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN20.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("** لـــــە ڤــــۆیــــس نـــــیــــــت😁**");
    }
  }
});
SOLAN21.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN22.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN23.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN24.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN25.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN26.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN27.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN28.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN29.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN30.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN31.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN32.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN33.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN34.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN35.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN36.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN37.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN38.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN39.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN40.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN41.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN42.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN43.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN44.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN45.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN46.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN47.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN48.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN49.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});

SOLAN50.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN51.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN52.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN53.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN54.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN55.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN56.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN57.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN58.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN59.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN60.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN61.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN62.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN63.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN64.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN65.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN66.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN67.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN68.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN69.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN70.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN71.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN72.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN73.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN74.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN75.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN76.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN77.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN78.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN79.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN80.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN81.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت **");
    }
  }
});
SOLAN82.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN83.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN84.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN85.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN86.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN87.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN88.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN89.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN90.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN91.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN92.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN93.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN94.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN95.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN96.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN97.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN98.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN99.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
SOLAN100.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** هاتم**!");
     })
        .catch(console.log);
    } else {
      message.reply("**😁 لـــــە ڤــــۆیــــس نـــــیــــــت**");
    }
  }
});
// ======= [ SPAM - MODE end ] ======== //

// ======= [ Credits - INFO ] ======== //age", message => {

// ======= [ Credits - INFO end ] ======== //

// ======= [ Daily - INFO ] ======== //"#dai

// ======= [ Daily - INFO end ] ======== //

// ======= [ PROFILE - INFO ] ======== //

//////// playing or dnd ////////


// ======= [ PROFILE - INFO end ] ======== //

/// by solan

SOLAN.login(process.env.SOLAN);
SOLAN2.login(process.env.SOLAN2);
SOLAN3.login(process.env.SOLAN3);
SOLAN4.login(process.env.SOLAN4);
SOLAN5.login(process.env.SOLAN5);
SOLAN6.login(process.env.SOLAN6);
SOLAN7.login(process.env.SOLAN7);
SOLAN8.login(process.env.SOLAN8);
SOLAN9.login(process.env.SOLAN9);
SOLAN10.login(process.env.SOLAN10);
SOLAN11.login(process.env.SOLAN11);
SOLAN12.login(process.env.SOLAN12);
SOLAN13.login(process.env.SOLAN13);
SOLAN14.login(process.env.SOLAN14);
SOLAN15.login(process.env.SOLAN15);
SOLAN16.login(process.env.SOLAN16);
SOLAN17.login(process.env.SOLAN17);
SOLAN18.login(process.env.SOLAN18);
SOLAN19.login(process.env.SOLAN19);
SOLAN20.login(process.env.SOLAN20);
SOLAN21.login(process.env.SOLAN21);
SOLAN22.login(process.env.SOLAN22);
SOLAN23.login(process.env.SOLAN23);
SOLAN24.login(process.env.SOLAN24);
SOLAN25.login(process.env.SOLAN25);
SOLAN26.login(process.env.SOLAN26);
SOLAN27.login(process.env.SOLAN27);
SOLAN28.login(process.env.SOLAN28);
SOLAN29.login(process.env.SOLAN29);
SOLAN30.login(process.env.SOLAN30);
SOLAN31.login(process.env.SOLAN31);
SOLAN32.login(process.env.SOLAN32);
SOLAN33.login(process.env.SOLAN33);
SOLAN34.login(process.env.SOLAN34);
SOLAN35.login(process.env.SOLAN35);
SOLAN36.login(process.env.SOLAN36);
SOLAN37.login(process.env.SOLAN37);
SOLAN38.login(process.env.SOLAN38);
SOLAN39.login(process.env.SOLAN39);
SOLAN40.login(process.env.SOLAN40);
SOLAN41.login(process.env.SOLAN41);
SOLAN42.login(process.env.SOLAN42);
SOLAN43.login(process.env.SOLAN43);
SOLAN44.login(process.env.SOLAN44);
SOLAN45.login(process.env.SOLAN45);
SOLAN46.login(process.env.SOLAN46);
SOLAN47.login(process.env.SOLAN47);
SOLAN48.login(process.env.SOLAN48);
SOLAN49.login(process.env.SOLAN49);
SOLAN50.login(process.env.SOLAN50);
SOLAN51.login(process.env.SOLAN51);
SOLAN52.login(process.env.SOLAN52);
SOLAN53.login(process.env.SOLAN53);
SOLAN54.login(process.env.SOLAN54);
SOLAN55.login(process.env.SOLAN55);
SOLAN56.login(process.env.SOLAN56);
SOLAN57.login(process.env.SOLAN57);
SOLAN58.login(process.env.SOLAN58);
SOLAN59.login(process.env.SOLAN59);
SOLAN60.login(process.env.SOLAN60);
SOLAN61.login(process.env.SOLAN61);
SOLAN62.login(process.env.SOLAN62);
SOLAN63.login(process.env.SOLAN63);
SOLAN64.login(process.env.SOLAN64);
SOLAN65.login(process.env.SOLAN65);
SOLAN66.login(process.env.SOLAN66);
SOLAN67.login(process.env.SOLAN67);
SOLAN68.login(process.env.SOLAN68);
SOLAN69.login(process.env.SOLAN69);
SOLAN70.login(process.env.SOLAN70);
SOLAN71.login(process.env.SOLAN71);
SOLAN72.login(process.env.SOLAN72);
SOLAN73.login(process.env.SOLAN73);
SOLAN74.login(process.env.SOLAN74);
SOLAN75.login(process.env.SOLAN75);
SOLAN76.login(process.env.SOLAN76);
SOLAN77.login(process.env.SOLAN77);
SOLAN78.login(process.env.SOLAN78);
SOLAN79.login(process.env.SOLAN79);
SOLAN80.login(process.env.SOLAN80);
SOLAN81.login(process.env.SOLAN81);
SOLAN82.login(process.env.SOLAN82);
SOLAN83.login(process.env.SOLAN83);
SOLAN84.login(process.env.SOLAN84);
SOLAN85.login(process.env.SOLAN85);
SOLAN86.login(process.env.SOLAN86);
SOLAN87.login(process.env.SOLAN87);
SOLAN88.login(process.env.SOLAN88);
SOLAN89.login(process.env.SOLAN89);
SOLAN90.login(process.env.SOLAN90);
SOLAN91.login(process.env.SOLAN91);
SOLAN92.login(process.env.SOLAN92);
SOLAN93.login(process.env.SOLAN93);
SOLAN94.login(process.env.SOLAN94);
SOLAN95.login(process.env.SOLAN95);
SOLAN96.login(process.env.SOLAN96);
SOLAN97.login(process.env.SOLAN97);
SOLAN98.login(process.env.SOLAN98);
SOLAN99.login(process.env.SOLAN99);
SOLAN100.login(process.env.SOLAN100);