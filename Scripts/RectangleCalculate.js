function rectangleCalculate(){
        //Width
        const rectangleWidthInput = document.getElementById('rectangle-width')
        const rectangleWidthValue = rectangleWidthInput.value;
        const width=parseFloat(rectangleWidthValue)

        //Length
        const rectangleLengthInput = document.getElementById('rectangle-length');
        const rectangleLengthValue = rectangleLengthInput.value;
        const length = parseFloat(rectangleLengthValue);
        
        //Rectangle Area
        const rectangleArea = width*length;
        const rectangleAreaSpan = document.getElementById('rectangle-area');
        rectangleAreaSpan.innerText = rectangleArea;
        console.log(rectangleArea);

}