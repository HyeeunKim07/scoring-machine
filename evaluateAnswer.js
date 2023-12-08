const totalQuestions = 24;
let score = 0;

function evaluateAnswer(questionNumber, correctAnswer, scoreToAdd) {
  const userAnswer = document.getElementById(`answer${questionNumber}`);
  const resultContainer = document.getElementById("quizContainer");

  if (userAnswer === correctAnswer) {
    score += scoreToAdd;
    resultContainer.innerHTML += `<p>문제 ${questionNumber}: <strong>정답입니다!</strong></p>`;
  } else {
    resultContainer.innerHTML += `<p>문제 ${questionNumber}: <strong>틀렸습니다. 정답은 ${correctAnswer}입니다.</strong></p>`;
  }
}

const quizContainer = document.getElementById("quizContainer");
for (let i = 1; i <= totalQuestions; i++) {
  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.placeholder = `${i}번 정답 입력`;
  inputElement.id = `answer${i}`;
  quizContainer.appendChild(inputElement);
}

const evaluateButton = document.createElement("button");
evaluateButton.textContent = "채점하기";
evaluateButton.addEventListener("click", function () {
  quizContainer.innerHTML = "";
  score = 0;

  for (let i = 1; i <= totalQuestions; i++) {
    evaluateAnswer1(i, "4", 3.5);
    evaluateAnswer2(i, "3", 3.5);
    evaluateAnswer3(i, "2", 3.5);
    evaluateAnswer4(i, "5", 3.6);
    evaluateAnswer5(i, "1", 3.4);
    evaluateAnswer6(i, "5", 3.6);
    evaluateAnswer7(i, "2", 3.4);
    evaluateAnswer8(i, "2,3", 3.5);
    evaluateAnswer9(i, "2", 3.1);
    evaluateAnswer10(i, "3", 3.3);
    evaluateAnswer11(i, "4", 3.1);
    evaluateAnswer12(i, "3", 3.2);
    evaluateAnswer13(i, "5", 3.1);
    evaluateAnswer14(i, "5", 2.9);
    evaluateAnswer15(i, "5", 3.2);
    evaluateAnswer16(i, "1", 3.1);
    evaluateAnswer17(i, "1", 3.3);
    evaluateAnswer18(i, "1", 3.2);
    evaluateAnswer19(i, "4", 3.2);
    evaluateAnswer20(i, "4", 3.4);
    evaluateAnswer21(i, "3", 3.5);
    evaluateAnswer22(i, "3", 3.6);
    evaluateAnswer23(i, "2", 3.3);
    evaluateAnswer24(i, "1", 3.5);
  }

  alert(`채점 완료! ${score}점입니다`);
});

quizContainer.appendChild(evaluateButton);

//국어 29% 수학 30% 영어 22%
