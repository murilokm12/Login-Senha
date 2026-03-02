function mudarTexto() {

    let nome = document.getElementById('valor').value;
    let senha = document.getElementById('valor1').value;

        if (nome !== 'Murilo'){
                    document.getElementById('mensagem').innerText = 'Nome de usuário incorreto'
        }
        if (senha !== 'murilo2405'){
                    document.getElementById('mensagem').innerText = 'Senha incorreta'
        }
        if (nome !== 'Murilo' && senha !== 'murilo2405'){
                    document.getElementById('mensagem').innerText = 'Usuário e senha incorreto'
        }


    if (nome == 'Murilo' && senha == 'murilo2405') {

        document.getElementById('mensagem').innerText = 'Login aprovado'
    }


}
