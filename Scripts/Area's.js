function Area(inputField){
        const input = document.getElementById(inputField);
        const inputValue = input.value;
        const value =parseFloat(inputValue);
        return value;
}
function showResult(element,showArea){
        const elementById =document.getElementById(element);
        elementById.innerText=showArea;
}

//Rectangle Calculate
function triangleCalculate(){
        //Get Base
        const triangleBaseInput = document.getElementById('triangle-base');
        const triangleBaseValue = triangleBaseInput.value;
        const Base = parseFloat(triangleBaseValue)

        //Get Height-
        const triangleHeigthInput = document.getElementById('triangle-height');
        const triangleHeigthValue = triangleHeigthInput.value;
        const Height = parseFloat(triangleHeigthValue)

        //triangle Area
        const area=0.5*Base*Height;
        const triangleAreaSpan = document.getElementById('triangle-area');
        triangleAreaSpan.innerText=area;
        triangleBaseInput.value="";
        triangleHeigthInput.value="";
        console.log(area)
}

//Rectangle Calculate
function rectangleCalculate(){
        const width = Area('rectangle-width');
        const length=Area('rectangle-length');
        const area = width*length;
        showResult('rectangle-area',area)

}

//Parallelogram Calculate
function parallelogramCalculate(){
        const width =Area('parallelogram-base');
        const height=Area('parallelogram-heigth');
        const area = width*height;
        showResult('parallelogram-area',area)
}

//Rhombus Calculate
function rhombusCalculate(){
        const diagonal1 =Area('rhombus-diagonal-1');
        const diagonal2 =Area('rhombus-diagonal-2');
        const area = 0.5*diagonal1*diagonal2;
        showResult('rhombus-area',area)
}

//Pentagon Calculate
function pentagonCalculate(){
        const p =Area('pentagon-p');
        const b =Area('pentagon-b');
        const area =0.5*p*b;
        showResult('pentagon-area',area)
}

//Ellipse Calculate
function ellipseCalculate(){
        const a = Area('ellipse-a');
        const b =Area('ellipse-b');
        const area= 3.1416 *a*b;
        showResult('ellipse-area',area);
}