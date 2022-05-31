// 1.  Pattern

// var a=5;

// for(let i=1;i<=a;i++){
//     for(let j=i;j<=a;j++){
//     process.stdout.write(" ");
//     }
//     for(let k=1;k<=i;k++){
//         process.stdout.write("*");
//     }

//     for(let k=1;k<i;k++){
//         process.stdout.write("*");
//     }

// console.log();
// }

// 2. Reverse String

// var str = "PARTH     PATEL  ";
// function reverseString(str){
//     let newString = "";
//     for(let i=str.length-1;i>=0;i--){
//         newString +=str[i].replaceAll("\\s{2,}", " ");
//     }
//     return newString;
// }

// const result = reverseString(str);
// console.log(result);

// 3. String is Palindrome or Not

// var str = "APPA";
// function reverseString(str) {
//     var newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// const result = reverseString(str);
// console.log(result);

// if (str == result) {
//     console.log("Is Palindrome")

// }
// else {
//     console.log("Not Palindrome")
// }

// 4. reverse number

var array=[1,2,3,4];
array.reverse();
console.log(array.join(""));

