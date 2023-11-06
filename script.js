let displayValue = "";

function appendTodisplay(value){
displayValue += value;
document.getElementById("display").value = displayValue;
}
function clearDisplay (){
    displayValue = "";
    document.getElementById("display").value = displayValue;
}
function calculate(){
    try{
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    }catch (error){
        document.getElementById("displayValue").value = "Error"
    }
}