const Discord = require('discord.js');

const TOKEN = '{NDUxOTQ1OTgzNDg4NTU3MDg2.DrmzLg.RuxRXJmae1p9iZnj8PiBD5NAavI}';

var bot = new Discord.Client();

bot.on("ready", function() {
	if (message.author.equal(bot.user)) return;
	
	if (message.content == "Hello") {
		message.channel.sendMessage("meh");
	}
	});
	
bot.login(TOKEN);
