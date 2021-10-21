const donate = require("../modules/addresses.js");

module.exports = {
	name: 'donate',
	description: 'Help out a poor cat',
	async execute(msg, args) {

        let input = msg.content;
        input = input.toLowerCase();
        
        if (input === "!donate") {
            msg.channel.send(donate.donate);
        } else if (input.includes("bitcoin") || input.includes("btc")) {
            msg.channel.send(donate.donateBTC);
        } else if (input.includes("monero") || input.includes("xmr")) {
            msg.channel.send(donate.donateXMR);
        } else if (input.includes("ethereum") || input.includes("eth")) {
            msg.channel.send(donate.donateETH);
        } else if (input.includes("solana") || input.includes("sol")) {
            msg.channel.send(donate.donateSOL);
        } else if (input.includes("cosmos") || input.includes("atom")) {
            msg.channel.send(donate.donateATOM);
        } else {
            msg.channel.send(donate.donate);
        };

	},
};