const { chugImg } = require("../modules/kittydata.js");

module.exports = {
	name: 'chug',
	description: 'sends chug gifs',
	async execute(msg, args) {    
        
        //identifies the command in the message
        const command = '!chug';

        //splits the command from the rest of the message
        const input = msg.content.split(command)[1];

        if (!input) {
            return;
        } else {
            msg.channel.send(`${input}, CHUG! CHUG! CHUG!`)
            msg.channel.send(chugImg[Math.floor(Math.random() * chugImg.length)]);
        };
    },
};
