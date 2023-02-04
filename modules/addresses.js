const Discord = require("discord.js");

const donate = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('Support Mrs. Beasley')
    .setURL('https://github.com/bencacak/mrsBeasley/blob/master/README.md')
    .setAuthor('Mrs. Beasley et al.')
    .setDescription(`Keep me online by donating!`)
    .attachFiles(['./modules/assets/mrsBeasley.jpg'])
    .setThumbnail('attachment://mrsBeasley.jpg')
    .addFields(
        { name: "PayPal:", value: "https://paypal.me/bencacak" },
    )
    .setTimestamp()
    .setFooter('Meow Meow');

module.exports = { donate }