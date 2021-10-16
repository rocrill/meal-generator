/*

const myQuestions = [
    {
      question: "Which one of the following would be considered a protein?",
      answers: {
        a: "Potato",
        b: "fish",
        c: "apple",
        d: "Broccoli"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the recommended serving size of carb per meal?",
      answers: {
        a: "a fist size",
        b: "a finger size",
        c: "1/2 of a standard dinner plate"
        d: "3/4 of a standard dinner plate"
      },
      correctAnswer: "a"
    }
  ];

  const submitButton = document.getElementById('submit');
*/


  function calculateScore() {
    let score = 0;

    if (document.getElementById("q1b").checked) {
      score = score+1;
    }
    if (document.getElementById("q2a").checked) {
      score = score+1;
    }
  

  document.getElementById("quiz-result").innerHTML = "Result:"+ (score/2)*100 + "%";
  }