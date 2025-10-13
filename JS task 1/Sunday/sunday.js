for (let i = 2014; i <= 2050; i++) {
    let b = new Date(i, 0, 1);
  
    if (b.getDay() === 0) {    
        console.log(i);        
    }
}