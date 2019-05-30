const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = '.';


bot.on('ready', ()=> {
    bot.user.setPresence({ game: { name: 'DrawLife | V1', type: 1 } })
    console.log('Bot Ready');
});

bot.login(process.env.TOKEN);









const uneCommande = '!report'

bot.on('message', message => {
  if (message.content.startsWith(uneCommande)) {
    const str = message.content.substring(uneCommande.length)
    let premier = new Discord.RichEmbed()
    .setAuthor('Merci pour ton Rapport ' + (message.member.displayName) + " !", (message.author.avatarURL))
    .setDescription("=========================================")
    .setColor("#15f153")
    .addBlankField()
    .addField("Rapport de Bug:", str)
    .setThumbnail((message.author.avatarURL))
    .setFooter((message.member.displayName))
    .setTimestamp();
    let reportEmbed = new Discord.RichEmbed()
    .setAuthor('Rapport de: ' + (message.member.displayName), (message.author.avatarURL))
    .setDescription("=========================================")
    .setColor("#15f153")
    .addBlankField()
    .addField("Rapport de Bug:", str)
    .setThumbnail((message.author.avatarURL))
    .setFooter((message.member.displayName))
    .setTimestamp();
    const reportschannel = message.guild.channels.find(`name`, "bug-tracker");
    message.delete().catch(O_o=>{});
    message.channel.sendEmbed(premier);
    reportschannel.sendEmbed(reportEmbed);
  }
});


const prems = "ouvert";
bot.on('message', message => {
  if (message.content.includes(prems)) {
    message.reply("Le serveur est en maintenance car nous passons en 1.12, tout doit être refait en plugin et en mod au niveau du développement. Ce sera ainsi beaucoup plus optimisé, nous améliorons aussi la map et nous rajoutons des nouveautés ! :wink: N'hésite pas à aller dans les salons <#492737586507415583> et <#492737650122555393> pour te mettre à jour et à check le <#492737707139661825> :wink:")
  }
});

const deux = "ouver";
bot.on('message', message => {
  if (message.content.includes(deux)) {
    message.reply("Le serveur est en maintenance car nous passons en 1.12, tout doit être refait en plugin et en mod au niveau du développement. Ce sera ainsi beaucoup plus optimisé, nous améliorons aussi la map et nous rajoutons des nouveautés ! :wink: N'hésite pas à aller dans les salons <#492737586507415583> et <#492737650122555393> pour te mettre à jour et à check le <#492737707139661825> :wink:")
  }
});

const trois = "ouverts";
bot.on('message', message => {
  if (message.content.includes(trois)) {
    message.reply("Le serveur est en maintenance car nous passons en 1.12, tout doit être refait en plugin et en mod au niveau du développement. Ce sera ainsi beaucoup plus optimisé, nous améliorons aussi la map et nous rajoutons des nouveautés ! :wink: N'hésite pas à aller dans les salons <#492737586507415583> et <#492737650122555393> pour te mettre à jour et à check le <#492737707139661825> :wink:")
  }
});

const quatre = "ouverture";
bot.on('message', message => {
  if (message.content.includes(quatre)) {
    message.reply("Le serveur est en maintenance car nous passons en 1.12, tout doit être refait en plugin et en mod au niveau du développement. Ce sera ainsi beaucoup plus optimisé, nous améliorons aussi la map et nous rajoutons des nouveautés ! :wink: N'hésite pas à aller dans les salons <#492737586507415583> et <#492737650122555393> pour te mettre à jour et à check le <#492737707139661825> :wink:")
  }
});

const cinq = "ouvre";
bot.on('message', message => {
  if (message.content.includes(cinq)) {
    message.reply("Le serveur est en maintenance car nous passons en 1.12, tout doit être refait en plugin et en mod au niveau du développement. Ce sera ainsi beaucoup plus optimisé, nous améliorons aussi la map et nous rajoutons des nouveautés ! :wink: N'hésite pas à aller dans les salons <#492737586507415583> et <#492737650122555393> pour te mettre à jour et à check le <#492737707139661825> :wink:")
  }
});

const six = "open";
bot.on('message', message => {
  if (message.content.includes(six)) {
    message.reply("Le serveur est en maintenance car nous passons en 1.12, tout doit être refait en plugin et en mod au niveau du développement. Ce sera ainsi beaucoup plus optimisé, nous améliorons aussi la map et nous rajoutons des nouveautés ! :wink: N'hésite pas à aller dans les salons <#492737586507415583> et <#492737650122555393> pour te mettre à jour et à check le <#492737707139661825> :wink:")
  }
});
