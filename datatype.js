
console.log("Hello world");

/****STINGS EXAMPLES ****/


/*First */
var s1 = "string1";
var s2 = 'string2';
var s3 = `string3`;

/*Second */
var num = 1;
var greetings = `Hello user ${num}`;

/*Third*/
var txt = "Hello how are you?";
var len = txt.length;

/*Fourth*/
var str = "Hello how are you?";
var pos = str.indexOf("how");

/*Fifth*/
var txt = "Hello how are you, Hello again";
var len = txt.lastIndexOf("Hello");

/*Sixth*/
var txt = "Hello how are you, Hello again";
var len = txt.indexOf("Hello",10);

/*Seventh*/
var txt = "Hello how are you, Hello again";
var len = txt.search("how");

/*Eight*/
var str = "Apple, Banana, Kiwi";
var res = str.slice(7,13);

/*Ninth*/
var str = "Apple, Banana, Kiwi";
var res = str.slice(7);

/*Tenth */
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12,-6);

/*Eleventh*/
var str = "Apple, Banana, Kiwi";
var res = str.substring(7,13);

/*Twelfth*/
var str = "Apple, Banana, Kiwi";
var res = str.substr(7,6);

/*Thirteen*/
var text = "Hello, How are you?";
var res = text.toUpperCase();

/*Forteen*/
var text = "Hello, How are you?";
var res = text.toLowerCase();

/*Fifteen*/
var s1 = "Hello";
var s2 = "How are ypu?"

var res1 = s1 + "" +s2;
var res2 = s1.concat(" ",s2);

/****STINGS EXAMPLE END****/









/****NUMBERS EXAMPLES ****/

/*First*/
var num1 = 9;
var num2 = 9.1;
var num3 = 9e5; // 9 * 10^5;

/*Second*/
var num1 = 9/0; //Infinity
var num2 = -9/0; //-Infinity
var num3 = "abc"/2; // NaN;

/*Third*/
var x = "10";
var y = 20;
var z = x+y;

/****NUMBERS EXAMPLES END****/








/****BOOLEAN EXAMPLES ****/

/*First*/
var correct = true;
var wrong = false;

/****BOOLEAN EXAMPLES END****/








/****UNDEFINED EXAMPLES ****/

/*First*/
var random;
// random here is undefined;

/*Second*/
var random = undefined;
// random here is undefined;

/****UNDEFINED EXAMPLES END****/








/**** NULL EXAMPLES ****/

/*First*/
var random = null;
// random here is null


/**** NULL EXAMPLES END ****/







/**** FUNTIONS EXAMPLES ****/

/*First*/
function Hello()
{
    //body of the function
}

/*Second*/
function Hello()
{
    //body of the function
    console.log("Say Hello");
};

/*Third*/
function Hello()
{
    //body of the function
    console.log("Say Hello");
};

Hello();

/*Fourth*/
function greet(name)
{
    console.log("Hello "+name);
};

greet("john")

/*Fifth*/
function greet(name)
{
    console.log("Hello "+name);
};

res = greet("john");
console.log(res);

/**** FUNCTIONS EXAMPLES END ****/








/**** ARRAYS EXAMPLES ****/

/*First*/

//Array of strings
var names = ["John", "Paul" , "Erica"];

//Arrays of number
var numbers = [1,2,3];

/*Second*/
var names = new Array("John" , "Paul" , "Erica");

/*Third*/
var mix = ["John" , "Paul" , "Erica" ,1,2,3]

/*Fourth*/
var names = ["John", "Paul" , "Erica"]
console.log(names[0]);

/*Fifth*/
var names = ["John", "Paul" , "Erica"];

names.push("Seon");

console.log(names);

/*Sixth*/
var names = ["John", "Paul" , "Erica"];

names.unshift("Seon");

console.log(names);

/*Seventh*/
var names = ["John", "Paul" , "Erica"];

names[3] = "seon";
console.log(names);

names[0] = "Ema";
console.log(names);

/*Eight*/
var names = ["John" , "Paul" , "Erica"]
names.pop();
console.log(names);

/*Ninth*/
var names = ["John" , "Paul" , "Erica"]
names.shift();
console.log(names);

/*Tenth*/
var names = ["John" , "Paul" , "Erica"]

console.log(names.length);

/*Eleventh*/
var multiarr = [["John",1],["Peter",2],["Lisa",3]]

/*Tweleth*/
var subarr1 = ["John",1];
var subarr2 = ["Peter",2];
var subarr3 = ["Lisa",3];

var multiarr = [subarr1,subarr2,subarr3]

/*Thirteen*/
var multiarr = [["John",1],["Peter",2],["Lisa",3]]
console.log(multiarr[0]);
console.log(multiarr[1][0]);

/*Forteen*/
var multiarr = [["John",1],["Peter",2],["Lisa",3]]
multiarr.push(["Eva",4]);
console.log(multiarr);

/*Fifteen*/
var multiarr = [["John",1],["Peter",2],["Lisa",3]]
multiarr[2].push("Girl");
console.log(multiarr);

/*Sixteen*/
var multiarr = [["John",1],["Peter",2],["Lisa",3]]
multiarr.pop();
console.log(multiarr);

/*Seventeen*/
var multiarr = [["John",1],["Peter",2],["Lisa",3]]
multiarr[2].pop();
console.log(multiarr);

/**** ARRAYS EXAMPLES END ****/








/****OBJECTS EXAMPLES ****/

/*First*/
var obj = {
    fname: "John",
    lname: " Doe",
    country: "Canada"
}

/*Second*/
var obj = {
    fname: "John",
    lname: " Doe",
    country: "Canada"
}

console.log("Name is "+ obj.fname + " " + obj.lname
            + "Country is " + obj.country);  

/*Third */
var obj = {
    fname: "John",
    lname: " Doe",
    country: "Canada",
    1: 1000
}

console.log("Number propert is " + obj['1']);

/*Fourth*/
var obj = {
    property : value,
    property : value
}

/*Fifth*/

var obj = new Object();
obj.fname = "John";
obj.lname = "Doe";
obj.country = "Canada";
obj.result = function () {
    return "Name is " + obj.fname + " " + obj.lname
        + " County is " + obj.country;
}

console.log(obj.result());

/*Sixth*/
function Human(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

var first = new Human('John', 'Doe');
var second = new Human('Jim', 'Halo');

console.log("Name of first human is - " +
    first.fname + " " + first.lname);

console.log("Name of second human is - " +
    second.fname + " " + second.lname);

/*Seventh */
var student = {
    name: "John Doe",
    marks : 400
}

console.log("Name of the student is " + student.name
            + " marks are " + student.name)

/*Eight*/
var student = {
    name: "John Doe",
    marks : 400
}

console.log("Name of the student is " + student['name']
            + " marks are " + student['marks'])

/*Ninth */
var student = {
    name: "John Doe",
    marks : 400,
    subject : {
        sub1 : "maths",
        sub2 : "english"
    }
}

console.log("Student studies" + student.subject.sub1 +
            " and " + student.subject.sub2);  
            
/*Tenth*/
var student = {
    name: "John Doe",
    marks : 400,
    subject : ["english" , "maths" , "histort"]
}

console.log("Array inside of object is "+ student.subject);

/*Eleventh */
var obj = {
    fname : "John",
    lname: "Doe",
    country : "Canada",
    result : function() {
        return "Name is " + obj.fname + " " + obj.lname
        + " Country is " + obj.country;
    }
}

/*Twelfth */
function Human(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

/*Thirteen*/
var student = {
    name: "John Doe",
    marks : 400
}
for(key in student)
{
  console.log(key); 
}

/*Forteen */
var student = {
    name: "John Doe",
    marks : 400
}
console.log("Name is " + student.name);

delete student.name;

console.log("Name is " + student.name);

/*Fifteenth */
var student = {
    name: "John Doe",
    marks : 400
}

var s1 = student;
s1.marks = 300;
console.log("Marks of the student is " + student.marks);

/****OBJECTS EXAMPLES END ****/

