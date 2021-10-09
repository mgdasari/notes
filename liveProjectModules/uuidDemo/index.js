const uuid = require('uuid');
//console.log(uuid.v1());
//console.log(uuid.v3());
let token= uuid.v4();
console.log(uuid.validate(token));
//console.log(uuid.v5());