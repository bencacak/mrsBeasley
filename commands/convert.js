const converter = require("../modules/converter.js");

module.exports = {
	name: 'convert',
	description: 'Make Mrs. Beasley handle conversions to specified units',
	async execute(msg, args) {
	  
    const values = msg.content.split(' ');

    const startingValue = values[1];
    const metric = values[2];
    const newMetric = values[4];

    if (values.length !== 5 && values[1] !== 'help' && values[1]!== 'units'){
      
        msg.reply('If I am going to do math for you, I\'m going to picky about the syntax.');
        msg.channel.send('Use `!convert help` if you need assistance.');

    } else if (values[1] === 'help') {
        msg.channel.send(converter.help);
    } else if (values[1] === 'units') {
        msg.channel.send(JSON.stringify(converter.units.mass));
        msg.channel.send(JSON.stringify(converter.units.volume));
        msg.channel.send(JSON.stringify(converter.units.length));
      } else {
        try {
            await msg.channel.send('Hold on, let me my calculator...');
            await setTimeout(function(){ 
            msg.reply(converter.converter(startingValue, metric, newMetric));
            }, 3000);
        } catch (err) {
            msg.channel.send('Something went wrong; use `!convert help` for help.');
            console.log(err);
        };//Ends try block
    };//Ends conditional

	},
};