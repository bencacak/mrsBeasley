const emojifierFunction = require("../modules/emojifierfunction.js")

module.exports = {
	name: 'spell',
	description: 'Have Mrs. Beasley spell out a message in emojis',
	async execute(msg, args) {
	  
        let output = emojifierFunction.output;
        const spell = emojifierFunction.spell;
        const clearOutput = emojifierFunction.clearOutput;
        const command = '!spell';
        
        const userInput = msg.content.split(command)[1];

        if (!userInput || userInput === false) {
            return msg.reply('You have to give me something to work with!')
        } else {
            await spell(userInput.toLowerCase());  
            await msg.channel.send(output.join(' '));
            await clearOutput();
        };

    },
};