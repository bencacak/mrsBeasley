module.exports = {
	name: "clap",
	description: "make her clap it out for you",
	async execute(msg, args) {
	  
        let message = msg.content.split("!clap ")[1]
        message = message.toUpperCase();
        message = message.split(" ")
        let output = []
        
        for (let i = 0; i < message.length; i++) {
            
            output.push(message[i])
            output.push("👏")
        }

        output.splice(0, 0, "👏")

        msg.channel.send(output.join(" "))
	},
};