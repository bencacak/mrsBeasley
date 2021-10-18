const Discord = require("discord.js");

//This file has all of the information conataining arrays

//Store the prompts for the ! and ? commands

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
    .addFields(
        { name: "Donate Monero (XMR)", value: process.env.XMR },
		{ name: "Donate Bitcoin (BTC)", value: process.env.BTC },
    )
    .setTimestamp()
    .setFooter('Meow Meow');

    return output;
};


module.exports.chugImg = chugImg;
module.exports.conversions = conversions;
module.exports.help = help;
