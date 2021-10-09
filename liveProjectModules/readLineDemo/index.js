var readline = require('readline');
 
// var rl = readline.createInterface(
//      process.stdin, process.stdout);

//      rl.question('What is your age? ', (age) => {
//         console.log('Your age is: ' + age);
//         rl.close()
//     });

var readline = require('readline');
 
var rl = readline.createInterface(
        process.stdin, process.stdout);
 
rl.setPrompt(`What is your age? `);
rl.prompt()
rl.on('line',(age)=>{
    console.log('Age is ' + age);
    rl.close();
});
rl.on('resume', () => {
    console.log('Resume Event is invoked.');
});