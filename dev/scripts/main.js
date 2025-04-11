$(document).ready(function() {
    $('#botao-criar').click(function() {
        $('#form-criar').slideDown()
    })

    $('#botao-cancelar').click(function() {
        $('#form-criar').slideUp()
    })

    $('#botao-procurar').click(function() {
        $('#form-procurar').slideDown()
    })

    $('#botao-cancelar-busca').click(function() {
        $('#form-procurar').slideUp()
    })

    $('#form-criar').on('submit', function(e){
        e.preventDefault()

        const linkNovaImagem = $('#link-da-imagem').val()
        const novaImagem = $('<li style="display: none"></li>')

        $(`<div class="galeria-item"><img src="${linkNovaImagem}"/></div>`).appendTo(novaImagem)
        $(novaImagem).appendTo('.galeria-imagens')

        $(novaImagem).fadeIn(2000)
        $('#link-da-imagem').val('')

    })

    $('#gerar-codigo').on('click', function(){
        let numeroAleatorio = Math.floor(Math.random() * 900) + 100

        $('.codigo-final').text(numeroAleatorio)
        $('.codigo-gerado').slideDown(1000)
    })
})