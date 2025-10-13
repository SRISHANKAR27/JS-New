let bill = Number(prompt("Enter your bill amount : "));
if(bill>=500){
    let discount = bill*20/100;
    let discountedbill= bill-discount;
    alert("Congratulations! Your Discount :" + discount + " \n Total Bill Amount :"+discountedbill+ "\n Thankyou! Visit Again!");
}
else{
    let discount = bill*5/100;
    alert("Your discount is :"+discount);
    let discountedbill =bill-discount;
    alert("YOUR BILL IS : "+discountedbill);
}
