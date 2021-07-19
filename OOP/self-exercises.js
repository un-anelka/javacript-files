// const t="Hello";
// // console.log(t.split(""))
// let x='';
// const c=t.split('')
// // console.log(c);
//  for (let i=0; i<c.length; i++){
           
//      console.log(c[i]+x);
//      x=c[i]+x
//  }

 //How can I display only olleH ?

// Reversing and Joining of the word
const string = 'hello mister UN';
const reversedString = string.split('').reverse().join('');
const split=string.split('')
console.log(split)
const reverse=split.reverse()
console.log(`The reversed string is ${reverse}`)
const join= reverse.join('')
console.log(`the joined array is ${join}`)
console.log(reversedString);