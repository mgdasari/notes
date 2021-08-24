/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
     console.log(s);
     //console.log(s.split(''));
     let l=0;
     let r=0;
    s.split('').reduce((x,item)=>{
        if(item == '(') l++;
        if(item == ')') r++;
        
    },0)
};


let x= '(()())(())';

removeOuterParentheses(x);