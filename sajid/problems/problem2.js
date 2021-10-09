/**
 * Written in terms of promise 
 */
function print(a){
    return new Promise((resolve,reject)=>{console.log(a)
        setTimeout(() => {
            // console.log(a)
            resolve ('done')
        }, 3000);
    })
}

function main(){
    print('mukund').then(()=>{
        print('dasari').then(()=>{
            print('hello').then()
        })
    })
}
main()


async function main1(){
    await print('hello')
    await print('hello11')
    await print('hello22')
}
main1();














/**
 * interms of asyn await
 */

// function print1(q){
//     setTimeout(() => {
//         console.log(q);
//     }, 3000);
// }

// async function main(x){
//    await print1(x);
// }

// main('sajid').then(()=>{main('questions').then()})