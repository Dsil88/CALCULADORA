function agregarNumero(number) {
    const pantalla = document.getElementById('pantalla');
    if (pantalla.innerText === '0' || pantalla.innerText === 'Error') 
         pantalla.innerText = '';
         pantalla.innerText += number;
}

function clearDisplay() {
    document.getElementById('pantalla').innerText = '0';
}

function deleteLast() {
    const pantalla = document.getElementById('pantalla');
    pantalla.innerText = pantalla.innerText.slice(0, -1);
    if (pantalla.innerText === '') pantalla.innerText = '0';
}

function calculateResult() {
    const pantalla = document.getElementById('pantalla');
    try {
        pantalla.innerText = new Function('return ' + pantalla.innerText)();
    } catch (error) {
        pantalla.innerText = 'Error';
    }
}
