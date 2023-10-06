let num1=prompt("Enter the first Number");
let num2=prompt("Enter the Second Number");

document.write(`Before Swapping num1 value= ${num1}
num2 value= ${num2} <br><br>`)
let swap=(num1,num2)=>{
 
    let temp;
    temp=num1;
    num1=num2;
    num2=temp;
    document.write(`After Swapping num1 value= ${num1}
num2 value= ${num2}`)
}
swap(num1,num2);
console.log(num1,num2);