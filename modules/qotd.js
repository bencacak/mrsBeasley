const Discord = require("discord.js");
const Database = require("@replit/database");
const db = new Database();

const starterQuestions = [

];

db.get("questions").then(questions => {
  console.log(questions);
  if (!questions || questions.length < 1) {
    db.set("questions", starterQuestions);
  };
});


const updateQuestions = question => {
  db.get("questions").then(questions => {
    questions.push(question);
    db.set("questions", questions);
  });
};

const deleteQuestion = index => {
  db.get("questions").then(questions => {
      questions.splice(questions.indexOf(index), 1);
      db.set("questions", questions);
  });
};

const qotdOuput = qotd => {
  const output = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle(qotd)
    .setAuthor('Question of the day:')
    .setDescription('Answer Mrs. Beasley\'s question of the day, if you wish.')
    .attachFiles(['./modules/assets/mrsBeasley.jpg'])
    .setThumbnail('attachment://mrsBeasley.jpg')
    .setTimestamp()
    .setFooter('Meow Meow');

    return output;
}

module.exports.qotdOuput = qotdOuput;
module.exports.deleteQuestion = deleteQuestion;
module.exports.updateQuestions = updateQuestions;
module.exports.db = db;

/*
  // Start of the $ commands (for admin use)

  if (msg.content.startsWith('$')) {
    
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/);
	  const command = args.shift().toLowerCase();

    const deleteQuestion = qotd.deleteQuestion;
    const updateQuestions = qotd.updateQuestions;
    const db = qotd.db;   

    if (command === 'qotd') {
      db.get("questions").then(questions => {
        const question = questions[Math.floor(Math.random() * questions.length)];
          //Sends QOTD to the main chat, insert channel ID as a string
          client.channels.cache.get('859954213371117609').send(qotd.qotdOuput(question));
          client.channels.cache.get('832632933403459594').send(`Please copy, paste, and send the following messsage:`);
          client.channels.cache.get('832632933403459594').send(`\`$del ${question}\``);
        });
      };

    if (command === 'new') {
      question = msg.content.split("$new ")[1];
      updateQuestions(question);
      msg.channel.send(`:floppy_disk: New question saved: \`${question}\``);
    };

    if (command === 'del') {
      
      index = msg.content.split("$del ")[1];
      deleteQuestion(index);
      msg.channel.send(`Question deleted: \`${index}\``);
      
    };

    if (command === 'list') {
      db.get("questions").then(questions => {
        msg.channel.send(questions);
      });
    };

  }; //ends command prefix listener
*/