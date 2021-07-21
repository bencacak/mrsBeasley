//This file has all of the information conataining arrays

//Store the prompts for the ! and ? commands

const loseitLogs = [
  //'**Set challenge goals:**', 
  //'[link]',
  //Weight
  '**Log your weight:**', 
  'https://docs.google.com/forms/d/e/1FAIpQLScL_BzXPBrXoh_Esdys1w3XdQneTawK94aww0e2afIobsuIng/viewform',
  //Activity
  '**Log your activity & steps:**',
  'https://docs.google.com/forms/d/e/1FAIpQLSdUGLGHQIHOidwGDytrS6QE0ygVwwgYaS87BXh2b4W7TLVXcg/viewform',
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


const help = [
  '- `!convert` to make a unit conversion (kg/lbs, C/F, mi/km only)',
  '- `!conversions` to pull up a unit conversion chart',
  '- `!converttocat` to convert a message into cat language',
  '- `!spell` to emojify a message',
  '- `!eightball` to make a prediction',
  '- `!forms` to summon challenge logs',
  '- `!schedule` to summon challenge schedule',
  '- `!bmi` to calculate BMI. Syntax: `!bmi [height in inches (number only)] [weight in pounds (number only)]`. Example `!bmi 74 195` for a 74 inch tall and 195 lb person',
  '- `!metric bmi` to calculate BMI. Syntax: `!metricbmi [height in cm (number only)] [weight in kg (number only)]`. Example `!metricbmi 188 88.24` for a 74 inch tall and 195 lb person',
  '- `!tdee` to calculate tdee. Syntax: `!tdee [male/female or m/f] age [height in inches(number only)] [weight in lbs (number only)]`. Example: `!tdee male 23 74 195`',
  '- `!metric tdee` to calculate tdee. Syntax: `!metrictdee [male/female or m/f] age [height in cm (number only)] [weight in kg (number only)]`. Example: `!merictdee male 23 188 88.24`',
  '`echo >>` to have the bot repeat a user\'s message. The bot will automatically delete the user\'s original message after 0.5s. *Example:* `echo >>Hello world!` Output: `Hello world!`',
  '`!roll` to roll virtual dice *Syntax:* `!roll [number of dice]d[number of sides]` Number of dice can be left blank and will default to one die with `!roll d[number of sides]` *Example:* `!roll 3d6` for 3 d6 dice or `!roll d12` for 1 d12 die.',
  '`!bingo` to add the weekly `Got Bingo` role to yourself.',
  '`!choose` to make the bot decide something for you. Prompts are separated by commas. *Syntax:* `!choose [something], [something], [something]`'
];

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

module.exports.chugImg = chugImg;
module.exports.loseitLogs = loseitLogs;
module.exports.loseitSchedule = loseitSchedule;
module.exports.conversions = conversions;
module.exports.help = help;
module.exports.eightBallResponses = eightBallResponses;