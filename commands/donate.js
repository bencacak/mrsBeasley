const donate = require("../modules/addresses.js");

module.exports = {
	name: 'donate',
	description: 'Help out a poor cat',
	async execute(msg, args) {

        let input = msg.content;
        input = input.toLowerCase();
        
        msg.channel.send(donate.donate);


	},
};