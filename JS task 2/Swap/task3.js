let str =prompt("Enter a string : ")
let f = str[0];
let l = str[str.length-1];
let m = str.slice(1,[str.length-1]);
let word = l+m+f;
console.log(word);