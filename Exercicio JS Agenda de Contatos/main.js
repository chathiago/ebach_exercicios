const form = document.getElementById('form-agenda')
const inputNomeContato = document.getElementById('nome-contato')
const inputNumeroContato = document.getElementById('numero-contato')
const tabelaContatos = document.getElementById('tabela-contatos')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let novoContato = tabelaContatos.insertRow()
    let novoNome = novoContato.insertCell()
    let novoNumero = novoContato.insertCell()

    novoNome.textContent = inputNomeContato.value
    novoNumero.textContent = inputNumeroContato.value

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
})