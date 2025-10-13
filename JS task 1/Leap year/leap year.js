let year = Number(prompt("Enter the year:"));
if((year % 4 ===0 && year % 100 !==0) || (year % 400 === 0)){
    alert("It is leap year");
}
else{
    alert("It is not a leap year");
}
