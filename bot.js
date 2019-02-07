const Discord = require("discord.js"); // بكج
const client = new Discord.Client({disableEveryone: true});

client.on('message', message => {
  var prefix = "!"
    var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
if (message.content.startsWith(prefix + 's')) {
                                       message.delete()
  if (message.author.id !== '518620483764224001') return;
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(`**\`${argresult}\` :تم تغيير الحالة الى**`).then(msg => {msg.delete(7000)});

    
} 


 });


client.login(process.env.BOT_TOKEN);
