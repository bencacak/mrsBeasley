module.exports = {
	name: 'echo',
	description: 'Make Mrs. Beasley repeat your message with an auto-delete feature',
	async execute(msg, args) {
	  
        const command = "!echo ";

        const input = msg.content.split(command)[1];
        let output = [];

        const echo = () => {
            return output.push(input);
        };
        
        //Keeps code from breaking if !input
        if (!input) {
            return;
        } else {
            try {
                await echo();
                await msg.channel.send(output);
                await msg.delete({ timeout: 100 });
            } catch (err) {
                console.log(err);
            };
        };

	},
};