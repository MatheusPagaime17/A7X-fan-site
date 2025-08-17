//Pre-loader
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
    // Adiciona a classe 'loaded' ao preloader. Isso ativa a transição de fade-out no CSS.
    preloader.classList.add('loaded');
});

//Lógica do Quiz
const quizData = [
    {
        question: "Qual álbum marcou a estreia do baterista The Rev nos vocais principais em uma música?",
        a: "City of Evil",
        b: "Avenged Sevenfold (Self-Titled)",
        c: "Waking the Fallen",
        d: "Nightmare",
        correct: "b"
    },
    {
        question: "A música 'Bat Country' foi inspirada em qual filme?",
        a: "Medo e Delírio em Las Vegas",
        b: "O Iluminado",
        c: "Pulp Fiction",
        d: "Clube da Luta",
        correct: "a"
    },
    {
        question: "Qual foi o primeiro álbum da banda com o baterista Brooks Wackerman?",
        a: "Hail to the King",
        b: "Nightmare",
        c: "The Stage",
        d: "Life Is But a Dream...",
        correct: "c"
    },
    {
        question: "Em que ano o álbum 'City of Evil' foi lançado?",
        a: "2003",
        b: "2007",
        c: "2006",
        d: "2005",
        correct: "d"
    },
    {
        question: "Antes de se chamarem Avenged Sevenfold, a banda teve outro nome. Qual era?",
        a: "Libertine",
        b: "DragonSlayers",
        c: "Successful Failure",
        d: "M.I.A.",
        correct: "c"
    },
    {
        question: "No videoclipe de 'Seize the Day', o que acontece com o personagem de M. Shadows no final?",
        a: "Ele se casa",
        b: "Ele é preso",
        c: "Ele sofre um acidente de carro",
        d: "Ele viaja para longe",
        correct: "b"
    },
    {
        question: "Quais dois membros formaram o projeto paralelo 'Pinkly Smooth'?",
        a: "M. Shadows e Zacky Vengeance",
        b: "Synyster Gates e Johnny Christ",
        c: "The Rev e M. Shadows",
        d: "The Rev e Synyster Gates",
        correct: "d"
    },
    {
        question: "O álbum 'The Stage' é um álbum conceitual sobre qual tema principal?",
        a: "Guerra e política",
        b: "Religião e mitologia",
        c: "Inteligência Artificial e a sociedade",
        d: "Viagens no tempo",
        correct: "c"
    },
    {
        question: "Por qual música a banda recebeu sua primeira indicação ao Grammy?",
        a: "Bat Country",
        b: "Nightmare",
        c: "Hail to the King",
        d: "The Stage",
        correct: "d"
    },
    {
        question: "Quem foi o baixista original da banda, que gravou o álbum 'Sounding the Seventh Trumpet'?",
        a: "Johnny Christ",
        b: "Dameon Ash",
        c: "Justin Sane",
        d: "Matt Wendt",
        correct: "c"
    }
];


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question-text');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuestionIndex = 0;
let score = 0;


function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

//Inicia o quiz
loadQuiz(); 

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuiz();
        } else {
            // Exibe os resultados
            quiz.innerHTML = `
                <h2>Você acertou ${score} de ${quizData.length} perguntas!</h2>
                <button onclick="location.reload()">Tentar Novamente</button>
            `;
        }
    }
});