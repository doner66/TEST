const questions = [
    {
        question: "What is Base?",
        options: [
            "A decentralized financial protocol",
            "A blockchain ecosystem on Ethereum L2",
            "A type of cryptocurrency wallet"
        ],
        correctAnswer: 2
    },
    {
        question: "Which of the following is a key feature of Web3?",
        options: [
            "Centralized control",
            "Ownership of assets and data by users",
            "Non-transparent transactions"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of DeFi?",
        options: [
            "To provide decentralized financial services",
            "To offer centralized finance solutions",
            "To create more banks"
        ],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('option1').textContent = currentQuestion.options[0];
    document.getElementById('option2').textContent = currentQuestion.options[1];
    document.getElementById('option3').textContent = currentQuestion.options[2];
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('nextButton').classList.add('hidden');
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const feedbackElement = document.getElementById('feedback');
    if (selectedOption === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.classList.remove('hidden', 'incorrect');
        feedbackElement.classList.add('correct');
    } else {
        feedbackElement.textContent = "Incorrect!";
        feedbackElement.classList.remove('hidden', 'correct');
        feedbackElement.classList.add('incorrect');
    }
    document.getElementById('nextButton').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        document.getElementById('question-container').innerHTML = "<p>You've completed the quiz!</p>";
        document.getElementById('nextButton').classList.add('hidden');
    } else {
        loadQuestion();
    }
}

document.addEventListener('DOMContentLoaded', loadQuestion);
