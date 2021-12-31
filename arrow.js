//Do the below programs in arrow functions
//a.Print odd numbers in an array

const odd=() =>{
    let number=[1,2,3,4,5,6,7,8,9,10];
        for(i=0;i<number.length;i++){
             if(number[i]%2!==0){
           console.log(number[i]);
        } 
        }
    }
     odd();

//b.Convert all the strings to title caps in a string array

const titleCap = () => {
    let title = "HI EVERYONE";
    console.log(title.toLowerCase());
} 

//c.Sum of all numbers in an array

const sum=()=>{
    let str=[50,45,78];
       let sum=0;
     for (let i = 0; i < str.length; i++) {
       sum +=str[i];
     }
    console.log(sum);
    };
    sum();

//d.Return all the prime numbers in an array

const prime=()=>{
    var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
       
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   };
   prime();

//e.Return all the palindromes in an array

const ask=() =>{
    var myArray = ['dad', 'cecarar', 'honda', 'malayalam'];   
   var b = myArray.filter(function(c,d,f){
   var Cur = c.split('').reverse().join('');
   if(c == Cur){
   console.log( myArray[d] );
   }
   });
   
 };ask();