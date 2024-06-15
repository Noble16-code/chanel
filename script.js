document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    function showNextItem() {
        carouselItems[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % carouselItems.length;
        carouselItems[currentItem].classList.add('active');
    }

    setInterval(showNextItem, 3000);
});

const questions = [
    { question: "Do you love me", options: ["Yes", "Yes", "Yes", "Yes"], answer: "Yes" },
    { question: "When is our anniversary", options: ["June12", "June5", "June15", "June23"], answer: "June5" },
    { question: "What is the first movie we watched together", options: ["Inception", "Titanic", "The Matrix", "Interstellar"], answer: "Inception" },
    { question: "Our favorite date restaurant", options: ["Pizza", "Burger", "Sushi", "Pasta"], answer: "Sushi" },
    { question: "Soccer Jersey number we both wore in highschool", options: ["10", "7", "9", "11"], answer: "11" },
];

let selectedQuestions = [];
let score = 0;

function openGamePopup(game) {
    const gamePopup = document.getElementById('game-popup');
    const gameFrame = document.getElementById('game-frame');
    if (game === 'tic-tac-toe') {
        gameFrame.src = 'tic-tac-toe.html';
    }
    gamePopup.style.display = 'flex';
}

function closeGamePopup() {
    const gamePopup = document.getElementById('game-popup');
    const gameFrame = document.getElementById('game-frame');
    gamePopup.style.display = 'none';
    gameFrame.src = '';
}

function openQuizPopup() {
    const quizPopup = document.getElementById('quiz-popup');
    quizPopup.style.display = 'flex';
    startQuiz();
}

function closeQuizPopup() {
    const quizPopup = document.getElementById('quiz-popup');
    quizPopup.style.display = 'none';
    document.getElementById('quiz-container').innerHTML = '';
    score = 0;
}

function startQuiz() {
    selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    selectedQuestions.forEach((q, index) => {
        const questionElem = document.createElement('div');
        questionElem.innerHTML = `<h3>Question ${index + 1}</h3><p>${q.question}</p>`;
        q.options.forEach(option => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="question${index}" value="${option}"> ${option}`;
            questionElem.appendChild(label);
        });
        quizContainer.appendChild(questionElem);
    });
}

function submitQuiz() {
    selectedQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    alert(`Your score is ${score} out of 10`);
    closeQuizPopup();
}

function generateLoveLetter(event) {
    event.preventDefault();
    const yourName = document.getElementById('your-name').value;
    const herName = document.getElementById
    ('her-name').value;
    const message = document.getElementById('message').value;

    const loveLetter = `
Dear ${herName},

${message}

With all my love,
${yourName}
    `;
    const generatedLetter = document.getElementById('generated-letter');
    generatedLetter.textContent = loveLetter;
    generatedLetter.style.display = 'block';
}

// Background Music Control
const backgroundMusic = document.getElementById('background-music');
const musicButton = document.getElementById('music-button');

let isMusicPlaying = false;

function toggleMusic() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicButton.textContent = 'Play Music';
    } else {
        backgroundMusic.play();
        musicButton.textContent = 'Pause Music';
    }
    isMusicPlaying = !isMusicPlaying;
}
