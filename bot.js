const Discord = require("discord.js"); // بكج
const client = new Discord.Client({disableEveryone: true});

client.on('message', message => {
  var prefix = "!"
    var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
if (message.content.startsWith(prefix + 's')) {
                                       message.delete()
  if (message.author.id !== '358771712839385089') return;
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(`**\`${argresult}\` :تم تغيير الحالة الى**`).then(msg => {msg.delete(7000)});

    
} 


 });

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.reply('** This command only for SeArvers **')
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command === "kill"){

   var sabotage = message.mentions.users.first();
   if(sabotage == message.author)return message.reply(`**الانتحار ما زين و الله**`);
    if(sabotage === client.user) return message.reply(`** تبي تقتلني ؟ **`);
  if (sabotage < 1) {
    message.delete();
    return message.channel.sendMessage('ضع شيئا للقتل، مثل ذكر مستخدم، أو استخدام رمز تعبيري');
  }
  if (!sabotage) return message.channel.send(`Please Mention A Member to Kill :warning:`)
  message.channel.send("▄︻̷̿┻̿═━一 ${sabotage")
  .then(msg =>{
  msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :three:`);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :two:`);
  }, 1000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :one:`);
  }, 2000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :boom:`);
  }, 3000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :fire:`);///Mal Team
  }, 4000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :skull:`);
  }, 5000);
  msg.delete(7876)
  message.delete()
  })
  message.channel.send("**تم اخفاء الجريمة بنجاح 🕳 **").then(msg => msg.delete(10000));
    }
});

client.login(process.env.BOT_TOKEN);
