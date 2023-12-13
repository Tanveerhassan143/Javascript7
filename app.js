alert("welcome");
document.write("<center>")
document.write("<hr>")
document.write("<h1> ceil value </h1>")

var va=prompt("enter the dicemel number,return the ceil,floor,round value")
var a=Math.ceil(va);
document.write(a);
 document.write("<br>")

 document.write("<hr>")
 document.write("<h1> floor value </h1>")

var a=Math.floor(va);
document.write(a);

document.write("<br>")

 document.write("<hr>")


 document.write("<h1> round value </h1>")
 var a=Math.round(va);
 document.write(a);
  document.write("<br>")


  document.write("<br>")

  document.write("<hr>")

 document.write("<h1> absolute value </h1>")
 var a=prompt("enter the negitive number,return the absolute value")
 var b=Math.abs(a)
document.write(b);

document.write("<br>")

 document.write("<hr>")
 document.write("<h1> random value </h1>")
 var a=prompt("enter the value between 1 and 2")
 var b=Math.random(a+"1")
document.write(b);



//    date mathod

document.write("<br>")
document.write("<h1>Today Date</h1>")
var abc = new Date();
document.write(abc.toDateString());
document.write("<br>")
document.write("<h1>Date of brith</h1>")
document.write("<br>")
var p = new Date(prompt("Enter your brithday date in form of mm/day/year"))

document.write(p.toDateString());
document.write("<br>")


var b = new Date();
// document.write(b)
document.write("<br>")

document.write("<h1>milisecound</h1>")
var c = b - p
document.write(Math.floor(c));


document.write("<br>")

document.write("<h1>secound</h1>")
var c = b - p
document.write(Math.floor(c/(1000)));




document.write("<br>")

document.write("<h1>minutes</h1>")
var c = b - p
document.write(Math.floor(c/(1000*60)));



document.write("<br>")

document.write("<h1>Hours</h1>")
var c = b - p
document.write(Math.floor(c/(1000*60*60)));


document.write("<br>")

document.write("<h1>Days</h1>")
var c = b - p
document.write(Math.floor(c/(1000*60*60*24)));



document.write("<br>")

document.write("<h1>age/year</h1>")
var c = b - p
document.write(Math.floor(c/(1000*60*60*24)/365.25));




document.write("<br>")
document.write("<h1>The first 3 letters</h1>")
 document.write("<hr>")


 var now=new Date().toString();
 var ab=now.slice(0,4);
 document.write(ab);

 document.write("</center>")



// var abc = new Date(prompt("Enter your time"));
// document.write(abc.getHours());
// document.write("<br>")














