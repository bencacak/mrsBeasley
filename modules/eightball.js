const Discord = require('discord.js');

const eightBallResponses = [
  'It is certain',
  'It is decidedly so',
  'Reply hazy try again',
  'Cannot predict now',
  'Do not count on it',
  'My sources say no',
  'Outlook not so good',
  'Signs point to yes'
];

const eightball = input => {
  const output = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle(eightBallResponses[Math.floor(Math.random() * eightBallResponses.length)])
    .setAuthor('Mrs. Beasley Says:')
    .attachFiles(['./modules/assets/mrsBeasley.jpg'])
    .setThumbnail('attachment://mrsBeasley.jpg')
    .setDescription(input)
    .setTimestamp()
    .setFooter('Meow Meow');
  
  return output;
};

module.exports.eightball = eightball;