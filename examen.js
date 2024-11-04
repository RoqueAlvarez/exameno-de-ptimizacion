const esPalindromo = (texto) => {let izquierda = 0, derecha = texto.length - 1;texto = texto.toLowerCase();
    while (izquierda < derecha) {
        if (!esAlfanumerico(texto[izquierda])) { izquierda++; continue; }
        if (!esAlfanumerico(texto[derecha])) { derecha--; continue; }
        if (texto[izquierda] !== texto[derecha]) return false;izquierda++; derecha--;}return true;}
const esAlfanumerico = (caracter) => /[a-z0-9]/.test(caracter);
if (esPalindromo("Anita lava la tinaa")) console.log("Es un palindromo"); else console.log("No es un palindromo");