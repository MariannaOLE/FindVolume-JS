var myArray = [true, "What is the meaning of life?"];
myArray.push(42);
myArray.shift();

console.log(myArray[0]);
console.log(myArray[1]);
var firstName = "Marianna";
var lastName = "Ole";
var myNumber = 88;

// TODO: change the following code
var fullName = firstName + " " + lastName;
var meaningOfLife = myNumber * 2;

console.log("The name is " + fullName);
console.log("The meaning of life is " + meaningOfLife);

function checkNumber(myNumber)
{
    // TODO: write your code here
    if (myNumber===42)
    {
        console.log("correct");
    }
    else
    {
        console.log("incorrect");
    }
}

checkNumber(3);
checkNumber(7);
checkNumber(42);

var myArray = ["What is the meaning of life?", "The meaning of life is", 42];

//TODO: modify this code
for (var i = 0; i<=myArray.length; i++)
{
    console.log(myArray[i]);
}