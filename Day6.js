/*declaring the function. will only be executed when we call the function later. 
note that the following is a procedure function which does not return a value*/
function calculate(){
    var myName="This is Stackup";
    console.log(myName)
}

/*calling the function below*/
calculate();

/*a function that returns a value. still need to call the function*/
function getMyFullName(){
    var firstName="Stackup";
    var lastName="One North";
    var fullName=firstName+" "+lastName;
    return fullName;
}

var myFullName=getMyFullName()
console.log(myFullName);

/*Allowing multiple variables in the function*/
function calculate(myLocation, myLocation2, myLocation3){
    var myName="This is Stackup at "+myLocation+ ", "+myLocation2+" "+myLocation3;
    console.log(myName)
}

/*calling the function with input values for each variable below*/
calculate("one North", "Singapore","239546");

//*For Fun: Trial 1*/
/*

var studentFirstName = ["Cecilie", "Lone", "Michael"];
var studentLastName = ["Emil", "Tobias", "Linus"];
var s1=studentFirstName[Math.floor(Math.random()*studentFirstName.length)];
var s2=studentLastName[Math.floor(Math.random()*studentLastName.length)];
function greet(){
    var greetings="Hello, "+s1+" "+s2+"!"
    console.log(greetings)   
}
greet();*/

//*For Fun: Trial 2*//

var studentFirstName = ["Cecilie", "Lone", "Michael"];
var studentLastName = ["Tan", "Lim", "Ng"];
var combos=[];
studentFirstName.forEach(function(a1){
    studentLastName.forEach(function(a2){
        combos.push(a1+" "+a2);
         
    })
})

console.log(combos)  

function testMe(){
    alert("Hi, you hit the button");
}

