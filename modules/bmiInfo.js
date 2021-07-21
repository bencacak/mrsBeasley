const Discord = require("discord.js");

const findHealthStatus = bmi => {
    let healthStatus;
    if (bmi < 18.5) {
      healthStatus = 'underweight';
    } else if (bmi < 25) {
      healthStatus = 'at a normal weight';
    } else if (bmi < 30) {
      healthStatus = 'overweight';
    } else if (bmi < 35) {
      healthStatus = 'obese';
    } else if (bmi < 40) {
      healthStatus = 'obese class II'
    } else if (bmi >= 40) {
      healthStatus = 'morbiddly obese'
    };
    return healthStatus;
  };

const imperialBMI = (height, weight, bmi) => {
  
  const output = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('BMI Calculator')
    .setURL('https://www.npmjs.com/package/fitness-calculator')
    .setAuthor('Mrs. Beasley')
    .setDescription(`You are **${findHealthStatus(bmi)}**.`)
    .attachFiles(['../assets/mrsBeasley.jpg'])
    .setThumbnail('attachment://mrsBeasley.jpg')
    .addFields(
      { name: 'Your BMI', value: bmi },
      { name: '\u200B', value: '\u200B' },
      { name: `Height:`, value: `${height / 2.54} inches`, inline: true },
      { name: 'Weight:', value: `${weight / 2.21} lbs`, inline: true },
      { name: '\u200B', value: '\u200B' },
      { name: 'Underweight:', value: 'BMI < 18.5' , inline: true },
      { name: 'Normal Weight:', value: 'BMI 18.5 to 24.99', inline: true },
      { name: 'Overweight:', value: 'BMI 25 to 29.99', inline: true },
      { name: 'Obese Class I:', value: 'BMI 30 to 34.99', inline: true },
      { name: 'Obese Class II:', value: 'BMI 35 to 39.99', inline: true },
      { name: 'Obese Class III (Morbid):', value: 'BMI > 40', inline: true }
    )
    .attachFiles(['../assets/BMI.png'])
    .setImage('attachment://BMI.png')
    .setTimestamp()
    .setFooter('Meow Meow');

  return output;
};

const metricBMI = (height, weight, bmi) => {
  
  const output = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('BMI Calculator')
    .setURL('https://www.npmjs.com/package/fitness-calculator')
    .setAuthor('Mrs. Beasley')
    .setDescription(`You are **${findHealthStatus(bmi)}**.`)
    .attachFiles(['../assets/mrsBeasley.jpg'])
    .setThumbnail('attachment://mrsBeasley.jpg')
    .addFields(
      { name: 'Your BMI', value: bmi },
      { name: '\u200B', value: '\u200B' },
      { name: `Height:`, value: `${height} cm`, inline: true },
      { name: 'Weight:', value: `${weight} lbs`, inline: true },
      { name: '\u200B', value: '\u200B' },
      { name: 'Underweight:', value: 'BMI < 18.5' , inline: true },
      { name: 'Normal Weight:', value: 'BMI 18.5 to 24.99', inline: true },
      { name: 'Overweight:', value: 'BMI 25 to 29.99', inline: true },
      { name: 'Obese Class I:', value: 'BMI 30 to 34.99', inline: true },
      { name: 'Obese Class II:', value: 'BMI 35 to 39.99', inline: true },
      { name: 'Obese Class III (Morbid):', value: 'BMI > 40', inline: true }
    )
    .attachFiles(['../assets/BMI.png'])
    .setImage('attachment://BMI.png')
    .setTimestamp()
    .setFooter('Meow Meow');

  return output;
};

module.exports.findHealthStatus = findHealthStatus;
module.exports.imperialBMI = imperialBMI;
module.exports.metricBMI = metricBMI;