const dayjs = require("dayjs");

module.exports = {
	name: 'bingo',
	description: 'Get congratulated on getting bingo',
	async execute(msg, args) {
	  
        const date = {
            day: dayjs().date(),
            month: dayjs().month(),
            dayOfWeek: dayjs().day()
        };
    
        const weekdays = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];

            const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        try {
            await msg.react('🇧');
            await msg.react('🇮');
            await msg.react('🇳');
            await msg.react('🇬');
            await msg.react('🇴');
            await msg.react('❕');
            await msg.reply(`Nice work on getting bingo on ${weekdays[date.dayOfWeek]}, ${months[date.month]} ${date.day}. Wet nose kisses for you!`);
        }
        catch (err) {
            console.log(err);
        };
	},
};