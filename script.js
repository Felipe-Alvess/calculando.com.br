function clearDisplay(){
    document.getElementById('display').value = '';
}

function appendToDisplay(value){
    document.getElementById('display').value += value;
}

function calculate(){
    try{
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
    }
    catch(error){
        document.getElementById('display').value = 'Error'
    }
}

function deleteNumber(){
    document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
}