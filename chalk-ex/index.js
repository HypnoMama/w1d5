var chalk = require("chalk");

var message = chalk.strikethrough("Hello") + chalk.yellow("World");
var statement = chalk.bgMagenta("I love Lighthouse Labs!")
console.log(message + " " + statement);

console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

var doesItalicWork = chalk.italic.blue.underline("Italic is not widely supported")
console.log(doesItalicWork);
console.log(chalk.cyan("Yay, italic works!"))