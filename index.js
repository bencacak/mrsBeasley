// Imports discord.js library and required metadata
const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const { donate } = require("./modules/addresses.js");

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
};

client.on('message', msg => {
    // Keeps bot from responding to self and other bots
	if (msg.author.bot) return;
    
    // Starts easter egg triggers
    if (msg.content.includes("gorl") || msg.content.includes("Gorl")) msg.channel.send("*gorl*");
    if (msg.content.includes("poop")) msg.channel.send("That reminds me, one time ||I had to have my poop shaved off my butt at the vet.||");
    if (msg.content === 'help' || msg.content === 'Help') {
        const { help } = require("./modules/kittydata.js");
        return msg.channel.send(help());
    };
    if (msg.content.includes(" donat") || msg.content.includes("Donat")) msg.channel.send(donate);
    
	const args = msg.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(msg, args);
	} catch (error) {
		console.error(error);
		msg.reply('NyanNyanNyanNyanNyanNyanNyan...');
	};
});

//Logs to the console when it is ready
client.once('ready', () => {
    
	console.log(client.user.tag + " is live!")

});

//Gets the token from the .env
client.login(process.env.TOKEN);