const form = document.getElementById('form-contato');
const inputTelefoneContato = document.getElementById('numero-contato');
const nomeContatos = [];
const telefoneContatos = [];
let linhas = '';
let numeroEValido = false;

function ValidarNumeroTelefone(numeroTelefone) {
    return numeroTelefone >= 111111111 && numeroTelefone <= 999999999 ;
}

form.addEventListener('submit', function (e) {
    let numeroEValido = false;
    e.preventDefault();
    numeroEValido = !ValidarNumeroTelefone(inputTelefoneContato.value)
    if (!numeroEValido) {
        addContatoLista();
        atualizaTabela();
    } 
})

function addContatoLista(params) {
    const inputNomeContato = document.getElementById('nome-contato');

    nomeContatos.push(inputNomeContato.value);
    telefoneContatos.push(parseFloat(inputTelefoneContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNomeContato.value = '';
        inputTelefoneContato.value = '';
}

function atualizaTabela(params) {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}

inputTelefoneContato.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    numeroEValido = ValidarNumeroTelefone(e.target.value)
    document.querySelector('.AlertaDeErro').style.display = 'block'

    if (!numeroEValido ) {
        inputTelefoneContato.classList.add('error');
        document.querySelector('.AlertaDeErro').style.display = 'block';
        inputTelefoneContato.style.border= '2px solid red';
    } else {
        inputTelefoneContato.classList.remove('error');
        inputTelefoneContato.style.border= 'none';
        document.querySelector('.AlertaDeErro').style.display = '';
    }
})





