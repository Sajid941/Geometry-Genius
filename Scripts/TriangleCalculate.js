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