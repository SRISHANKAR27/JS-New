let = document.getElementById('input');
function press(value) {
    input.value += value;
}
function equal() {
    try{
     input.value = eval(input.value);}
    catch(e){
        alert("Invalid");
    }
}
function Clear() {
    input.value = '';
}
function del() {
    input.value = input.value.slice(0, -1);
}
