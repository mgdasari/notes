let x=0;
let y =1
let num=5;
let sum =0

for (let i=0;i<=num;i++){
    if(i==0 || i == 1){
        console.log(i)
        sum=x+y
    }
    else{
        console.log(sum);
        sum += sum
    }
}