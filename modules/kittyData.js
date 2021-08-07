const Discord = require("discord.js");

//This file has all of the information conataining arrays

//Store the prompts for the ! and ? commands

const loseitLogs = [
  //'**Set challenge goals:**', 
  //'[link]',
  //Weight
  '**Log your weight:**', 
  'https://docs.google.com/forms/d/e/1FAIpQLSe560-b7lwfOObgYiBoVjGQJZGtA4BsLZamMG_fYJwDZGxXbA/viewform?usp=sf_link',
  //Activity
  '**Log your activity & steps:**',
  'https://docs.google.com/forms/d/e/1FAIpQLSd0g1EdICptCaZ60kFBU3HdWnuyyGz4mmspDQs8YS_-5fEEMw/viewform?usp=sf_link',
  '**Challenge tracker:**',
  'https://docs.google.com/spreadsheets/d/11Xko94N3_uqxsAwgjOdiZFSmeW8f-0NGJzKvIkuptfw/edit#gid=2084186245',
  '*Hint: use `!schedule` or `?schedule` to show the dates for the challenge*'
];
const loseitSchedule = [
  '**Week 1:** Sign-ups, practice round // July 2-8',
  '**Week 2:** Beginning of head-to-heads, sign-ups closed // July 9-15',
  '**Week 3:** Head-to-head // July 16-22',
  '**Week 4:** Head-to-head // July 23 - 29',
  '**Week 5:** Head-to-head // July 30 - Aug 5',
  '**Week 6:** Head-to-head // Aug 6-12',
  '**Week 7:** Final week, Battle Royale! // Aug 13-19',
  '**Results:** Aug 20'
];

const chugImg = [
  'https://tenor.com/view/drinking-drunk-straw-struggling-embarrassing-gif-15874854',
  'https://tenor.com/view/letterkenny-thirsty-stay-hydrated-gif-13703564',
  'https://tenor.com/view/dog-drinking-water-water-doggo-husky-gif-7343208',
  'https://tenor.com/view/waschb%C3%A4r-raccoon-durstig-thirsty-drinking-gif-16027972',
  'https://tenor.com/view/thirsty-water-fall-gif-16327653',
  'https://tenor.com/view/chug-gif-5722315'
];

const conversions = [
  '__**Weight Conversions**__',
  'Pounds / 2.2 = Kilograms  //  KG * 2.2 = LBS',
  'Ounces / 28 = Grams  //  G * 28 = OZ',
  ' ',
  '__**Length Conversions**__',
  'Miles * 0.6 = kilometers  //  KM / 0.6 = MI',
  'Inches * 2.54 = Centimeters  //  CM / 2.54 = IN',
  '12 in = 1 ft  //  1 ft = 1 yd (0.91 m)  //  5,280 ft = 1 mi',
  ' ',
  '__**Volume Conversions**__',
  'Fluid Ounces * 29.47 = Milliliters  //  ML / 29.47 = FL OZ',
  'Gallons * 3.79 = Liters  //  L / 3.79 = GAL',
  '8 fl oz = 1 cup  //  4 cups = 1 qt  //  4 qt = 1 gal',
  ' ',
  '__**Temperature Conversions**__',
  '(F - 32) / 1.8 = C  //  C * 1.8 + 32 = F'
];

const help = () => {

  const output = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Command Help')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Click the link to find out more about my commands.`)
    .attachFiles(['./modules/assets/mrsBeasley.jpg'])
    .setThumbnail('attachment://mrsBeasley.jpg')
    .setTimestamp()
    .setFooter('Meow Meow');

    return output;
};


module.exports.chugImg = chugImg;
module.exports.loseitLogs = loseitLogs;
module.exports.loseitSchedule = loseitSchedule;
module.exports.conversions = conversions;
module.exports.help = help;
