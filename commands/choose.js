module.exports = {
	name: 'choose',
	description: 'Make Mrs. execute decisions for you',
	async execute(msg, args) {
	  
        const command = '!choose';
        const input = msg.content.split(command)[1];
        const values = input.split(', ');
        return msg.channel.send(values[Math.floor(Math.random() * values.length)]);

	},
};