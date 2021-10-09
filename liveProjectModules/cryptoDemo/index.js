/**
 * https://www.blumira.com/glossary/salting/
 *1) salting add extra secret value to password which extend the password length and increase security.
 * 2) Keep salt as random value so that it can not be easy judeged
 * 3) keep salt as time,date so that it becomes unique
 */

const crypto = require('crypto');

let password = '12345678';
let salt = '98765';
let key = '98765';


const ssha= function(password,salt){
    let ctx = crypto.createHash('sha1');
    ctx.update(password,'utf-8');
    ctx.update(salt,'binary');
    var digest = ctx.digest('binary');
    var ssha = '{SSHA}' + new Buffer(digest+salt,'binary').toString('base64')
    console.log(ctx);
    console.log(digest);
    console.log(ssha);

}


ssha(password,salt)