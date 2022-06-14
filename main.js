
// on click function do math
    function convertclick() {
    let inputValue = document.getElementById('inputVal').value;
    let ouputValue = document.querySelector('.output');
    let math = inputValue * 2.20462262185;
    ouputValue.textContent = math;
}
// on click function with if else statement
function convertMiles(){
    let inputValue2 = document.getElementById('inputVal2').value;
    let ouputValue2 = document.querySelector('.output2');
    if(isNaN(inputValue2)){
        alert('not a number, Enter a number')
    }
    else{
        ouputValue2.textContent = inputValue2 * 1.60934
    }
}