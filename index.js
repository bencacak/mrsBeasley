//Importing discord.js libraries
const Discord = require("discord.js");
const client = new Discord.Client();

// Imported function from different modules that I created to keep code a bit cleaner here
const data = require("./modules/kittydata.js");
const convertToCat = require("./modules/converttocat.js");
const emojifierFunction = require("./modules/emojifierfunction.js");
const bingo = require('./modules/bingorolemanager.js');
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
  if (msg.content === 'help' || msg.content === 'Help') {

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

    /*
    if (roleFinder(date.month, date.day) === false) {
      return msg.reply(`There is no bingo challenge happening right now. Please ping a captain for details.`)
    } else {
      */
      try {
        await msg.react('🇧');
        await msg.react('🇮');
        await msg.react('🇳');
        await msg.react('🇬');
        await msg.react('🇴');
        await msg.react('❕');
        //await member.roles.add(roleFinder(date.month, date.day));
        await msg.reply(`Nice work on getting bingo on ${weekdays[date.dayOfWeek]}, ${months[date.month]} ${date.day}. Wet nose kisses for you!`);
      }
      catch (err) {
        msg.reply('This feature is exclusive to team Road Trippin\'.');
        console.log(err);
      };
    //};
    
  }; //Ends !bingo listener

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

    const startingValue = values[1];
    const metric = values[2];
    const newMetric = values[4];

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

  if (msg.content.includes("gorl") || msg.content.includes("Gorl")) msg.channel.send("*gorl*");
  if (msg.content.includes("poop")) msg.channel.send("That reminds me, one time ||I had to have my poop shaved off my butt at the vet.||");
  

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