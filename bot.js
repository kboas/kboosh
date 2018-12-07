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

client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => {
    client.channels.get("518513612139134986").join(); 
    });

client.login(process.env.BOT_TOKEN);
