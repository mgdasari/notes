const chalk = require('chalk');

console.log(chalk.blue('hello mukund'));

console.log(chalk.red('hello mukund'));
console.log(chalk.red('hello mukund ') + 'jooging ' + chalk.blue('done !'));

console.log(chalk.red.bgRed.bold('hello mukund you are amazing'));
console.log(chalk.red.bold('hello mukund you are amazing'));

console.log(chalk.red('hello mukund',chalk.underline.bgBlack('class ')) + '!');

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`)