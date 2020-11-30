let btnPlay = document.querySelector(".icon-play");
let txtTempo = document.querySelector(".tempo");
let question = document.querySelector(".question");
let answersObj = document.querySelector(".answers-obj");
let info = document.querySelector(".info");
let spinner = document.querySelector(".spinner");
// let answersItem;

let correct_answer = [];

window.onload = async () => {};
btnPlay.addEventListener("click", async () => {
  btnPlay.disabled = true;
  spinner.style.display = "block";

  const data = await api();
});

const data = {
    "id": 16,
    "question": "Qual o maior planeta do sistema solar?",
    "description": null,
    "answers": {
      "answer_a": "Saturno",
      "answer_b": "Júpiter",
      "answer_c": "Urano",
      "answer_d": "Marte",
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "false",
      "answer_b_correct": "false",
      "answer_c_correct": "true",
      "answer_d_correct": "false",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "correct_answer": "answer_b",
    "explanation": null,
    "tip": null,
    "tags": [
      {
        "name": "Linux"
      }
    ],
    "category": "Linux",
    "difficulty": "Easy"
  }

const api = async () => {
  const token = "Edm1fbxVnvSA6OmU8SEZ3dgWvyLRI1XFMILg1F3d";
  const limit = 1;
  axios
    .get(
      `https://quizapi.io/api/v1/questions?apiKey=${token}&category=linux&difficulty=easy&limit=${limit}`,
    )
    .then((res) => {
      setTimeout(() => {
        spinner.style.display = "none";
        createQuestion(data);
        contador();
      }, 1000);
    })
    .catch((error) => {
      console.log("DEU RUIM", error);
    });
};

const createQuestion = (dados) => {
  // for( const data of dados ){
  const answers = dados.map((item, index) => {
    // console.log(item);
    question.textContent = item.question;
    info.innerHTML += `<p class="category">Categoria: ${item.category}</p>`;
    info.innerHTML += `<p class="difficulty">Dificuldade: ${item.difficulty}</p>`;
    correct_answer = item.correct_answer;
    return item.answers;
  });
  // console.log("answers", answers);
  // console.log("correct_answer:", correct_answer);
  // question.textContent = data.question;
  createAnswers(answers);
};

const createAnswers = (answers) => {
  // console.log('createAnswers',answers);
  for (const item of answers) {
    delete item.answer_e;
    delete item.answer_f;
    // console.log("item", item);

    answersObj.innerHTML += `<li class="answers-item" id="answer_a" onclick="correctAnswers(event)"  > ${item.answer_a} </li>`;
    answersObj.innerHTML += `<li class="answers-item" id="answer_b" onclick="correctAnswers(event)" > ${item.answer_b} </li>`;
    answersObj.innerHTML += `<li class="answers-item" id="answer_c" onclick="correctAnswers(event)" > ${item.answer_c} </li>`;
    answersObj.innerHTML += `<li class="answers-item" id="answer_d" onclick="correctAnswers(event)" > ${item.answer_d} </li>`;
  }
  // correctAnswers()
};

const correctAnswers = (event) => {
  const element = event.target;
  const answersItem = event.target.id;
  const allElement = document.querySelector(".active");

    element.classList.toggle("active");
    //  if (allElement.classList.contains("active")) {
    //    allElement.classList.remove("active");
    //  } 

  if (answersItem == correct_answer) {
    alert("Parabens você acertou a resposta")
    resetTimer()
  } else {
    alert("Não foi dessa vez");
    resetTimer();
  }
};
