const form = document.getElementById('formulario')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const valorA = parseFloat(document.getElementById('campoA').value)
    const valorB = parseFloat(document.getElementById('campoB').value)

    if (valorB > valorA) {
        alert('Tudo certo! O Formulário foi validado.')
    } else {
        alert('O valor B deve ser maior que o valor A.');
    }
});