module.exports = {
	name: 'poll',
	description: 'command description',
	async execute(msg, args) {
	  
        const message = msg.content.split("!poll ")[1]
        const question = message.split("?")[0]
        let responses = message.split("?")[1]
        responses = responses.split(";")

        let output = [
            question + "?",
        ]

        for (let i = 0; i < responses.length; i++) {
            let num;
            switch(i) {
                case 0:
                    num = "0️⃣"
                    break;
                case 1:
                    num = "1️⃣"
                    break;
                case 2:
                    num = "2️⃣"
                    break;
                case 3:
                    num = "3️⃣"
                    break;
                case 4:
                    num = "4️⃣"
                    break;
                case 5:
                    num = "5️⃣"
                    break;
                case 6:
                    num = "6️⃣"
                    break;
                case 7:
                    num = "7️⃣"
                    break;
                case 8:
                    num = "8️⃣"
                    break;
                case 9:
                    num = "9️⃣"
                    break;
                case 10:
                    num = "🔟"
                    break;
                default: 
                    num = "*" 
            }
            output.push(num + " : " + responses[i])
        }
        msg.channel.send(output).then(sentMessage => {
            for (let i = 0; i < output.length - 1; i++) {
                let num;
                switch(i) {
                    case 0:
                        num = "0️⃣"
                        break;
                    case 1:
                        num = "1️⃣"
                        break;
                    case 2:
                        num = "2️⃣"
                        break;
                    case 3:
                        num = "3️⃣"
                        break;
                    case 4:
                        num = "4️⃣"
                        break;
                    case 5:
                        num = "5️⃣"
                        break;
                    case 6:
                        num = "6️⃣"
                        break;
                    case 7:
                        num = "7️⃣"
                        break;
                    case 8:
                        num = "8️⃣"
                        break;
                    case 9:
                        num = "9️⃣"
                        break;
                    case 10:
                        num = "🔟"
                        break;
                    default: 
                        num = "" 
                }
                sentMessage.react(num);

            }
        })

	},
};