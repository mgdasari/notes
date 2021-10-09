const crypto = require('crypto');
 // Encryption

const algorithm = "aes-256-cbc"; 

// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);

// protected data
const message = "This is a secret message";

// secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);

console.log('initVector ' + initVector);
console.log('message ' + message);
console.log('Securitykey ' + Securitykey);

const ciphers = crypto.createCipheriv(algorithm,Securitykey,initVector);
console.log('ciphers ' + JSON.stringify(ciphers));

let encryptedPassword = ciphers.update(message,'utf-8','hex');
console.log('encryptedPassword ' + encryptedPassword);
encryptedPassword += ciphers.final("hex");
console.log('encryptedPasswordfinals ' + encryptedPassword);


//DEcryption

const deciphers = crypto.createDecipheriv(algorithm,Securitykey,initVector);
console.log('deciphers ' + JSON.stringify(deciphers));
let deencryptedPassword = deciphers.update(encryptedPassword,'hex','utf-8');
console.log('deencryptedPassword '+ deencryptedPassword);
deencryptedPassword += deciphers.final('utf-8');
console.log('deencryptedPassword '+ deencryptedPassword);