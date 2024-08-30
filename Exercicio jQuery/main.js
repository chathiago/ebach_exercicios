$(document).ready(function() {
    $('#form-tarefas').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $(`
            <li class="tarefa-add" style="list-style: circle">
                <input type="checkbox" class="riscar-tarefa">
                ${novaTarefa}
            </li>
        `);

        novoItem.appendTo('.lista-de-tarefas');
        $('#nova-tarefa').val('');
        $('#botao-limpar').hide();
    });

    $('#nova-tarefa').on('input', function() {
        if ($(this).val().length > 0) {
            $('#botao-limpar').show();
        } else {
            $('#botao-limpar').hide();
        }
    });

    $('#botao-limpar').click(function() {
        $('#nova-tarefa').val('');
        $(this).hide();
    });

    $(document).on('change', '.riscar-tarefa', function() {
        $(this).parent().toggleClass("line-through");
    });
});
