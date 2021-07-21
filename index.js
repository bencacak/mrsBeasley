//Importing discord.js libraries
const Discord = require("discord.js");
const client = new Discord.Client();

// Imported function from different modules that I created to keep code a bit cleaner here
const data = require("./modules/kittyData.js");
const convertToCat = require("./modules/convertToCat.js");
const bmiInfo = require("./modules/bmiInfo.js");
const emojifierFunction = require("./modules/emojifierFunction.js");
const choose = require("./modules/choose.js");
const bingo = require('./modules/bingoRoleManager.js');
const tdeeInfo = require('./modules/tdeeInfo.js');
const qotd = require('./modules/QOTD.js');
const config = require('./config.json');


//Imported functions from other JS libraries
const fitnessCalculatorFunctions = require("fitness-calculator");
const dayjs = require('dayjs');


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
    return msg.channel.send(help);

  };

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
        await member.roles.add(roleFinder(date.month, date.day));
        await msg.reply(`Nice work on getting bingo on ${weekdays[date.dayOfWeek]}, ${months[date.month]} ${date.day}. Wet nose kisses for you!`);
        await msg.react('🇧');
        await msg.react('🇮');
        await msg.react('🇳');
        await msg.react('🇬');
        await msg.react('🇴');
        await msg.react('❕');
      }
      catch (err) {
        msg.reply('Something went wrong. Please try again.');
      };
    };
    
  };

  //Executes the !log/?schedule commands for the loseit server, pulls from arrays above
  if (msg.content.startsWith('!forms')) {
    const loseitLogs = data.loseitLogs;
    msg.channel.send(loseitLogs);
  };

  if (msg.content.startsWith('!schedule')) {
    let loseitSchedule = data.loseitSchedule
    msg.channel.send(loseitSchedule);
    //Alternatively, you can have the bot summon a screenshot of the schedule
  };

  //Will execute the !/?eightball command
  if (msg.content.startsWith('!eightball')) {
    //The eightBall function for ?/!eightball commands
    const command = '!eightball ';
    const input = msg.content.split(command)[1];
    
    const eightBallResponse = data.eightBallResponses;
    
    if (!input) {
      msg.reply('You have to ask me a question!')
    } else {
      try {
      const output = await new Discord.MessageEmbed()
        .setColor('#000')
        .setTitle(eightBallResponse[Math.floor(Math.random() * eightBallResponse.length)])
        .setAuthor('Mrs. Beasley Says:')
        .attachFiles(['./modules/assets/mrsBeasley.jpg'])
        .setThumbnail('attachment://mrsBeasley.jpg')
        .setDescription(input)
        .attachFiles(['./assets/mrsBeasley.jpg'])
        .setThumbnail('attachment://mrsBeasley.jpg')
        .setTimestamp()
        .setFooter('Meow Meow'); 
      await msg.channel.send(output);
      }
      catch (err) {
        msg.reply(`Something went wrong. Please try again.`);
      };
    };
  };

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
  if (msg.content.startsWith('!spell') || msg.content.startsWith('?spell')) {
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

  //Will handle imperial/metric conversions
  if (msg.content.startsWith('!convert')) {

    const command = '!convert';
    const userInput = msg.content.split(command)[1]; //splits command from rest of string
    const userValue = Number.parseFloat(userInput);

    const convert = value => {
      value = userValue;
      const input = userInput.toLowerCase();
      let convertedValue;
      let newMetric;
      
      if (input.includes('kilogram') || input.includes('kg')) {
        convertedValue = value * 2.205;
        newMetric = 'pounds';
      } else if (input.includes('pound') || input.includes('lb')) {
        convertedValue = value / 2.205;
        newMetric = 'kilograms';
      } else if (input.includes('kilometer') || input.includes('km')) {
        convertedValue = value * (61/100);
        newMetric = 'miles';
      } else if (input.includes('mi')) {
        convertedValue = value / (61/100);
        newMetric = 'kilometers';
      } else if (input.includes('c')) {
        convertedValue = value * 1.8 + 32;
        newMetric = 'degrees fahrenheit';
      } else if (input.includes('f')) {
        convertedValue = (value - 32) / 1.8;
        newMetric = 'degrees celsius';
      } else {
        convertedValue = false;
        newMetric = false;
      };

      if (convertedValue && newMetric) {
        return `${input} is equal to ${convertedValue} ${newMetric}.`;
      } else {
        return 'I can\'t handle that conversion. Use `!conversions` or `?conversions` to pull up a list of unit conversions.';
      };

    }; // Closes function
     
    // Keeps the code from breaking if userInput is false 
     if (!userInput || userInput === false) {
      return msg.reply('I can\'t handle that conversion. Use `!conversions` or `?conversions` to pull up a list of unit conversions.');
      } else {
      return msg.reply(convert(userValue));
      };
  };

  if (msg.content.startsWith('!conversions')) {
    
    const conversions = data.conversions;
    return msg.channel.send(conversions);
  };

  //dice rolling feature I hope to have working soon
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
      echo();
      msg.channel.send(output);
      //Will delete the message from a user with the command
      msg.delete({ timeout: 500 })
      .then(msg => console.log(`Deleted message "${input}" from ${msg.author.username} after 0.5 seconds`))
      .catch(console.error);
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
      msg.channel.send(`New question added: \`${question}\``);
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
  client.user.setActivity('Catch the Red Dot');

  //Kill switch for data base. Uncomment and re-run code to delete all data
  const db = qotd.db;
  //db.delete("questions").then(() => {});
});

//Gets the token from the .env
client.login(process.env.TOKEN);