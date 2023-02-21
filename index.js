
let input1=document.getElementById("firstNum").value;
let input2=document.getElementById("secNum").value;
console.log(input1);
console.log(input2);
let resPara=document.getElementById("res");

function add()
{
    console.log("Addition")
    input1=document.getElementById("firstNum").value;
    input2=document.getElementById("secNum").value;
    let result=parseInt(input1)+parseInt(input2);
    // "Addition of "+input1+" and "+input2+" is "+
    resPara.textContent=result;
    
}
function subtract()
{
    console.log("Subtract");
    input1=document.getElementById("firstNum").value;
    input2=document.getElementById("secNum").value;
    let result=parseInt(input1)-parseInt(input2);
    resPara.textContent="Subtraction of "+input1+" and "+input2+" is "+result;
}
function multiply()
{
    console.log("Multiply");
    input1=document.getElementById("firstNum").value;
    input2=document.getElementById("secNum").value;
    let result=parseInt(input1)*parseInt(input2);
    resPara.textContent="Multiplication of "+input1+" and "+input2+" is "+result;
    
}
function divide()
{
    console.log("Divide");
    input1=document.getElementById("firstNum").value;
    input2=document.getElementById("secNum").value;
    let result=parseInt(input1)/parseInt(input2);
    resPara.textContent="Division of "+input1+" and "+input2+" is "+result;
    
}
function remainder()
{
    console.log("Remainder")
    input1=document.getElementById("firstNum").value;
    input2=document.getElementById("secNum").value;
    let result=parseInt(input1)%parseInt(input2);
    resPara.textContent="Remainder of "+input1+" and "+input2+" is "+result;
    
}