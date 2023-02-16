async function buscaEndereco() {
    try {
        var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/')
        var consultaCEPconvertida = await consultaCEP.json();
        if (consultaCEPconvertida.erro) {
            throw Error('CEP não existente!');
        }
        console.log(consultaCEPconvertida);
    } catch (erro) {
        console.log(erro);
    }
}

buscaEndereco();