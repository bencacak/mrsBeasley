module.exports = {
	name: 'conversions',
	description: 'Pull a list of common unit conversions',
	async execute(msg, args) {
	  
        const conversions = [
            '__**Weight Conversions**__',
            '\`\`\`',
            'Pounds / 2.2 = Kilograms  //  KG * 2.2 = LBS',
            'Ounces / 28 = Grams  //  G * 28 = OZ',
            '\`\`\`',
            ' ',
            '__**Length Conversions**__',
            '\`\`\`',
            'Miles * 0.6 = kilometers  //  KM / 0.6 = MI',
            'Inches * 2.54 = Centimeters  //  CM / 2.54 = IN',
            '12 in = 1 ft  //  1 ft = 1 yd (0.91 m)  //  5,280 ft = 1 mi',
            '\`\`\`',
            ' ',
            '__**Volume Conversions**__',
            '\`\`\`',
            'Fluid Ounces * 29.47 = Milliliters  //  ML / 29.47 = FL OZ',
            'Gallons * 3.79 = Liters  //  L / 3.79 = GAL',
            '8 fl oz = 1 cup  //  4 cups = 1 qt  //  4 qt = 1 gal',
            '\`\`\`',
            ' ',
            '__**Temperature Conversions**__',
            '\`\`\`',
            '(F - 32) / 1.8 = C  //  C * 1.8 + 32 = F',
            '\`\`\`'
        ];

        msg.channel.send(conversions)
	},
};