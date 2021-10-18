module.exports = {
	name: 'roll',
	description: 'Make Mrs. Beasley roll virtual dice',
	async execute(msg, args) {
	  
    const command = '!roll';
    const input = msg.content.split(command)[1];
    const values = input.match(/\d+/g);
    
    let numOfDice = Number(values[0]);
    let numOfSides = Number(values[1]);
    
    if (!values[1]) {
        numOfSides = Number(values[0]);
        numOfDice = 1;
    };
    
    let output = [];
    //let total = 0;
    const rollDice = (dice, sides) => {
        for (i = 0; i < dice; i++) {
            let randomNum = Math.ceil(Math.random() * sides);
            output.push(randomNum);
        };
        return output;
    };//ends rollDice();

    

    if (!values) {
        return;
    } else {
        rollDice(numOfDice, numOfSides);
        msg.channel.send(`**Your roll(s):** ${output.join(', ')}`);
    };
    if (numOfDice > 1) {
        let sum = 0;
        for (i = 0; i < output.length; i++) {
            sum += output[i];
        };
        msg.channel.send(`**Your total is:** ${sum}`);
    };
	},
};