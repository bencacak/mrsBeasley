const Discord = require('discord.js');
const { eightball } = require("../modules/eightball.js");

module.exports = {
	name: 'eightball',
	description: 'Ask Mrs. Beasley your fortune',
	async execute(msg, args) {
	  
        //The eightBall function for ?/!eightball commands
        const command = '!eightball ';
        const input = msg.content.split(command)[1];
    
        if (!input) {
            msg.reply('You have to ask me a question!')
        } else {
            try {
                await msg.channel.send(eightball(input));
            }
            catch (err) {
                msg.reply(`Something went wrong. Please try again.`);
                console.log(err);
            };
        };

	},
};
