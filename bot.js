const Discord = require("discord.js"); // بكج
const client = new Discord.Client({disableEveryone: true});

client.on('ready', () => {



   console.log(`----------------`);
      console.log(`By : ! EtWrk.`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
            client.user.setActivity("مـحـذوف ومـرفـوع عـلـى خـآدم .. " , {type:'WATCHING'});

    
}); // نهايه الكود




client.login("")
