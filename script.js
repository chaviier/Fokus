const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const descansoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
const startPauseBt = document.querySelector('#start-pause')

let tempoDecorridoEmSegundos = 5;

musica.loop = true

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})


focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
   alterarContexto('descanso-curto')
   curtoBt.classList.add('active')
})

descansoBt.addEventListener('click', () => {
   alterarContexto('descanso-longo')
   descansoBt.classList.add('active')
})

function alterarContexto(contexto) {
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



const contagemRegressiva = () => {
    tempoDecorridoEmSegundos -= 1
    console.log('Temportizador: ' + tempoDecorridoEmSegundos)    
}










