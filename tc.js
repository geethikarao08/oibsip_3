function converterfunc(){
    var fromUnit = document.getElementById('fU').value;
    var toUnit = document.getElementById('tU').value;
    var tempt = parseFloat(document.getElementById('temp').value);

    var convertValue;
    var resultUnit;

    // Perform conversion logic

    switch (fromUnit){
        case 'C':
            if (toUnit === 'F'){
                convertValue = (tempt * 9/5) +32;
                resultUnit = 'F';
            } else if (toUnit === 'K'){ 
                convertValue = tempt + 273.15;
                resultUnit = 'K';
            }else{
                convertValue = tempt;
                resultUnit = 'C';
            }
            break;

            case 'F':
            if (toUnit === 'C'){
                convertValue = (tempt -32) * 5/9;
                resultUnit = 'C';
            } else if (toUnit === 'K'){
                convertValue = (tempt -32) * 5/9 + 273.15;
                resultUnit = 'K';
            }else{
                convertValue = tempt;
                resultUnit = 'F';
            }
            break;

            case 'K':
            if (toUnit === 'C'){
                convertValue = tempt - 273.15;
                resultUnit = 'C';
            } else if (toUnit === 'K'){
                convertValue = (tempt - 273.15) * 9/5 +32;
                resultUnit = 'K';
            }else{
                convertValue = tempt;
                resultUnit = 'K';
            }
            break;

            
    }

    document.getElementById('res').value = convertValue.toFixed(2) + ' ' + resultUnit;
    
}