let salary = Number(prompt("Enter your salary:"));
let service = Number(prompt("Enter your years of service:"));

if( service > 5) {
   let bonus=salary*10/100;
   let finalsal=bonus+salary;
   alert ( "bonus amount =" +bonus+"\nTotal salary =" +finalsal );
}
else{alert("no bonus")};
