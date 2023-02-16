async function buscaEndereco(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPconvertida = await consultaCEP.json();
        if (consultaCEPconvertida.erro) {
            throw Error('CEP não existente!');
        }
        console.log(consultaCEPconvertida);
        return consultaCEPconvertida;
    } catch (erro) {
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));