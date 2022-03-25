// JavaScript source code
let buttonSub = document.getElementById('subscribe')
let nomeUtente = document.getElementById('name');
let buttonUn = document.getElementById('unSubscribe');

let divIscritto = document.querySelector('.iscritto');

let divNonIscritto = document.querySelector('.nonIscritto');

let nomeStorage = localStorage.getItem('name')

let mexIscrizione = document.querySelector('.mexIscrizione');

mexIscrizione.style.display = 'none';

if (localStorage.length > 0) {
    buttonUn.style.display = 'block';

    divIscritto.style.display = 'block';

    divIscritto.appendChild(document.createElement('h1')).innerHTML = `Ciao ${nomeStorage}, sei iscritto al nostro sito`;

    divNonIscritto.style.display = 'none';

    nomeUtente.style.display = 'none';

    document.querySelector('.inputVal').innerHTML = 'il tuo nome: ' + nomeStorage

}

function displayBtn() {
    console.log(nomeUtente.value)
    if (nomeUtente.value == '') {

        console.log('ok')
        buttonSub.style.display = 'none'
    }
    else if (localStorage.length == 0 && nomeUtente.value != '') {

        buttonSub.style.display = 'block'
    }
    //if (localStorage.length == 0) {

    //}
    else {
        buttonSub.style.display = 'none';
        buttonUn.style.display = 'block';
    }

}

function Subscribe() {
    let valoreNome = nomeUtente.value

    localStorage.setItem('name', valoreNome);

    console.log(valoreNome, localStorage);

    buttonSub.style.display = 'none';
    buttonUn.style.display = 'block';

    divNonIscritto.style.display = 'none';
    nomeUtente.style.display = 'none';

    mexIscrizione.style.display = 'block';

    document.querySelector('.inputVal').innerHTML = nomeUtente.value
}

function Unsubscribe() {
    localStorage.clear()

    buttonUn.style.display = 'none';
    buttonSub.style.display = 'none';
    mexIscrizione.style.display = 'none';
    nomeUtente.style.display = 'inline-block';
    document.querySelector('.inputVal').innerHTML = '';
    divIscritto.style.display = 'none';
    nomeUtente.value = '';
    console.log(localStorage)
}
