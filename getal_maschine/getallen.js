'use strict';
    let mijnButton = document.getElementById('mijnButton');
    let optellen = document.getElementById('optellen');
    let vermenigvuldigen = document.getElementById('vermenigvuldigen');
    let delendoor = document.getElementById('delendoor');
    let aftrekken = document.getElementById('aftrekken');
    mijnButton.addEventListener('click', function(){
        
        let getal1 = document.getElementById('getal1').value;        
        let getal2 = document.getElementById('getal2').value;      
        
        getal1 = parseFloat(getal1);
        getal2 = parseFloat(getal2);
        
        telOp(getal1,getal2);
        vermenigvuldig(getal1,getal2);
        deel(getal1,getal2);
        trekaf(getal1,getal2);
    })
    function telOp(getal1, getal2){
        let antwoord = getal1 + getal2;
        console.log("optellen " + antwoord);
        optellen.innerHTML = antwoord;
    }
    function vermenigvuldig(getal1, getal2){
        let antwoord = getal1 * getal2;
        console.log("vermenigvuldigen " + antwoord);
        vermenigvuldigen.innerHTML = antwoord;
    }
    function deel(getal1, getal2){
        let antwoord = getal1 / getal2;
        console.log("delendoor " + antwoord);
        delendoor.innerHTML = antwoord;
    }
    function trekaf(getal1, getal2){
        let antwoord = getal1 - getal2;
        console.log("aftrekken " + antwoord);
        aftrekken.innerHTML = antwoord;
    }