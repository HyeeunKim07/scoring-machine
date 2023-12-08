// const readlineSync = require("readline-sync");

// console.log("국어 답 채점하기\n복수정답 입력시, 뒤에 띄어쓰기 하지 말아주세요");

// let score = 0;
// const totalQuestions = 24;

// function evaluateAnswer(questionNumber, correctAnswer, scoreToAdd) {
//   const answer = readlineSync
//     .question(`${questionNumber}번 정답을 입력해주세요: `)
//     .toLowerCase();
//   if (answer === correctAnswer) {
//     score += scoreToAdd;
//     console.log("correct");
//   } else {
//     console.log(`The correct answer is ${correctAnswer}`);
//   }
// }

// evaluateAnswer(1, "4", 3.1);
// evaluateAnswer(2, "4", 3.8);
// evaluateAnswer(3, "3", 3.6);
// evaluateAnswer(4, "5", 3.9);
// evaluateAnswer(5, "3", 3.2);
// evaluateAnswer(6, "2", 2.2);
// evaluateAnswer(7, "3", 3.5);
// evaluateAnswer(8, "1", 3.7);
// evaluateAnswer(9, "1", 3.1);
// evaluateAnswer(10, "4", 3.2);
// evaluateAnswer(11, "4", 3.2);
// evaluateAnswer(12, "2", 3.2);
// evaluateAnswer(13, "3", 3.1);
// evaluateAnswer(14, "2", 3.3);
// evaluateAnswer(15, "3", 3.4);
// evaluateAnswer(16, "3", 3.5);
// evaluateAnswer(17, "1,3", 3.3);
// evaluateAnswer(18, "4", 3.2);
// evaluateAnswer(19, "4", 3.2);
// evaluateAnswer(20, "4,5", 3.4);
// evaluateAnswer(21, "2", 3.5);
// evaluateAnswer(22, "3,5", 3.6);
// evaluateAnswer(23, "5", 3.3);
// evaluateAnswer(24, "1", 3.5);

// console.log(`채점 완료! ${score}점입니다`);

// main.js 파일
const totalQuestions = 24;
let score = 0;

function evaluateAnswer(questionNumber, correctAnswer, scoreToAdd) {
  const answer = prompt(
    `${questionNumber}번 정답을 입력해주세요:`
  ).toLowerCase();
  if (answer === correctAnswer) {
    score += scoreToAdd;
    alert("정답입니다!");
  } else {
    alert(`틀렸습니다. 정답은 ${correctAnswer}입니다.`);
  }
}

for (let i = 1; i <= totalQuestions; i++) {
  switch (i) {
    case 1:
      evaluateAnswer(i, "4", 3.1);
      break;
    case 2:
      evaluateAnswer(i, "4", 3.8);
      break;
    case 3:
      evaluateAnswer(i, "3", 3.6);
      break;
    case 4:
      evaluateAnswer(i, "4", 3.1);
      break;
    case 5:
      evaluateAnswer(i, "4", 3.8);
      break;
    case 6:
      evaluateAnswer(i, "3", 3.6);
      break;
    case 7:
      evaluateAnswer(i, "4", 3.1);
      break;
    case 8:
      evaluateAnswer(i, "4", 3.8);
      break;
    case 9:
      evaluateAnswer(i, "3", 3.6);
      break;
    case 10:
      evaluateAnswer(i, "4", 3.1);
      break;
    case 11:
      evaluateAnswer(i, "4", 3.8);
      break;
    case 12:
      evaluateAnswer(i, "3", 3.6);
      break;
    case 13:
      evaluateAnswer(i, "1", 3.5);
    case 14:
      evaluateAnswer(i, "4", 3.1);
      break;
    case 15:
      evaluateAnswer(i, "4", 3.8);
      break;
    case 16:
      evaluateAnswer(i, "3", 3.6);
      break;
    case 17:
      evaluateAnswer(i, "4", 3.1);
      break;
    case 18:
      evaluateAnswer(i, "4", 3.8);
      break;
    case 19:
      evaluateAnswer(i, "3", 3.6);
      break;
    case 20:
      evaluateAnswer(i, "4", 3.1);
      break;
    case 21:
      evaluateAnswer(i, "4", 3.8);
      break;
    case 22:
      evaluateAnswer(i, "3", 3.6);
      break;
    case 23:
      evaluateAnswer(i, "4", 3.1);
      break;
    case 24:
      evaluateAnswer(i, "4", 3.8);
      break;
    default:
      break;
  }
}

alert(`채점 완료! ${score}점입니다`);
