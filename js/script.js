//js


//var sum
var number1 = 5;
var number2 = 2;
var number3 = number1+number2;

function addition(){
	document.getElementById('sum').innerHTML= number3;
}

//var sub
var number4 = 5;
var number5 = 2;
var number6 = number4-number5;

function subtract(){
	document.getElementById('sub').innerHTML= number6;
}

//let multiply
let num1, num2, num3;
num1 = 5;
num2 = 2;
num3 = num1*num2;

function multiplication(){
	document.getElementById('multi').innerHTML= num3;
}

//let division
let number7, number8;
number7 = 10;
number7/=number2

function division(){
	document.getElementById('divi').innerHTML= number7;
}

//show/hide
function textShow() {
	document.getElementById('text').style.display='block';
}
function textHide() {
	document.getElementById('text').style.display='none';
}
//color change
function colorChange(){
	document.getElementById('c_c').style.color="blue";
}

//bulb on/off
function bulbOn(){
	document.getElementById('bulb').src='images/on.gif';
}
function bulbOff(){
	document.getElementById('bulb').src='images/off.gif';
}

//show date
function showDate(){
	document.getElementById('s_d').innerHTML = Date();
}

// text change

//keyword function
function textChange(){

	document.getElementById('t_c').innerHTML = "It's Finally 2024";
}

// text change using class name
function txtChange(){

	document.getElementsByClassName('tt_c')[1].innerHTML = "SSB-606";
}

// Length count using tag name
function lengthCount(){

	var info=document.getElementsByTagName('h4');
	alert(info.length);
}

