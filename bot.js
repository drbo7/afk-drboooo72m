const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
client.on("message", message => {

            if (message.content.startsWith(prefix + "xxxxxx")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : **تم آلارسال إلى :**`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Lions Throne Bot By Bo7`);
        console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` Lions Throne ©️ `,"http://twitch.tv/dr_booo7")
client.user.setStatus("dnd")
});


client.on('message', function(msg) {
    const prefix = '!'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`معلومات السيرفر :  *${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  

client.on('message',function(message) {
	let prefix = "!";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});





client.on('message', message => {
if(!message.channel.guild) return;
if (message.content.startsWith("!ping")) {
    message.channel.sendMessage(` ! \`${Date.now() - message.createdTimestamp} ms\`:watch:`);
    }
});

client.on('message', message => {
    if(message.content === '!support'){
        message.channel.send('**Join Here خـش هنا <: https://discord.gg/NVbj6Sw **')
    }
});

client.on('message', message => {
if(message.content == ('!roles')){
    // By: . Badd
    var roles = message.guild.roles;
    if(roles){
        for(let i=0;i<roles.size;i++){
        var role = message.guild.roles.array();
        role = role.sort((a,b)=> b.position - a.position).join('\n,');
        }// By: . Badd
    }// By: . Badd
 message.channel.send(role);
}// By: . Badd
});


client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***``ضع عدد الرسائل التي تريد مسحها 👌``***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("**\nعدد الرسائل التي تم مسحها: " + textxt + "\n**").then(m => m.delete(3000));
        }    
    }
}
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.startsWith("!avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
 if (message.content.startsWith('!info')) {
  var norElden= new Discord.RichEmbed()
  .addField('اسم السيرفر ',` **__${message.guild.name}__**`)
      .addField('عدد الاعضاء',`**__${message.guild.memberCount}__**`)
  .setColor('RANDOM')
message.channel.send({ embed: norElden });
  }
});


client.on('message', message => {
    const prefix = '!'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField(': 🔱 | اسمك',`**<@` + `${z.id}` + `>**`, true)
.addField(': 🛡 | ايديك', "**"+ `${z.id}` +"**",true)
.addField(': ♨ | Playing','**'+y+'**' , true)
.addField(': 📛 | تاق حسابك',"**#" +  `${z.discriminator}**`,true)
.addField('**: 📆 | التاريح الذي انشئ فيه حسابك**', message.author.createdAt.toLocaleString())
.addField("**: ⌚ | تاريخ دخولك للسيرفر**", message.member.joinedAt.toLocaleString())    

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});





client.on('message', message => {
    if(message.channel.type === "dm") return;
       if (message.content === prefix + "bot") {
       let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Servers:globe_with_meridians:" , client.guilds.size)
    .addField("Users:busts_in_silhouette:" , client.users.size)
    .addField("Channels:books:" , client.channels.size)
    message.channel.sendEmbed(embed);
      }
  });
  
  
  
  client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('!bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Lions Throne";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('البرودكاست') .addField('السيرفر', message.guild.name) .addField('المرسل', message.author.username)
       .addField('الرساله', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    })

	client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('468473347114663976');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online: ${currentSize}`);
  if (currentSize !== size) channel.setName(`Voice Online: ${currentSize}`);
});




client.on('guildCreate', guild => {
  client.channels.get("480964398375108608").send(` **تم  اضافة البوت في سيرفر جديد **
اسم السيرفر: __${guild.name}__
اونر السيرفر: __${guild.owner}__**`)
}); 


client.on('message', message => {
    if (message.author.bot) return;
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('bcall')){
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 if(!message.author.id === '246256928374784001') return;
message.channel.sendMessage('**جار ارسال الرسالة |**✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



  client.on('message', message => {
     if(message.content.startsWith(prefix +"bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`عـدد المبندين بالسيرفر **${bans.size}** آشخاص`))
  .catch(console.error);
}
});
  



client.on('message', message => {
	var prefix = "!"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('**هاذا الامر فقط للسيرفرات !!  **');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("** ليست لديك صلاحيات للطرد ! <: ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**ليس لدي صلاحية > ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**يـرجى إعطاء منشن للي تبي تطرده <: **");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي !!**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose: ** آهــلا بـك في سـيرفر Lions Throne :rose:  :fire: 
:crown: آســمك  ${member}:crown:  
**انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})




client.on('message', message => {
const prefix = "!";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**آنـت لاتمتلك صلاحية > KICK_MEMBERS Permission**").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**لـيست لدي صلاحية > KICK_Members Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("**يـرجى إعطاء منشن للي تبي تطرده**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لآيمـكنك طـرد شـخص آعلى رتبة من البوت** ! <:");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("427166139345403905").send({embed : banembed})
}
});





const perfix = '!';
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'sendto')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
      let Emoko = msg.mentions.members.first()
      if (!Emoko) return msg.reply(`**يجب تحديد الشخص**`)
      let EmokoEmbed = new Discord.RichEmbed()
      .setTitle(`** رسالة جديدة مـوجهه لـك:new_moon_with_face: **`)
      .setDescription(args.join(" "))

      client.users.get(`${Emoko.id}`).send(EmokoEmbed)
      msg.reply(`**تم ارسال الرساله**`)
    }
});






const YTDL = require('ytdl-core');
const ffmpeg = require('ffmpeg');
var servers = {};
function play(connection, message, args) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(args[0]), {filter: "audioonly"});
  server.queue.shift();
  server.dispatcher.on("end", function() {
    if (server.queue[0]) play(connection, message);
    else connection.disconnect();
  });
}







if(!prefix) var prefix = "!" ; // البرفكس 

var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;

client.on("message",  message =>  {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**هــاذا الامر فقط للسيرفرات**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("اعتذر لايمكنك استخدام هاذا الامر");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}!autoC <اسم الرتبة >\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`**لايوجد رتبة بهاذا الاسم ... يرجى التحقق مره اخرى **`);  // 
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`**  لآخــذ رتبة الافلام يـرجى وضع ايموجي وسيتم اعطائك الرتبة تلقائيآً  ** ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }
});
client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name);
      if(done) reaction.remove(user); 
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
}) ;
client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
});



client.on('ready',async  => {
  let GUILDID = '378572341208416257'; // اي دي السيرفر
  let CHANNELID = '468473347114663976'; // اي دي الروم
  voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if(!guildid) throw new Error('Syntax: voiceStay function requires guildid');
    if(!channelid) throw new Error('Syntax: voiceStay function requires channelid');

    let guild = client.guilds.get(guildid);
    let channel = guild.channels.get(channelid);

    if(channel.type === 'voice') {
      channel.join().catch(e => {
        console.log(`Failed To Join :: ${e.message}`);
      });
    } else {
      console.log(`Channel Type :: ${channel.type}, It must be Voice.`);
    }
  }
});



client.on('message' , message => {
if (message.content === '!help') {
         let embed = new Discord.RichEmbed()

      .setThumbnail(message.author.avatarURL)    
      .addField("**:globe_with_meridians: الأوامر العامه**","** **")
      .addField("**!server**","**يستخدم لمعرفة معلومات السيرفر **")
      .addField("**!say**","**يـستخدم لاعادة الكلام الذي تم كتابته بعد الجملة**")
       .addField("**!support**","**للدخول الى سيرفر الدعم الفني**")
       .addField("**!roles**","**لمشاهدة رتب السيرفر كاملة بالترتيب **")
       .addField("**!avatar**","**لـعرض صورتك الشخصية **")
       .addField("**!info**","**لـمعرفة اعضاء السيرفر**")
       .addField("**!id**","**لعـرض هويتك**")
       .addField("**!bot**","**لـمعرفة معلومات البوت وعدد السيرفرات بالبوت**")
       .addField("**!bans**","**لرؤية عدد الاشخاص المحظورين من دخول السيرفر**")

      .addField("**:radioactive: اوامر الاداره**","** **")
       .addField("**عـذرا ولاكن انت لاتمتلك صلاحيات لرؤية اوامر الادارة**","**Lions Throne**")


.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});


client.on('message', message => {
  if(message.author.bot) return;
    if(message.content === prefix + 'gm') {
      var sg = client.guilds.filter(o => o.memberCount > 50).map(e => e.name).join('\n')
      var gl = client.guilds.filter(g => g.memberCount < 50).map(n => n.name).join('\n')
      var gm = new Discord.RichEmbed()
      .setDescription('- **قائمة اعضاء السيرفرات**')
      .setColor('RANDOM')
      .addField('- **قائمة السيرفرات التي تملك فوق ال50 عضو**', sg)
      .addField('- **قائمة السيرفرات التي تملك اقل من 50 عضو**', gl)
      .setFooter(`Guilds: ${client.guilds.size}, Users: ${client.users.size}, Channels: ${client.channels.size}.`)
      message.channel.send(gm);
    }
});
	

client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا 
