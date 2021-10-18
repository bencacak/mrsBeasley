 const units = {
    mass: {
      metric: {
        kilogram: ['kg', 'kgs', 'kilogram', 'kilogram', 'kilos', 'kilo'],
        gram: ['g', 'grams', 'gram'],
        milligram: ['mg', 'milligrams', 'milligram'],
        stone: ['stone', 'st']
      }, //Ends mass.metric
      imperial: {
          pound: ['lb', 'lbs', 'pound', 'pounds'],
          ounce: ['oz', 'ounce', 'ounces']
      }//Ends mass.imperial
    }, //Ends mass
    volume: {
      metric: {
        liter: ['liter', 'liters', 'l'],
        milliliter: ['ml', 'milliliter', 'milliliters']
      },//Ends volume.metric
      imperial: {
        gallon: ['gal', 'gallon', 'gallons'],
        fluidOunce: ['floz', 'fl', 'fluid', 'fluidounce', 'fluidounces'],
        cup: ['c', 'cup', 'cup'],
        pint: ['pt', 'pint', 'pints'],
        quart: ['q', 'qt', 'qts', 'quart', 'quarts']
      }//Ends volume.imperial
    }, //Ends volume
    length: {
      metric: {
        millimeter: ['mm', 'millimeter', 'millimeters'],
        centimeter: ['cm', 'centimeter', 'centimeters'],
        meter: ['m', 'meter', 'meters'],
        kilometer: ['km', 'kilometer', 'kilometers']
      },//Ends length.metric
      imperial: {
        inch: ['inch', 'inches', 'in'],
        foot: ['ft', 'foot', 'feet'],
        yard: ['yd', 'yds', 'yards', 'yard'],
        mile: ['mi', 'mile', 'miles']
      }//Ends length.imperial
    }//Ends length
  }; //Ends units

const converter = (startingValue, metric, newMetric) => {

  Number.parseFloat(startingValue);
  metric.toLowerCase();
  newMetric.toLowerCase();
  
  let placeholderValue;
  let convertedValue;

  //This conditional statement will find out what the orginal unit is, and then convert it to grams, liters, or meters (placeholderValue) so it can be converted to the new metric
  switch (metric) {
    //Tests units.mass.metric
    case 'kg':
      metric = 'kilogram';
      placeholderValue = startingValue * 1000;
      break;
    case 'g':
      metric = 'gram';
      placeholderValue = startingValue;
      break;
    case 'mg':
      metric = 'milligram';
      placeholderValue = startingValue / 1000;
      break;
    case 'stone':
      metric = 'stone';
      placeholderValue = startingValue * 63502.29;
      break;
    //Tests units.mass.imperial
    case 'lb':
      metric = 'pound';
      placeholderValue = startingValue * 454;
      break;
    case 'oz':
      metric = 'ounce';
      placeholderValue = startingValue * 28;
      break;
    //Tests units.volume.metric
    case 'l':
      metric = 'liter';
      placeholderValue = startingValue;
      break;
    case 'ml':
      metric = 'milliliter';
      placeholderValue = startingValue * 1000;
      break;
    //Tests units.volume.imperial
    case 'gal':
      metric = 'gallon';
      placeholderValue = startingValue * 3.79;
      break;
    case 'floz':
      metric = 'fluidOunce';
      placeholderValue = startingValue / 33.814;
      break;
    case 'cup':
      metric = 'cup';
      placeholderValue = startingValue * 4.227;
      break;
    case 'pt':
      metric = 'pint';
      placeholderValue = startingValue * 2.113;
      break;
    case 'qt':
      metric = 'quart';
      placeholderValue = startingValue * 1.057;
      break;
    //Tests units.length.metric
    case 'mm':
      metric = 'millimeter';
      placeholderValue = startingValue / 1000;
      break;
    case 'cm':
      metric = 'centimeter';
      placeholderValue = startingValue / 100;
      break;
    case 'm':
      metric = 'meter';
      placeholderValue = startingValue;
      break;
    case 'km':
      metric = 'kilometer';
      placeholderValue = startingValue * 1000;
      break;
    //Tests units.length.imperial
    case 'in':
      metric = 'inch';
      placeholderValue = startingValue / 39.37;
      break;
    case 'ft':
      metric = 'foot';
      placeholderValue = startingValue * 3.28;
      break;
    case 'yd':
      metric = 'yard';
      placeholderValue = startingValue * 1.09;
      break;
    case 'mi':
      metric = 'mile';
      placeholderValue = startingValue * 1609.34;
      break;
    default:
      false;
  };

  switch (newMetric) {
    //Tests units.mass.metric
    case 'kg':
      newMetric = 'kilogram';
      convertedValue = placeholderValue / 1000;
      break;
    case 'g':
      metnewMetricric = 'gram';
      convertedValue = placeholderValue;
      break;
    case 'mg':
      newMetric = 'milligram';
      convertedValue = placeholderValue * 1000;
      break;
    case 'stone':
      newMetric = 'stone';
      convertedValue = placeholderValue / 6350.29;
      break;
    //Tests units.mass.imperial
    case 'lb':
      newMetric = 'pound';
      convertedValue = placeholderValue / 454;
      break;
    case 'oz':
      newMetric = 'ounce';
      convertedValue = placeholderValue / 28;
      break;
    //Tests units.volume.metric
    case 'l':
      newMetric = 'liter';
      convertedValue = placeholderValue;
      break;
    case 'ml':
      newMetric = 'milliliter';
      convertedValue = placeholderValue * 1000;
      break;
    //Tests units.volume.imperial
    case 'gal':
      newMetric = 'gallon';
      convertedValue = placeholderValue / 3.79;
      break;
    case 'floz':
      newMetric = 'fluidOunce';
      convertedValue = placeholderValue * 33.814;
      break;
    case 'c':
      newMetric = 'cup';
      convertedValue = placeholderValue / 4.227;
      break;
    case 'pt':
      newMetric = 'pint';
      convertedValue = placeholderValue / 2.113;
      break;
    case 'qt':
      newMetric = 'quart';
      convertedValue = placeholderValue / 1.057;
      break;
    //Tests units.length.metric
    case 'mm':
      newMetric = 'millimeter';
      convertedValue = placeholderValue * 1000;
      break;
    case 'cm':
      newMetric = 'centimeter';
      convertedValue = placeholderValue * 100;
      break;
    case 'm':
      newMetric = 'meter';
      convertedValue = placeholderValue;
      break;
    case 'km':
      newMetric = 'kilometer';
      convertedValue = placeholderValue / 1000;
      break;
    //Tests units.length.imperial
    case 'in':
      newMetric = 'inch';
      convertedValue = placeholderValue * 39.37;
      break;
    case 'ft':
      newMetric = 'foot';
      convertedValue = placeholderValue / 3.28;
      break;
    case 'yd':
      newMetric = 'yard';
      convertedValue = placeholderValue / 1.09;
      break;
    case 'mi':
      newMetric = 'mile';
      convertedValue = placeholderValue / 1609.34;
      break;
    default:
      false;
  };

  //console.log(placeholderValue);
  //console.log(convertedValue);
  

  
  let output = `${startingValue} ${metric}(s) is equal to ${convertedValue} ${newMetric}(s)`;
  
  return output;
  
}; // Ends converter();

const autoConvert = input => {

  const value = Number.parseFloat(input);
  let convertedValue;
  let metric;
  let newMetric;
  

  if (input.includes('kg') || input.includes('kgs')) {
    convertedValue = value * 2.205;
    metric = 'kilograms';
    newMetric = 'pounds';
  } else if (input.includes('lb') || input.includes('lbs')) {
    convertedValue = value / 2.205;
    metric = 'pounds';
    newMetric = 'kilograms';
  } else if (input.includes('km')) {
    convertedValue = value * (61/100);
    metric = 'kilometers';
    newMetric = 'miles';
  } else if (input.includes('mi')) {
    convertedValue = value / (61/100);
    metric = 'miles';
    newMetric = 'kilometers';
  } else if (input.includes('c')) {
    convertedValue = value * 1.8 + 32;
    metric = 'degrees celsius';
    newMetric = 'degrees fahrenheit';
  } else if (input.includes('f')) {
    convertedValue = (value - 32) / 1.8;
    metric = 'degrees fahrenheit';
    newMetric = 'degrees celsius';
  } else {
    convertedValue = false;
    newMetric = false;
  };
  
  const output = `${value} ${metric} is equal to ${convertedValue} ${newMetric}.`;
  return output;
  
};

autoConvertTriggers = ['kg', 'kgs', 'lb', 'lbs', 'km ', ' km', 'km', 'mi', 'c ', 'f ', ' c', ' f'];

help = [
  'It looks like you need help...',
  '---',
  'To make a uit conversion, use the syntax `!convert <value> <abbreviated unit> to <abbreviated new unit.`',
  '*Example:* `!convert 1 lb to kg`',
  '---',
  "I don't know how to use all units yet. use `!convert units` to pull up a list of units. It is also worth noting you can only use the abbreviated forms of units in their singular state until further notice."
]

module.exports.autoConvert = autoConvert;
module.exports.autoConvertTriggers = autoConvertTriggers;
module.exports.converter = converter;
module.exports.units = units;
module.exports.help = help;

/*
  if (!msg.content.startsWith('!convert') && converter.autoConvertTriggers.some(trigger => msg.content.includes(trigger))) {
    
    const input = msg.content;
    const value = Number.parseFloat(input);
    //msg.channel.send('I am a triggered gorl.')
    
    if (Number.isNaN(value)) {
      return;
    } else {
      msg.reply(converter.autoConvert(input));
    };

  };
  */