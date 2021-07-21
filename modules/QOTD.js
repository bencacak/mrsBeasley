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
    .attachFiles(['../assets/mrsBeasley.jpg'])
    .setThumbnail('attachment://mrsBeasley.jpg')
    .setTimestamp()
    .setFooter('Meow Meow');

    return output;
}

module.exports.qotdOuput = qotdOuput;
module.exports.deleteQuestion = deleteQuestion;
module.exports.updateQuestions = updateQuestions;
module.exports.db = db;