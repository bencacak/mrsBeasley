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
        { name: "Currencies you can donate:", value: "Bitcoin (BTC), Monero (XMR), Ethereum (ETH), Solana (SOL), Raven Coin (RVN), and Cosmos (ATOM)" },
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

const donateSOL = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Use \`!donate <coin>\` to get specific wallet information. Thank you for supporting me!`)
    .attachFiles(['./modules/assets/ico-SOL.png'])
    .setThumbnail('attachment://ico-SOL.png')
    .addFields(
        { name: "Donate Solana (SOL)", value: process.env.SOL },
    )
    .attachFiles(['./modules/assets/QR-SOL.png'])
    .setImage('attachment://QR-SOL.png')
    .setTimestamp()
    .setFooter('Meow Meow');

const donateATOM = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Use \`!donate <coin>\` to get specific wallet information. Thank you for supporting me!`)
    .attachFiles(['./modules/assets/ico-ATOM.png'])
    .setThumbnail('attachment://ico-ATOM.png')
    .addFields(
        { name: "Donate Cosmos (ATOM)", value: process.env.ATOM },
    )
    .attachFiles(['./modules/assets/QR-ATOM.png'])
    .setImage('attachment://QR-ATOM.png')
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
        { name: "Donate Ethereum (ETH)", value: process.env.ETH },
    )
    .attachFiles(['./modules/assets/QR-ETH.png'])
    .setImage('attachment://QR-ETH.png')
    .setTimestamp()
    .setFooter('Meow Meow');

const donateRVN = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Use \`!donate <coin>\` to get specific wallet information. Thank you for supporting me!`)
    .attachFiles(['./modules/assets/ico-RVN.png'])
    .setThumbnail('attachment://ico-RVN.png')
    .addFields(
        { name: "Donate Raven Coin (RVN)", value: process.env.RVN },
    )
    .attachFiles(['./modules/assets/QR-RVN.png'])
    .setImage('attachment://QR-RVN.png')
    .setTimestamp()
    .setFooter('Meow Meow');

module.exports.donate = donate;
module.exports.donateATOM = donateATOM;
module.exports.donateBTC = donateBTC;
module.exports.donateETH = donateETH;
module.exports.donateSOL = donateSOL;
module.exports.donateXMR = donateXMR;
module.exports.donateRVN = donateRVN;