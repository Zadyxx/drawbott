const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = '$';


bot.on('ready', ()=> {
    bot.user.setPresence({ game: { name: 'DrawLife | V1', type: 1 } })
    console.log('Bot Ready');
});

bot.login(process.env.TOKEN);





bot.on('message', message => {
  if (message.content === PREFIX + "trailer") {
    message.channel.send("Voici le lien du Trailer: https://www.youtube.com/watch?v=tCCI5TCFn8c");
  }
  if (message.content === PREFIX + "info") {
    let info = new Discord.RichEmbed()
    .setAuthor('DrawLife V2 | Bot 1.0.0')
    .setDescription("=========================================")
    .setColor("#15f153")
    .addBlankField()
    .addField("Site:", "http://drawlife.fr/")
    .addBlankField()
    .addField("TeamSpeak:", "54.37.126.167:9750")
    .addBlankField()
    .addField("Version du bot:", "1.0.0")
    message.channel.sendEmbed(info);
  if (message.content === PREFIX + "ouverture" ) {
    message.channel.send("Le serveur ouvrira d'ici peu! Regarde le salon 'spoils' afin d'en savoir plus !");
  }
  } 
});




const uneCommande = '!'

bot.on('message', message => {
  if (message.content.startsWith(uneCommande)) {
    const str = message.content.substring(uneCommande.length)
    let premier = new Discord.RichEmbed()
    .setAuthor('Merci pour ton Idée/Suggestion ' + (message.member.displayName) + " !", (message.author.avatarURL))
    .setDescription("=========================================")
    .setColor("#15f153")
    .addBlankField()
    .addField("Suggestion:", str)
    .setThumbnail((message.author.avatarURL))
    .setFooter((message.member.displayName))
    .setTimestamp();
    let reportEmbed = new Discord.RichEmbed()
    .setAuthor('Idée de: ' + (message.member.displayName), (message.author.avatarURL))
    .setDescription("=========================================")
    .setColor("#15f153")
    .addBlankField()
    .addField("Suggestion:", str)
    .setThumbnail((message.author.avatarURL))
    .setFooter((message.member.displayName))
    .setTimestamp();
    const reportschannel = message.guild.channels.find(`name`, "bug-tracker");
    message.delete().catch(O_o=>{});
    message.channel.sendEmbed(premier);
    reportschannel.sendEmbed(reportEmbed);
  }
});
