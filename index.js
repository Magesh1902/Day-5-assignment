//1.Do the below programs in anonymous function & IIFE
//a.Print odd numbers in an array

// anonymous function:
  
    const oddNumber = () =>{
        let number = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
        for (let i = 0; i <= number.length; i++){
            if((i % 2 !== 0)){
                console.log( i);
            }
        }
    } 
    oddNumber();

 // IIFE function

    (function iifeOdd(){
        let number = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
        for (let i = 0; i <= number.length; i++){
            if((i % 2 !== 0)){
                console.log( i);
            }
        }
    })();

 //b.Convert all the strings to title caps in a string array

 // anonymous function:

   const titleCaps = () => {
       let title = "HI EVERYONE";
       console.log(title.toLowerCase());
   } 
   titleCaps();

//  IIFE function

   (function titleCaps(){
    let title = "HI EVERYONE";
    console.log(title.toLowerCase());
   })();

 //c.Sum of all numbers in an array

 // anonymous function:

    function sum() {
        let num = [10 , 20 , 30];
        let sum = 0;
        for(let i = 0; i < num.length; i++){
            sum += num[i];
        }
        console.log(sum);
    }
    sum();

// IIFE function:

    (function sum(){
        let num = [10 , 20 , 30];
        let sum = 0;
        for(let i = 0; i < num.length; i++){
            sum += num[i];
        }
        console.log(sum);
    })();

//d.Return all the prime numbers in an array

//anonymous function:

    const primeNumber = function(){
        let numArray = [ 2, 3, 4, 5, 6, 7, 8, 9,];
        numArray = numArray.filter((number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
        });

        console.log(numArray);
            }
    primeNumber();

//IIFE function:

    (function primeNumber(){
        let numArray = [2, 3, 4, 5, 6, 7, 8, 9];                                      
        numArray = numArray.filter((number) =>{
            for( let i = 2; i <=Math.sqrt(number); i++){                          
                if(number % i ===0) return false;                                   
            }
            return true;
        });
        console.log(numArray);
    })();
    
//e.Return all the palindromes in an array

//anonymous function:

const palindrome = function(){
    let arr = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];
    let palindromes = arr.filter(w => {
      let len = w.length;
      for (let i = 0; i < len / 2; i++) {
        if (w[i] == w[len - i - 1]) {
          return true;
        } else {
          return false;
        }
      }
    });
    console.log(palindromes)
}
palindrome();

//IIFE function:

(function palindrome() {
    let arr = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];
    let palindromes = arr.filter(w => {
      let len = w.length;
      for (let i = 0; i < len / 2; i++) {
        if (w[i] == w[len - i - 1]) {
          return true;
        } else {
          return false;
        }
      }
    });
    console.log(palindromes)
})();

//f.Return median of two sorted arrays of same size

//anonymous function:

const median= function(){
    function getMedian(ar1, ar2, n)
       {
         let j = 0;
         let i = n - 1;
         while (ar1[i] > ar2[j] && j < n && i > -1)
         {
           let temp = ar1[i];
           ar1[i] = ar2[j];
           ar2[j] = temp;
           i--; j++;
         }
         ar1.sort(function(a, b){return a - b});
         ar2.sort(function(a, b){return a - b});
         return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
       }
        
       let ar1 = [ 1, 12, 15, 2, 38 ];
       let ar2 = [ 2, 13, 17, 30, 45 ];
     
       let n1 = 5;
       let n2 = 5;
       if (n1 == n2)
         console.log(getMedian(ar1, ar2, n1));
       
   }
   median();

//IIFE fuction:

(function(){
    function getMedian(ar1, ar2, n)
    {
      let j = 0;
      let i = n - 1;
      while (ar1[i] > ar2[j] && j < n && i > -1)
      {
        let temp = ar1[i];
        ar1[i] = ar2[j];
        ar2[j] = temp;
        i--; j++;
      }
      ar1.sort(function(a, b){return a - b});
      ar2.sort(function(a, b){return a - b});
      return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
    }
     
    let ar1 = [ 1, 12, 15, 2, 38 ];
    let ar2 = [ 2, 13, 17, 30, 45 ];
  
    let n1 = 5;
    let n2 = 5;
    if (n1 == n2)
      console.log(getMedian(ar1, ar2, n1));
})();

//g.Remove duplicates from an array

//anonymous function:

const remove=   function(){
    let chars = [1,2,3,1,5,5];
    let uniqueChars = [...new Set(chars)];
    
    console.log(uniqueChars);
    };
    remove();

//IIFE function:

(function(){
    let chars = [1,2,3,1,5,5];
    let uniqueChars = [...new Set(chars)];
    
    console.log(uniqueChars);
    })();

//h.Rotate an array by k times

//anonymous function:

var rotate = function() {
    let nums=[1,2,3,6];
     let k=2;
   for (let i = 0; i < k; i++) {
       nums.unshift(nums.pop()) ;
   }
  console.log(nums);
}
rotate();

//IIFE function:

(function() {
    let nums=[1,2,3,6];
     let k=2;
   for (let i = 0; i < k; i++) {
       nums.unshift(nums.pop()) ;
   }
  console.log(nums);
})();




   