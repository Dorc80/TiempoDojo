var cities = document.querySelectorAll('#city li');
// se crean arreglos para no perder los decimales al convertir el fahrenheit
var gradesMax = [20, 27, 21, 26];
var gradesMin = [18, 19, 26, 21];

for (var i = 0; i < cities.length; i++) {
    cities[i].addEventListener('click', function () {
        alert('Cargando informe meteorologico...');
    })
}

var cookieBtn = document.querySelector('#cookie-policie button');

cookieBtn.addEventListener('click', function () {
    document.querySelector('#cookie-policie').remove();
});

document.querySelector('#grades-s').addEventListener('change', function () {

    if (this.value == 1) {
        changeFahrenheitToCelcius();
    } else {
        changeCelciusToFahrenheit();
    }

});

function changeCelciusToFahrenheit() {
    changeCelciusToFahrenheitByClase('.red-g', gradesMax);
    changeCelciusToFahrenheitByClase('.blue-g', gradesMin);
}

function changeCelciusToFahrenheitByClase(clase, gradesArray) {

    let maximusElement = document.querySelectorAll(clase);

    for (var i = 0; i < maximusElement.length; i++) {
        let value = gradesArray[i] * 1.8 + 32
        gradesArray[i] = value;
        maximusElement[i].innerText = parseFloat(value).toFixed(0) + '°';
    }

}

function changeFahrenheitToCelcius() {
    changeFahrenheitToCelciusByClase('.red-g', gradesMax);
    changeFahrenheitToCelciusByClase('.blue-g', gradesMin);
}

function changeFahrenheitToCelciusByClase(clase, gradesArray) {

    let maximusElement = document.querySelectorAll(clase);

    for (var i = 0; i < maximusElement.length; i++) {
        value = (gradesArray[i] - 32) / 1.8;
        gradesArray[i] = value;
        maximusElement[i].innerText = parseInt(value) + '°';
    }

}