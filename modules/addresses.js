const Discord = require("discord.js");

const donate = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Use \`!donate <coin>\` to get specific wallet information and QR codes. Thank you for supporting me!`)
    .attachFiles(['./modules/assets/mrsBeasley.jpg'])
    .setThumbnail('attachment://mrsBeasley.jpg')
    .addFields(
        { name: "Currencies you can donate:", value: "Bitcoin (BTC), Monero (XMR), Ethereum/ERC20 Tokens (ETH), Stellar Lumens (XLM)" },
    )
    .setTimestamp()
    .setFooter('Meow Meow');

const donateXMR = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Use \`!donate <coin>\` to get specific wallet information. Thank you for supporting me!`)
    .attachFiles(['./modules/assets/ico-XMR.png'])
    .setThumbnail('attachment://ico-XMR.png')
    .addFields(
        { name: "Donate Monero (XMR)", value: process.env.XMR },
    )
    .attachFiles(['./modules/assets/QR-XMR.png'])
    .setImage('attachment://QR-XMR.png')
    .setTimestamp()
    .setFooter('Meow Meow');

const donateBTC = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Use \`!donate <coin>\` to get specific wallet information. Thank you for supporting me!`)
    .attachFiles(['./modules/assets/ico-BTC.png'])
    .setThumbnail('attachment://ico-BTC.png')
    .addFields(
        { name: "Donate Bitcoin (BTC)", value: process.env.BTC },
    )
    .attachFiles(['./modules/assets/QR-BTC.png'])
    .setImage('attachment://QR-BTC.png')
    .setTimestamp()
    .setFooter('Meow Meow');


const donateETH = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Use \`!donate <coin>\` to get specific wallet information. Thank you for supporting me!`)
    .attachFiles(['./modules/assets/ico-ETH.png'])
    .setThumbnail('attachment://ico-ETH.png')
    .addFields(
        { name: "Donate Ethereum/ERC20 (ETH)", value: process.env.ETH },
    )
    .attachFiles(['./modules/assets/QR-ETH.png'])
    .setImage('attachment://QR-ETH.png')
    .setTimestamp()
    .setFooter('Meow Meow');

const donateXLM = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Use \`!donate <coin>\` to get specific wallet information. Thank you for supporting me!`)
    .attachFiles(['./modules/assets/ico-XLM.png'])
    .setThumbnail('attachment://ico-XLM.png')
    .addFields(
        { name: "Donate Stellar Lumens (XLM)", value: process.env.XLM },
    )
    .attachFiles(['./modules/assets/QR-XLM.jpg'])
    .setImage('attachment://QR-XLM.jpg')
    .setTimestamp()
    .setFooter('Meow Meow');

module.exports = { donate, donateBTC, donateETH, donateXMR, donateXLM }