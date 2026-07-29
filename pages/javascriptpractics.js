/* for(let i = 1; i<=10; i++)
{
    console.log(i);
}
for(let i = 10; i>=1;i--)

    {
        console.log(i);
    }
     */
  /*   //printing even numbers from 1 to 10
    for (let i =1; i<=10; i++)
    {
        if(i%2==0)
        {
            console.log(i);
        }
    }
     //printing odd numbers from 1 to 10
    for (let i =1; i<=10; i++)
    {
        if(i%2!=0)
        {
            console.log(i);
        }
    } */

        // to skip the numbers 3, 6 from 1 to 10
/* 
        for (let i = 1; i<= 10; i++){

 
            if(i==3||i==6)
            {
                continue
            }
            console.log(i);
       }
 */

/* 
       // while loop
       let j = 1
       while(j<=10)
       {
        console.log(j);
        j++
       }
    console.log('______________________________________________________________'); */


/* 
   //// do while

   let j = 1
   do{
    console.log(j);
    j++
   }

   while(j<=10)
     console.log('______________________________________________________________');
     */

   //// Array
   // array is uses to store collection values
   //homogeneous data -- collection of similar type of data --> let a = [10, 20, 30, 40]
   // hetrogeneous data -- collection ofdifferent type of data --> let s = [10, 'ram', true, null]
   // javascript supports both homogeneous and hetrogeneous type of data, null, duplicate values and fillows indexing

   //push() is used to insert a value at teh end of Array
   //pop() is used to delete the value from the end of the array
   //unshift() is used to inseart value at begning of the array
   //shift() is used to delete value from the begning of the array

/* 
 //  push()
   let a = [10, 20, 30, 40]
   a.push(50, 60)
   console.log(a);

   //pop()
   let b = [100, 200, 300, 400, 500]
   b.pop() // if u provide  b.pop(400, 500) -- still it should remove last value only
   console.log(b);


   //unshift()
   let c = ['ram', 'sagar', 'suresh']
   c.unshift('mohan')
console.log(c);

//shift()

c.shift()
console.log(c);
 */
/* 
//slice()
let a = [10, 20, 30, 40, 50]
let b = a.slice(2, 4)// to retrive 30, 40
console.log(b); [30, 40]
// to retive only 30
let c = a.slice(2, 3)
console.log(c);//[30]
let d = a.slice(2, 2); // invalied senario. it will return [] array
//ending index should alsways greater than stating index
let e = a.slice(-3)// last 3 values of the array
 */

//splice() --> we can add, modify, delete calues. splice(starting index, delete count, add new values)

/* let a = [10, 20, 30, 40, 50, 60]
a.splice(2, 3, 100) // [10, 20, 100, 60]
a. splice(1, 0, 200) // [10, 200, 20, 30, 40, 50, 60]
a.splice(0, 0, 100, 200) // [100, 200, 10, 20, 30, 40, 50, 60]
a.splice(6, 0, 70, 80) //[10, 20, 30, 40, 50, 60, 70, 80]
console.log(a);
 */

/* // map() --> map is used to transform each and every element of an array

let num = [1, 2, 3, 4, 5]
// lets add 5 to above array
let n= num.map(ele =>ele+5)
console.log(n);// [6, 7, 8, 9, 10]

let m = num.map(ele=>ele*5)
console.log(m);//[5, 20, 15, 20, 25]

let s = ['ram', 'raj', 'ravi', 'rao']
let ns= s.map(a => a+ ' hai')
console.log(ns); // [ 'ram hai', 'raj hai', 'ravi hai', 'rao hai' ]



//filter -- used to filer given values
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// ti print even numbers
let evenNum = a.filter(a=>a%2==0)
console.log(evenNum); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// to print numbers greater than 10
let gNum = a.filter(b =>b>10)
console.log(gNum);//[ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] 


*/

// object --> it is a collection of properties in key, value pair format
/* 
let user = {
name: 'Ram',
age:41,
city: 'hyderabad',
status: 'active'
}

//to access the entire Obj
console.log(user);
//to access spectific property, we use "." 'dot operatoror' or  [] bracket notaion
console.log(user.name); // to get the Name
console.log(user[city]);// to get the city

 */
//to add Property 

function compressString(input: string): string {
  // Return early if the string is empty
  if (!input) return "";

  const result: string[] = [];
  let currentChar = input[0];
  let currentCount = 1;

  // Iterate through the string starting from the second character
  for (let i = 1; i < input.length; i++) {
    if (input[i] === currentChar) {
      currentCount++;
    } else {
      // Store the run length of the previous character
      result.push(`${currentChar}->${currentCount}`);
      // Reset for the new character
      currentChar = input[i];
      currentCount = 1;
    }
  }

  // Push the final group after the loop finishes
  result.push(`${currentChar}->${currentCount}`);

  // Join each pair with a space
  return result.join(" ");
}

// --- Example Usage ---
const input = "aaabbbcccdddaa";
const compressed = compressString(input);

console.log(compressed);