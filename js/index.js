
function iniciarContagem() {
    let input = document.querySelector('#input').value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', "https://viacep.com.br/ws/" + input + "/json/")
    ajax.send();

    if (input === '') {
        alert('campo vazio, digite seu CEP')
    } else if (input.length > 8 || input.length < 8) {
        alert('voçe digitou numeros a mais ou a menos')
    }

    ajax.onload = function () {
        document.querySelector('.teste').innerHTML = this.responseText;

        const obj = JSON.parse(this.responseText);

        let setor = obj.bairro;
        let localidade = obj.localidade;
        let sigla = obj.uf;
        let cep = obj.cep;

        document.querySelector('.teste').innerHTML = `Bairro: ${setor}<br> cidade: ${localidade}<br> Estado: ${sigla}<br> CEP: ${cep}`;
    }
}