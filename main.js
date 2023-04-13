const vast = document.getElementById("vastaus");
let nollapiste = -273.15;
let valikko = document.getElementById("muunnin-valikko");
let desit = document.getElementById("1desi");



/*SYÖTTEEN TESTAUS*/

function testaaSyote(event) {
    event.preventDefault();

    let syote = document.getElementById("input").value;

    if (syote == "") {
        alert("Syöte on tyhjä!");
        return;
    }
    if (syote.includes(",")) {
        alert("Käytä pilkun sijaan pistettä!")
        return;
    }

    if (isNaN(syote)) {
        alert("Vain numerot ovat sallittuja!");
        return;
    }

    if (valikko.value === "celcius" && syote < nollapiste && document.getElementById("1desi").checked) {
        alert("Syöte on pienempi kuin absoluuttinen nollapiste.");
        celciusDesi1();
    }
    if (valikko.value === "celcius" && syote < nollapiste && document.getElementById("2desi").checked) {
        alert("Syöte on pienempi kuin absoluuttinen nollapiste.");
        celciusDesi2();
    }
    if (valikko.value === "celcius" && syote < nollapiste && document.getElementById("3desi").checked) {
        alert("Syöte on pienempi kuin absoluuttinen nollapiste.");
        celciusDesi3();
    }
    if (valikko.value == "celcius" && document.getElementById("1desi").checked) {
        celciusDesi1();
    }
    if (valikko.value == "celcius" && document.getElementById("2desi").checked) {
        celciusDesi2();
    }
    if (valikko.value == "celcius" && document.getElementById("3desi").checked) {
        celciusDesi3();
    }
    if (valikko.value == "fahrenheit" && document.getElementById("1desi").checked) {
        fahrenDesi1();
    }
    if (valikko.value == "fahrenheit" && document.getElementById("2desi").checked) {
        fahrenDesi2();
    }
    if (valikko.value == "fahrenheit" && document.getElementById("3desi").checked) {
        fahrenDesi3();
    }





     /*CELCIUS LASKUT*/

    function celciusDesi1() {
        let syote = document.getElementById("input").value;
        let tulos = 0;

        tulos = tulos + (syote * 9 / 5) + 32;
        vast.textContent = (tulos.toFixed(0) + "°F");
    }
    function celciusDesi2() {
        let syote = document.getElementById("input").value;
        let tulos = 0;

        tulos = tulos + (syote * 9 / 5) + 32;
        vast.textContent = (tulos.toFixed(1) + "°F");
    }
    function celciusDesi3() {
        let syote = document.getElementById("input").value;
        let tulos = 0;

        tulos = tulos + (syote * 9 / 5) + 32;
        vast.textContent = (tulos.toFixed(2) + "°F");
    }




    /*FAHRENHEIT LASKUT*/

    function fahrenDesi1() {
        let syote = document.getElementById("input").value;
        let tulos = 0;

        tulos = (syote - 32) * 5 / 9;
        vast.textContent = (tulos.toFixed(0) + "°C");
    }
    function fahrenDesi2() {
        let syote = document.getElementById("input").value;
        let tulos = 0;

        tulos = (syote - 32) * 5 / 9;
        vast.textContent = (tulos.toFixed(1) + "°C");
    }
    function fahrenDesi3() {
        let syote = document.getElementById("input").value;
        let tulos = 0;

        tulos = (syote - 32) * 5 / 9;
        vast.textContent = (tulos.toFixed(2) + "°C");
    }
}