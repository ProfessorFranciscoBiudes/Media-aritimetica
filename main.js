function calcularMedia() {
    const input = document.getElementById("numbers").value;
    const numeros = input.split(',').map(Number);
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const media = soma / numeros.length;
    
    document.getElementById("resultado").textContent = `A média aritmética é: ${media}`;
}
