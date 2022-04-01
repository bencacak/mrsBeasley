module.exports = {
	name: 'manifest',
	description: 'Will manifest good things for you',
	async execute(msg, args) {
	  
        const text = msg.content.split("!manifest ")[1]
        
        if (text) {
            msg.channel.send(`✨ ${text} ✨`)
        } 

	},
};