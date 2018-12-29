const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = '.';


bot.on('ready', ()=> {
    bot.user.setPresence({ game: { name: 'DrawLife | V1', type: 1 } })
    console.log('Bot Ready');
});

bot.login(process.env.TOKEN);









const uneCommande = '.'

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
