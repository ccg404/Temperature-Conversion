const tempInput = document.getElementById("temp");
const result = document.getElementById("result");
let convertedTemp;
let fromUnit, toUnit;


function convertTemp(event) {
   event.preventDefault();
   if (celsiusBtn.checked) {
    convertedTemp = Number(tempInput.value);
    convertedTemp = convertedTemp * 9 / 5 + 32;
    result.textContent = convertedTemp/toFiexd(1) + "F";
   } else if (fahrenheitBtn.checked) {
    convertedTemp = Number(tempInput.value);
    convertedTemp = (convertedTemp - 32) * (5/9);
    result.textContent = convertedTemp.toFixed(1) + "C"
   }
   else{
    result.textContent = "please select a unit"
   }
}


