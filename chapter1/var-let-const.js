//var keyword in JavaScript: The var is the oldest keyword to declare a variable in JavaScript. 

//Scope: Global scoped or function scoped. The scope of the var keyword is the global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function

var a= 10;
//console.log(a)
function test(){
    console.log("hello",a)
}
test()
// User can re-declare variable using var and user can update 
function test2(){
    var a=12;
    console.log("hello2",a)
}
test2()
let keyword
//let keyword in JavaScript: The let keyword is an improved version of the var keyword. 

//Scope: block scoped: The scope of a let variable is only block scoped. It can’t be accessible outside the particular block ({block}). Let’s see the below example.

//Users cannot re-declare the variable defined with the let keyword but can update it.

//Users can declare the variable with the same name in different blocks using the let keyword.

const keyword
//const keyword in JavaScript: The const keyword has all the properties that are the same as the let keyword, except the user cannot update it.

//Scope: block scoped: When users declare a const variable, they need to initialize it, otherwise, it returns an error. The user cannot update the const variable once it is declared. 

image.png