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
                    num = "🇦"
                    break;
                case 1:
                    num = "🇧"
                    break;
                case 2:
                    num = "🇨"
                    break;
                case 3:
                    num = "🇩"
                    break;
                case 4:
                    num = "🇪"
                    break;
                case 5:
                    num = "🇫"
                    break;
                case 6:
                    num = "🇬"
                    break;
                case 7:
                    num = "🇭"
                    break;
                case 8:
                    num = "🇮"
                    break;
                case 9:
                    num = "🇯"
                    break;
                case 10:
                    num = "🇰"
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
                      num = "🇦"
                      break;
                  case 1:
                      num = "🇧"
                      break;
                  case 2:
                      num = "🇨"
                      break;
                  case 3:
                      num = "🇩"
                      break;
                  case 4:
                      num = "🇪"
                      break;
                  case 5:
                      num = "🇫"
                      break;
                  case 6:
                      num = "🇬"
                      break;
                  case 7:
                      num = "🇭"
                      break;
                  case 8:
                      num = "🇮"
                      break;
                  case 9:
                      num = "🇯"
                      break;
                  case 10:
                      num = "🇰"
                      break;
                  default: 
                      num = "*"
                }
                sentMessage.react(num);

            }
        })

	},
};