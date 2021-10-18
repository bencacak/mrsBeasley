const dayjs = require("dayjs");
const bingo = require("../modules/bingorolemanager.js");

module.exports = {
	name: 'bingo',
	description: 'Get congratulated on getting bingo',
	async execute(msg, args) {
	  
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

	},
};