module.exports = {
	name: 'react',
	description: 'Make Mrs. Beasley react to the last message in the chat',
	async execute(msg, args) {
	  
        //Gets the last sent message in the channel
        const messages = await msg.channel.messages.fetch({ limit: 2 });
        const lastMessage = messages.last();

        //Separtes the command from the emote 
        const command = '!react '
        let input = msg.content.split(command)[1];
    
        try {

            await lastMessage.react(input);
            await console.log(`${msg.author.username} reacted to ${lastMessage} with ${input}`);
            await msg.delete({ timeout: 100});

        } catch (err) {

            await msg.delete({ timeout: 100});
            await msg.channel.send('Please insert only one emoji with a single space between the command and desrired reaction. *Note:* If you have Nitro, I must be in the server that contains the emoji you want to react with.');
            console.log(err);
            
        };
	},
};