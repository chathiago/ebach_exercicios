$(document).ready(function() {
    const token = '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';
    const github = 'https://api.github.com/users/chathiago';

    fetch(github, {
        headers: {
            'Authorization': `token ${token}`
        }
    }).then(resposta => {
        if (!resposta.ok) {
            throw new Error('Algo deu errado ao buscar os dados do GitHub.');
        }
        return resposta.json();
    }).then(dados => {
        let avatar = dados.avatar_url;
        let nome = dados.name;
        let usuario = dados.login;
        let repositorios = dados.public_repos;
        let seguidores = dados.followers;
        let seguindo = dados.following;
        let link = dados.html_url;

        $('#profile-avatar').attr('src', avatar);
        $('#profile-name').text(nome);
        $('#profile-username').text(`@${usuario}`);
        $('#profile-repositories').text(repositorios);
        $('#profile-followers').text(seguidores);
        $('#profile-following').text(seguindo);
        $('#profile-link').attr('href', link);
    }).catch(erro => {
        console.error('Algo deu errado ao buscar os dados deste usuário no GitHub',erro);
    })
})