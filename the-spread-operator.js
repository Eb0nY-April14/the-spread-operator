/**
 * To run this file in Gitpod, use the 
 * command "node the-spread-operator.js" in the terminal
 */

/* The 'spread' operator is a safe, modern way to duplicate part or all of an array or object. */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4); 
console.log("Second array:", arr2);
/* The new number '4' pushed (i.e added) into arr2 automatically gets pushed into arr1 too
 which can be a problem if we want arr1 to remain unchanged */ 
console.log("First array:", arr1); 

// Copying an array
/* The '...' operator spreads the values of the 3rd array into the 4th giving us a way to create
 an entirely new object. When a new element (i.e number) e.g 7 is pushed into the 4th array & we
log the 3rd & 4th array to the console, we see that the 3rd array remains untouched.  */
let arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7);
console.log("Third array:", arr3); 
console.log("Fourth array:", arr4); 

// Copying an object
/* The syntax we used for copying the array above also works for copying an object */
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
let obj3 = {...obj1, b: 5}; /* Here, we created a new object called obj3, copied obj1 into it but updated (i.e changed) one of its values. */  
console.log("First Object:", obj1);
console.log("Second Object:", obj2);
console.log("Third Object:", obj3);

// Copying only part of an array/object
/* Here, we'll combine several of the arrays & objects we've worked with so far into a newly created array */
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log("Fifth array:", arr5);

