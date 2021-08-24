/**
 * synchronous call back functions.
 */

let numbers = [1, 2, 4, 7, 3, 5, 6];
let oddNumbers = numbers.filter(function(number) {
    return number % 2;
});
console.log(oddNumbers); // [ 1, 7, 3, 5 ]

/**
 * ASynchronous callback functions
 *
 */

function download (url){
    setTimeout(() => {
        console.log('Downloading url ' + url);    
    }, 3*1000);
}

function process(picture){
    console.log('processing ' + picture);
}

let url = 'https://www.javascripttutorial.net/foo.jg';

download(url);
process(url);

/**
 * Output:
 * processing https://www.javascripttutorial.net/foo.jg
   Downloading url https://www.javascripttutorial.net/foo.jg


   In these download is called first and process is called after wards.But processing is consoled first before download which is not proper.

 */


   function download1 (url,callback){
    setTimeout(() => {
        console.log('Downloading url ' + url);   
        callback(url); 
    }, 3*1000);
}

function process1(picture){
    console.log('processing ' + picture);
}

let url1 = 'https://www.javascripttutorial.net/foo.jg';

download1(url1,process1);

/**
 * Now you have passed the callback function after downloading a processing  is called.
 */
