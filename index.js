// utility
function printValue(value){
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function RandomValueCreator(){
    const num1 = 4
    const num2 = 20
    console.log(num1+num2)
} 

RandomValueCreator()

//TODO: create a function that takes in two values and adds them
function addNumbers(n1,n2){
    printValue(n1+n2)
}

addNumbers(5,108)
addNumbers(76,48990)

//TODO: create a function that takes in two values, adds them and returns the value of the addition
function addNums(no1,no2){
    const sum = no1+no2
    return sum
}

const summation = addNums(72,74)
printValue(summation)
// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const addExp = function (){
    printValue(310 + 50)
}

addExp()

//TODO: create a function that takes in two values and adds them


//TODO: create a function that takes in two values, adds them and returns the value of the addition


// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values
const addAnnon = ()=> {
    printValue(1+1)
}
 addAnnon()

 const sayingMyGreetings = () => printValue("gay")

 sayingMyGreetings()
//TODO: create a function that takes in two values and adds them


//TODO: create a function that takes in two values, adds them and returns the value of the addition


