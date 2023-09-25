const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const descansoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const tempoNaTela = document.querySelector('#timer')

// PARTE DO DESAFIO - INSERINDO AUDIO NO PROJETO

const startPauseBt = document.querySelector('#start-pause')
const musicaPlay = new Audio('/sons/play.wav')
const musicaPause = new Audio('/sons/pause.mp3')
const musicaBeep = new Audio ('/sons/beep.mp3')
const imgpause = document.querySelector('#start-pause img')





let intervaloId = null;
let tempoDecorridoEmSegundos = 1500;

musica.loop = true; 


musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})


focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
   alterarContexto('descanso-curto')
   curtoBt.classList.add('active')
})

descansoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
   alterarContexto('descanso-longo')
   descansoBt.classList.add('active')
})

function alterarContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
    html.setAttribute ('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta.
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar á superfície.<strong class="app_title-strong">Faça uma pausa longa.`
        default:
            break;
    }
}


// btn pause  

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        musicaBeep.play()
        alert('Tempo finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo() 
}

startPauseBt.addEventListener('click', iniciarOuPausar)


function iniciarOuPausar() {
    if(intervaloId) {
        zerar()
        musicaPause.play()
        return     
    }
    
    musicaPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar"
    imgpause.setAttribute('src', '/imagens/pause.png')
}

function zerar() {
    clearInterval(intervaloId)
    iniciarOuPausarBt.textContent = "Começar"
    intervaloId = null;
    imgpause.setAttribute('src', '/imagens/play_arrow.png')
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo()








