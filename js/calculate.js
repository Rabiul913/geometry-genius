function calculateTriangleArea(){
    // triangle base value
    // const baseField= document.getElementById('tbase-field');
    // const basevalueText= baseField.value;
    // const base= parseFloat(basevalueText);
    const base= getInputFieldValue('tbase-field');
    // console.log(base);
    // triangle height value
    // const heightField= document.getElementById('theight-field');
    // const heightvalueText= heightField.value;
    // const height= parseFloat(heightvalueText);
    const height= getInputFieldValue('theight-field');
    
    const area= 0.5 * base * height;
    // console.log(area);
    // const areaShow= document.getElementById('tarea-calculate');
    // areaShow.innerText=area;
    initialCalculateValue('tarea-calculate',area);



}
function calculateRectangleArea(){
    // triangle width value
    // const widthField= document.getElementById('rwidth-field');
    // const widthvalueText= widthField.value;
    // const width= parseFloat(widthvalueText);
    const width= getInputFieldValue('rwidth-field');
    // console.log(width);
    // triangle length value
    // const lengthField= document.getElementById('rlenght-field');
    // const lengthvalueText= lengthField.value;
    // const length= parseFloat(lengthvalueText);
    const length= getInputFieldValue('rlenght-field');
    const area= width * length;
    // const areaShow= document.getElementById('rarea-calculate');
    // areaShow.innerText=area;
    initialCalculateValue('rarea-calculate',area);
}
function calculateParallelogramArea(){
    const base= getInputFieldValue('pbase-field');
    const height= getInputFieldValue('pheight-field');
    const area= base * height;
    initialCalculateValue('parea-calculate',area);
}