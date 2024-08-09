// Sample questions. DONT touch this data
const questions = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "What does CSS stand for?",
        options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
        correct: 0
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    },
    {
        text: "Javascript is a single threaded programming language",
        options: ["True", "False"],
        correct: 0
    },
    {
        text: "API calls in Javascript can be done using the following method",
        options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
        correct: 2
    },
];

// const questionText = document.getElementById("question");
// const optionsContainer = document.getElementById("answer-list");
// const submitButton = document.getElementById("submit");
// const nextButton = document.getElementById("next");
// const resultText = document.getElementById("resultText");

// let currentQuestionIndex = 0;
// let selectedOptionIndex = null;
// let score = 0;
// let isSubmitted = false;

// function loadQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionText.textContent = currentQuestion.text;
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//         const optionElement = document.createElement("div");

//         const radioInput = document.createElement("input");
//         radioInput.type = "radio";
//         radioInput.name = "option";
//         radioInput.value = index;
//         radioInput.id = `option${index}`;
//         radioInput.addEventListener("change", () => selectOption(index));

//         const label = document.createElement("label");
//         label.htmlFor = `option${index}`;
//         label.textContent = option;

//         optionElement.appendChild(radioInput);
//         optionElement.appendChild(label);

//         optionsContainer.appendChild(optionElement);
//     });

//     resultText.textContent = "";
//     selectedOptionIndex = null;
//     isSubmitted = false;

//     // Ensure buttons are in the correct state
//     submitButton.disabled = false;
//     nextButton.disabled = true;
// }

// function selectOption(index) {
//     selectedOptionIndex = index;
//     if (!isSubmitted) {
//         nextButton.disabled = false;
//     }
// }

// function validateSelection() {
//     if (selectedOptionIndex === null) {
//         alert("Please select an answer!");
//         return false;
//     }
//     return true;
// }

// submitButton.addEventListener("click", () => {
//     if (!validateSelection()) {
//         return;
//     }

//     const currentQuestion = questions[currentQuestionIndex];
//     isSubmitted = true;

//     const options = document.querySelectorAll("input[name='option']");
//     options.forEach((option, idx) => {
//         const label = option.nextSibling; // Get the associated label
//         if (idx === currentQuestion.correct) {
//             label.style.color = "green";
//         } else if (idx === selectedOptionIndex) {
//             label.style.color = "red";
//         }
//     });
 
//     if (selectedOptionIndex === currentQuestion.correct) {
//         // score++;
//         resultText.textContent = "Correct!";
//         resultText.style.color = "green";
//     } else {
//         resultText.textContent = `Wrong! The correct answer is "${currentQuestion.options[currentQuestion.correct]}".`;
//         resultText.style.color = "red";
//     }
//     console.log(selectedOptionIndex,currentQuestion.correct)
//     console.log(score)
//     submitButton.disabled = true;
//     nextButton.disabled = false;
// });

// nextButton.addEventListener("click", () => {
//     if (!validateSelection()) {
//         return;
//     }
//     const currentQuestion = questions[currentQuestionIndex];

//     if (selectedOptionIndex === currentQuestion.correct) {
//         score++;
//     }
//     console.log(selectedOptionIndex,currentQuestion.correct)
//     console.log(score)
//     selectedOptionIndex = null;
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         loadQuestion();
//     } else {
//         showFinalScore();
//     }
// });

// function showFinalScore() {
//     questionText.textContent = `Quiz completed! Your score: ${score}/${questions.length}`;
//     optionsContainer.innerHTML = "";
//     submitButton.style.display = "none";
//     nextButton.style.display = "none";

//     setTimeout(() => {
//         resetQuiz();
//         window.location.reload();
//     }, 5000); // Restart the quiz after 5 seconds
// }

// function resetQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     loadQuestion();
//     window.location.reload();

//     // submitButton.style.display = "block";
//     // nextButton.style.display = "block";
//     submitButton.disabled = true;
//     nextButton.disabled = true;
  
// }

// // Load the first question on startup
// loadQuestion();
// submitButton.disabled = false;
// nextButton.disabled = true;




const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("answer-list");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");
const resultText = document.getElementById("resultText");

let currentQuestionIndex = 0;
let selectedOptionIndex = null;
let score = 0;
let isSubmitted = false;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.text;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");

        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "option";
        radioInput.value = index;
        radioInput.id = `option${index}`;
        radioInput.addEventListener("change", () => selectOption(index));

        const label = document.createElement("label");
        label.htmlFor = `option${index}`;
        label.textContent = option;

        optionElement.appendChild(radioInput);
        optionElement.appendChild(label);

        optionsContainer.appendChild(optionElement);
    });

    resultText.textContent = "";
    selectedOptionIndex = null;
    isSubmitted = false;

    // Ensure buttons are in the correct state
    submitButton.disabled = false;  // Enable submit
    nextButton.disabled = true;    // Disable next
}

function selectOption(index) {
    selectedOptionIndex = index;
    if (!isSubmitted) {
        submitButton.disabled = false; // Enable submit when an option is selected
    }
}

function validateSelection() {
    if (selectedOptionIndex === null) {
        alert("Please select an answer!");
        return false;
    }
    return true;
}

submitButton.addEventListener("click", () => {
    if (!validateSelection()) {
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    isSubmitted = true;

    // Disable all radio buttons after submission
    document.querySelectorAll("input[name='option']").forEach(input => {
        input.disabled = true;
    });

    const options = document.querySelectorAll("input[name='option']");
    options.forEach((option, idx) => {
        const label = option.nextSibling; // Get the associated label
        if (idx === currentQuestion.correct) {
            label.style.color = "green";
        } else if (idx === selectedOptionIndex) {
            label.style.color = "red";
        }
    });

    if (selectedOptionIndex === currentQuestion.correct) {
        score++;
        resultText.textContent = "Correct!";
        resultText.style.color = "green";
    } else {
        resultText.textContent = `Wrong! The correct answer is "${currentQuestion.options[currentQuestion.correct]}".`;
        resultText.style.color = "red";
    }

    submitButton.disabled = true;
    nextButton.disabled = false; // Enable next button after submission
});

nextButton.addEventListener("click", () => {
    if (!validateSelection()) {
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedOptionIndex === currentQuestion.correct && !isSubmitted) {
        score++;
    }

    selectedOptionIndex = null;
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
});

function showFinalScore() {
    questionText.textContent = `Quiz completed! Your score: ${score}/${questions.length}`;
    optionsContainer.innerHTML = "";
    submitButton.style.display = "none"; // Hide submit button at the end
    nextButton.style.display = "none";   // Hide next button at the end

    setTimeout(() => {
        resetQuiz();
    }, 5000); // Restart the quiz after 5 seconds
}

function resetQuiz() {
    // currentQuestionIndex = 0;
    // score = 0;
    // loadQuestion();
    // submitButton.style.display = "block"; // Show submit button for new quiz
    // nextButton.style.display = "block";    // Show next button for new quiz
    // submitButton.disabled = true;          // Disable until an option is selected
    // nextButton.disabled = true;            // Disable until an option is selected
    window.location.reload(); 
}

// Load the first question on startup
loadQuestion();

