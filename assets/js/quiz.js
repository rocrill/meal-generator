
  function calculateScore() {
    let score = 0;

    if (document.getElementById("q1b").checked) {
      score = score+1;
    }
    if (document.getElementById("q2a").checked) {
      score = score+1;
    }
    if (document.getElementById("q3c").checked) {
      score = score+1;
    }
    if (document.getElementById("q4b").checked) {
      score = score+1;
    }
    if (document.getElementById("q5d").checked) {
      score = score+1;
    }
    if (document.getElementById("q6b").checked) {
      score = score+1;
    }
  

  document.getElementById("quiz-result").innerHTML = "Result:"+ (score/6)*100 + "%";
  }