
// Funzione per mostrare i risultati del quiz
function displayResults(questions, userAnswers) {
  let resultsDiv = document.getElementById('results');

  // Calcolo del punteggio finale
  let score = userAnswers.reduce((score, answer, index) => {
      if (answer === questions[index].correct_answer) {
          return score + 1;
      }
      return score;
  }, 0);


  let finalScoreP = document.createElement('p');
  finalScoreP.textContent = `Your final score is: ${score} out of ${questions.length}`;
  finalScoreP.className = 'final-score';
  resultsDiv.appendChild(finalScoreP);

  let passFailText = document.createElement('p');
  passFailText.className = 'pass-fail';
  if (score >= (questions.length * 0.6)) {
      passFailText.textContent = "Congratulations! You have passed the test.";
      passFailText.style.color = "green";
  } else {
      passFailText.textContent = "Unfortunately, you did not pass the test.";
      passFailText.style.color = "red"; 
  }
  resultsDiv.appendChild(passFailText);

  const header = document.createElement('h2');
  header.textContent = 'Quiz Results:';
  header.className = 'results-header';
  resultsDiv.appendChild(header);

  questions.forEach((question, index) => {
      let questionP = document.createElement('p');
      questionP.textContent = `Question ${index + 1}: ${question.question}`;
      questionP.className = 'question';
      resultsDiv.appendChild(questionP);

      let userAnswerP = document.createElement('p');
      userAnswerP.className = `user-answer ${userAnswers[index] === question.correct_answer ? 'correct' : 'incorrect'}`;

      let answerIcon = document.createElement('span');
      answerIcon.className = 'answer-icon';
      answerIcon.innerHTML = userAnswers[index] === question.correct_answer ? '✔️' : '❌';
      userAnswerP.appendChild(answerIcon);

      let answerText = document.createTextNode(` Your answer: ${userAnswers[index]}`);
      userAnswerP.appendChild(answerText);
      resultsDiv.appendChild(userAnswerP);

      let correctAnswerP = document.createElement('p');
      if (userAnswers[index] !== question.correct_answer) {
          correctAnswerP.textContent = `The correct answer was: ${question.correct_answer}`;
      } else {
          correctAnswerP.textContent = "You answered this question correctly!";
      }
      correctAnswerP.className = 'correct-answer';
      resultsDiv.appendChild(correctAnswerP);

      let divider = document.createElement('hr');
      divider.className = 'divider';
      resultsDiv.appendChild(divider);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const questions = JSON.parse(localStorage.getItem('questions'));
  const userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
  displayResults(questions, userAnswers);
});

  