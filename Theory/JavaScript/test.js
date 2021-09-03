function abc(a,callback){
        console.log(a);
        callback(a);

}

function xyz(b){
    console.log('callback ' + b);
}


abc(123,xyz);

////////////////////////////

function abc1(a1){
    return new Promise((resolve,reject)=>{
        console.log(a1);
        resolve (a1);
    })
}

abc1(435345).then((res)=>{
    console.log('callback ' +res);
})

/////////////////


async function abc2(a2){
    console.log(a2);
   return(a2);
}

abc2(355355).then((d)=>{
    console.log( 'callback ' +d);
});

/////////////

let h =3434
{
    var h =56546
}

//Throws an error