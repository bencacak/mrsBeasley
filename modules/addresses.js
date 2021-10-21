const donate = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Use \`!donate <coin>\` to get specific wallet information. Thank you for supporting me!`)
    .attachFiles(['./modules/assets/mrsBeasley.jpg'])
    .setThumbnail('attachment://mrsBeasley.jpg')
    .addFields(
        { name: "Currencies you can donate:", value: "Bitcoin (BTC), Monero (XMR), Ethereum (ETH), Solana (SOL), and Cosmos (ATOM)" },
    )
    .setTimestamp()
    .setFooter('Meow Meow');

const donateXMR = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Use \`!donate <coin>\` to get specific wallet information. Thank you for supporting me!`)
    .attachFiles(['./modules/assets/mrsBeasley.jpg'])
    .setThumbnail('attachment://mrsBeasley.jpg')
    .addFields(
        { name: "Donate Monero (XMR)", value: process.env.XMR },
    )
    .setTimestamp()
    .setFooter('Meow Meow');

const donateBTC = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Use \`!donate <coin>\` to get specific wallet information. Thank you for supporting me!`)
    .attachFiles(['./modules/assets/mrsBeasley.jpg'])
    .setThumbnail('attachment://mrsBeasley.jpg')
    .addFields(
        { name: "Donate Bitcoin (BTC)", value: process.env.BTC },
    )
    .setTimestamp()
    .setFooter('Meow Meow');

const donateSOL = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Use \`!donate <coin>\` to get specific wallet information. Thank you for supporting me!`)
    .attachFiles(['./modules/assets/mrsBeasley.jpg'])
    .setThumbnail('attachment://mrsBeasley.jpg')
    .addFields(
        { name: "Donate Solana (SOL)", value: process.env.SOL },
    )
    .setTimestamp()
    .setFooter('Meow Meow');

const donateATOM = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Use \`!donate <coin>\` to get specific wallet information. Thank you for supporting me!`)
    .attachFiles(['./modules/assets/mrsBeasley.jpg'])
    .setThumbnail('attachment://mrsBeasley.jpg')
    .addFields(
        { name: "Donate Cosmos (ATOM)", value: process.env.ATOM },
    )
    .setTimestamp()
    .setFooter('Meow Meow');

const donateETH = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Use \`!donate <coin>\` to get specific wallet information. Thank you for supporting me!`)
    .attachFiles(['./modules/assets/mrsBeasley.jpg'])
    .setThumbnail('attachment://mrsBeasley.jpg')
    .addFields(
        { name: "Donate Ethereum (ETH)", value: process.env.ETH },
    )
    .setTimestamp()
    .setFooter('Meow Meow');

module.exports.donate = donate;
module.exports.donateATOM = donateATOM;
module.exports.donateBTC = donateBTC;
module.exports.donateETH = donateETH;
module.exports.donateSOL = donateSOL;
module.exports.donateXMR = donateXMR;