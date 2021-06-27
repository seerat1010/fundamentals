
//if(condition)
{
    //certain code
}

/****************Control Statements ********/

//If statement
var a = 5;

if(a>4)
{
    console.log("a is greater than 4");
}

//If else
var a = 3;

if(a>4)
{
    console.log("a is greater than 4");
}
else
{
   console.log("a is less than 4");
}

//Nested If
var a = 5;
var b = 4;

if( a>4)
{
    if(b>3)
    {
        console.log("The value of a is greater than 4 and the value of b is greater than 3");
    }
}

/****************Control Statements End********/



/**************** Loops ********/

//While loop
var a = 0 ;
while(a<5)
{
    console.log("The value of a is - "+a);
    a++;
}

//Do while loop
var a = 1;

do{
    console.log("The value of a is - "+a);

}while(a<1)


//for in loop
var person = {
    fname:"John", 
    lname:"Doe"
}; 

var x;
for (x in person) {
 console.log(person[x]);
}

//for of loop

var arr = ['one' , 'two' , 'three'];
var x;

for(x of arr)
{
    console.log(x);
}

/**************** Loops End ********/



