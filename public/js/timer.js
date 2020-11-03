let timer;
let tempo;
let segundos = 40;


const contador = () => {
  timer = setInterval(() => {
    segundos--;
    if (segundos === 0) {
      clearInterval(timer);
      timer = 0
      alert('Você perdeu tempo esgotado')
      segundos = 40
      btnPlay.disabled = false;
      info.innerHTML = ''
      question.textContent = "";
      answersObj.innerHTML = ''
    }
    txtTempo.textContent = segundosParaTempo(segundos);
  }, 1000);
};

function segundosParaTempo(segundos) {
  return moment().startOf("day").seconds(segundos).format("HH:mm:ss");
}
