// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

//console.log('lome');

var a = 100;
var b;

b = "Value is " + (a == 500 ? "True" : "False");
//document.write(b);

var day = 1;

switch (day) {
    case 0:
        document.write("Today is Monday");
        break;
        case 1:
        document.write("Today is Tuesday");
         break;
    
    default:
        break;
}


var a = 40;
var b = 20;
if(a>b){
    alert(a + b);
}else
alert("B is Grater :" + b + "<br>");


function algo(fname = "yahoo", lname = "baba"){
    var a = fname + " " + lname;

    return a;
}
var fn = algo("Momna", "Yasin");
document.write(fn);


function hello(){
    document.write("Hello everyone");
}


var a = 1;
do{
    document.write(a + ") Hello Yahoo <br>")
    a++;
}while(a <= 10)


/*for(var a = 1; a <= 100; a = a+10){
    for(var b = a; b < a+10 ; b++){
        document.write(b + " ");
    }
    document.write("<br)");
}*/


/*for(var a = 1; a <= 5; a++){
    for(var b = 1; b <= a ; b++){
        document.write(a + " ");
    }
    document.write("<br>");
}*/

for(var a = 5; a >= 1; a--){
    for(var b = a; b >= 1; b--){
        document.write(b);
    }
    document.write("<br>");
}


var ary = [10, 20, 30];
for(var a = 0; a < 3; a++){
    document.write(ary[a] + "<br>");
}


var arys = [
    ["Harry", 18, "Male", "Master"],
    ["Harry", 19, "Male", "Master"],
    ["Harry", 15, "Male", "Master"]
];
document.write("<table border= '1px' cellspacing= '0'>");
for(var a = 0; a < 3; a++){
    document.write("<tr>");
    for(var b = 0; b < 4; b++){
        document.write("<td>" + arys[a][b] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");


var a = {
    fname : "Ali",
    lname : "Ahmed",
    age : 19,
    movie : ['dhom', 'zoom', 'boom'],
    living : {
        city : 'Faisalabad',
        country : 'Pakistan'
    },
    salary : function(){
        return 20000;
    },
    fullname : function(){
        return this.fname + " " + this.lname
    }
}
console.log(a);
document.write(a.living.city);


var person = new Object();

person.firstName = 'Ram';
person.lastName = 'Tirpati';
person.age = 26;

console.log(person);
document.write(person.firstName)