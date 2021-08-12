//Importing discord.js libraries
const Discord = require("discord.js");
const client = new Discord.Client();

// Imported function from different modules that I created to keep code a bit cleaner here
const data = require("./modules/kittydata.js");
const convertToCat = require("./modules/converttocat.js");
const bmiInfo = require("./modules/bmiinfo.js");
const emojifierFunction = require("./modules/emojifierfunction.js");
const bingo = require('./modules/bingorolemanager.js');
const tdeeInfo = require('./modules/tdeeinfo.js');
const qotd = require('./modules/qotd.js');
const converter = require('./modules/converter.js');
const eightball = require('./modules/eightball.js');

const config = require('./config.json');

//Imported functions from other JS libraries
const fitnessCalculatorFunctions = require("fitness-calculator");
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

//Looks for keywords in messages to reply to the channel and users
client.on("message", async msg => {
  //Blocks beasleyBot from responding to herself
  if (msg.author.bot) { 
    return;
  };
  
  // !/? Commands section

  //Will pull up a list of commands
  if (msg.content.startsWith('!help') || msg.content === 'help' || msg.content === 'Help') {

    const help = data.help;
    return msg.channel.send(help());

  };

  //I want to make a feature where the bot will react to the last sent message in the chat
  if (msg.content.startsWith('!react')) {
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
  }

  //bot will choose between prompts based on a user's input. 
  if (msg.content.startsWith('!choose')) {
    const command = '!choose';
    const input = msg.content.split(command)[1];
    const values = input.split(', ');
    return msg.channel.send(values[Math.floor(Math.random() * values.length)]);
  };

  //Starts the BMI/TDEE calculator commands
  
  if (msg.content.startsWith('!bmi')) {  
    const command = '!bmi ';
    const input = msg.content.split(command)[1];
    const values = input.split(' ');

    const height = Number.parseFloat(values[0]) * 2.54;
    const weight = Number.parseFloat(values[1]) / 2.21;
    
    const bmi = fitnessCalculatorFunctions.BMI(height, weight);

    const output = bmiInfo.imperialBMI;
  
    msg.reply(output(height, weight, bmi));
  };

  if (msg.content.startsWith('!metric bmi')) {  
    const command = '!metric bmi ';
    const input = msg.content.split(command)[1];
    const values = input.split(' ');

    const height = Number.parseFloat(values[0]);
    const weight = Number.parseFloat(values[1]);
    
    const bmi = fitnessCalculatorFunctions.BMI(height, weight);
    
    const output = bmiInfo.metricBMI;

    msg.reply(output(height, weight, bmi));
};

if (msg.content.startsWith('!tdee')) {
    const command = '!tdee ';
    const input = msg.content.split(command)[1];
    input.toLowerCase;
    const values = input.split(' ');

    let sex;
    const age = Number.parseFloat(values[1]);
    const height = Number.parseFloat(values[2]) * 2.54;
    const weight = Number.parseFloat(values[3]) / 2.21;

    if (values[0] === 'm' || values[0] === 'male') {
      sex = 'male';
    } else {
      sex = 'female';
    };
    

    const output = tdeeInfo.imperialTdee;

    msg.reply(output(sex, age, height, weight));
    
  };

  if (msg.content.startsWith('!metric tdee')) {
    
    const command = '!metric tdee ';
    const input = msg.content.split(command)[1];
    input.toLowerCase;
    const values = input.split(' ');

    let sex;
    const age = Number.parseFloat(values[1]);
    const height = Number.parseFloat(values[2]);
    const weight = Number.parseFloat(values[3]);

    if (values[0] === 'm' || values[0] === 'male') {
      sex = 'male';
    } else {
      sex = 'female';
    };
    
    const output = tdeeInfo.metricTdee;

    msg.reply(output(sex, age, height, weight));
    
  };

  //Will assign a user a role if they get bingo; makes creating certificates easier
  if (msg.content.startsWith('!bingo')) {

    const date = {
      day: dayjs().date(),
      month: dayjs().month(),
      dayOfWeek: dayjs().day()
    };
    
    const weekdays = bingo.weekdays;
    const roleFinder = bingo.roleFinder;
    const months = bingo.months;
    const member = msg.member;

    if (roleFinder(date.month, date.day) === false) {
      return msg.reply(`There is no bingo challenge happening right now. Please ping a captain for details.`)
    } else {
      try {
        await msg.react('🇧');
        await msg.react('🇮');
        await msg.react('🇳');
        await msg.react('🇬');
        await msg.react('🇴');
        await msg.react('❕');
        await member.roles.add(roleFinder(date.month, date.day));
        await msg.reply(`Nice work on getting bingo on ${weekdays[date.dayOfWeek]}, ${months[date.month]} ${date.day}. Wet nose kisses for you!`);
      }
      catch (err) {
        msg.reply('This feature is exclusive to team Road Trippin\'.');
        console.log(err);
      };
    };
    
  }; //Ends !bingo listener

  //Executes the !log/?schedule commands for the loseit server, pulls from arrays above
  if (msg.content.startsWith('!forms')) {
    msg.channel.send(data.loseitLogs);
  };

  if (msg.content.startsWith('!schedule')) {
    msg.channel.send(data.loseitSchedule);
    //Alternatively, you can have the bot summon a screenshot of the schedule
  };

  //Will execute the !/?eightball command
  if (msg.content.startsWith('!eightball')) {
    //The eightBall function for ?/!eightball commands
    const command = '!eightball ';
    const input = msg.content.split(command)[1];
    
    if (!input) {
      msg.reply('You have to ask me a question!')
    } else {
      try {
      await msg.channel.send(eightball.eightball(input));
      }
      catch (err) {
        msg.reply(`Something went wrong. Please try again.`);
        console.log(err);
      };
    };
  };//Ends !eightball listener

  if (msg.content.startsWith('!chug')) {

    //identifies the command in the message
    const command = '!chug';

    //splits the command from the rest of the message
    const input = msg.content.split(command)[1];
    
    const chugImg = data.chugImg;

    if (!input) {
      return;
    } else {
      msg.channel.send(`${input}, CHUG! CHUG! CHUG!`)
      msg.channel.send(chugImg[Math.floor(Math.random() * chugImg.length)]);
    };

  }; //ends event listener

  // Will convert text into lettered emojis
  if (msg.content.startsWith('!spell')) {
    let output = emojifierFunction.output;
    const spell = emojifierFunction.spell;
    const clearOutput = emojifierFunction.clearOutput;
    const command = '!spell';
    
    const userInput = msg.content.split(command)[1];

    if (!userInput || userInput === false) {
      return msg.reply('You have to give me something to work with!')
    } else {
    await spell(userInput.toLowerCase());  
    await msg.channel.send(output.join(' '));
    await clearOutput();
    };
  };

  // Will convert a user's message to a North American Dialect of cat language
  if (msg.content.startsWith('!converttocat')) {
    
    //separates the command from the rest of the message
    const command = '!converttocat'
    const userInput = msg.content.split(command)[1]; //splits command from rest of string 
    
    const convert = convertToCat.convertToCat;
    //Keeps code from breaking if !userInput
    if (!userInput || userInput === false || userInput === 'meow') {
      return msg.reply('You have to give me something to work with!')
    } else {
    return msg.reply(convert(userInput.toLowerCase()));
    };
  };

  if (msg.content.startsWith('!convert')) {

    const values = msg.content.split(' ');

    const startingValue = values[1].toLowerCase();
    const metric = values[2].toLowerCase();
    const newMetric = values[4].toLowerCase();

    if (values.length !== 5 && values[1] !== 'help' && values[1] !== 'units'){
      
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

  };//Ends the *new* convert command listener

  /*
  if (!msg.content.startsWith('!convert') && converter.autoConvertTriggers.some(trigger => msg.content.includes(trigger))) {
    
    const input = msg.content;
    const value = Number.parseFloat(input);
    //msg.channel.send('I am a triggered gorl.')
    
    if (Number.isNaN(value)) {
      return;
    } else {
      msg.reply(converter.autoConvert(input));
    };

  };
  */

  if (msg.content.startsWith('!roll')) {
    
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
  }; 

  //Will have bot repeat what a user says, user's message is automatically deleted.
  if (msg.content.startsWith('echo >>') || msg.content.startsWith('Echo >>')) {
    
    let command; 
    if (msg.content.startsWith('echo >>')) {
      command = 'echo >>'
    } else {
      command = 'Echo >>'
    };

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
        //Will delete the message from a user with the command
        await msg.delete({ timeout: 100 });
        await console.log(`Deleted message "${input}" from ${msg.author.username} after 100ms`);
      } catch (err) {
        console.log(err);
      };
    };
     
  };

  // Start of the $ commands (for admin use)

  if (msg.content.startsWith('$')) {
    
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/);
	  const command = args.shift().toLowerCase();

    const deleteQuestion = qotd.deleteQuestion;
    const updateQuestions = qotd.updateQuestions;
    const db = qotd.db;   

    if (command === 'qotd') {
      db.get("questions").then(questions => {
        const question = questions[Math.floor(Math.random() * questions.length)];
          //Sends QOTD to the main chat, insert channel ID as a string
          client.channels.cache.get('859954213371117609').send(qotd.qotdOuput(question));
          client.channels.cache.get('832632933403459594').send(`Please copy, paste, and send the following messsage:`);
          client.channels.cache.get('832632933403459594').send(`\`$del ${question}\``);
        });
      };

    if (command === 'new') {
      question = msg.content.split("$new ")[1];
      updateQuestions(question);
      msg.channel.send(`:floppy_disk: New question saved: \`${question}\``);
    };

    if (command === 'del') {
      
      index = msg.content.split("$del ")[1];
      deleteQuestion(index);
      msg.channel.send(`Question deleted: \`${index}\``);
      
    };

    if (command === 'list') {
      db.get("questions").then(questions => {
        msg.channel.send(questions);
      });
    };

  }; //ends command prefix listener

}); //Ends message listener

//Logs to the console when it is ready
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
  //client.user.setAvatar('./modules/assets/avatar.jpg');

  client.user.setActivity('Chase Milo Around the House');

  //Kill switch for data base. Uncomment and re-run code to delete all data. Then re-comment out code and re-run again
  const db = qotd.db;
  //db.delete("questions").then(() => {});
});

//Gets the token from the .env
client.login(process.env.TOKEN);