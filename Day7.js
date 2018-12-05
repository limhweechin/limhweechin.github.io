
/*to get value of HTML element - document.getElementById("firstNumber").value;*/


/*function Calculate(){
    var numberOne=document.getElementById("firstNumber").value;
    var numberTwo=document.getElementById("secondNumber").value;
    var total=parseInt(numberOne)+parseInt(numberTwo);
    document.getElementById("myResult").value=total;

}*/

/*to display value- document.getElementById("result").value="";*/


//morning
//afternoon
//evening

var greet;

greet="midnight"

if(greet=="morning"){
    console.log("This is Morning")
}

else if(greet=="afternoon"){
    console.log("This is Afternoon")
}

else if(greet=="evening"){
    console.log("This is Evening")
}

/*the following is the default condition*/
else{
    console.log("Hello!")
}

/* Exercise 1 */
function Operate(){
var numberThree=document.getElementById("thirdNumber").value;
var numberFour=document.getElementById("fourthNumber").value;
var operator;

operator=document.getElementById("sign").value;
var result;

if(operator=="+"){
    result=parseInt(numberThree)+parseInt(numberFour);
}

else if(operator=="-"){      
        result=parseInt(numberThree)-parseInt(numberFour);  
    }

else if(operator=="*"){ 
        result=parseInt(numberThree)*parseInt(numberFour); 
        }

else if(operator=="/"){                   
        result=parseInt(numberThree)/parseInt(numberFour);         
            }
document.getElementById("mySecondResult").value=result;
}

/**Exercise 2 */
var primeNumber=[1,3,5,7,11,13,17,19]
var step=0;
   while(step<primeNumber.length){
    console.log(step)   
    step=step+1;
    
   } 

/**Exercise 3 */

var numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var step=0;
while(step<numbers.length){
    
    var isEven=numbers[step]%2;

    if(isEven==0){console.log(numbers[step]+" is even number")}
    else{console.log(numbers[step]+" is not an even number")}

    step=step+1;
}
