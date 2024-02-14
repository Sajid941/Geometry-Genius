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