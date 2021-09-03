const {fork} = require('child_process');
const child=fork('./file.js');

child.on('data',(data)=>{
    console.log(data);
})