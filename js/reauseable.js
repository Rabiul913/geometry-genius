function getInputFieldValue(inputField){
    const field= document.getElementById(inputField);
    const textvalue= field.value;
    const value= parseFloat(textvalue);
    // field.value='';
    return value;
}

function initialCalculateValue(textField, calculateValue){
    if(isNaN(calculateValue)){
        // return;
        calculateValue='00';
    }
    const text= document.getElementById(textField);
    text.innerText=calculateValue;
}