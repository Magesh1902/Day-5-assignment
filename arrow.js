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
