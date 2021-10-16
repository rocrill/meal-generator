
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

  let scorePercent = (score/6)*100;

  document.getElementById("quiz-result").innerHTML = "Result:"+ scorePercent + "%";
  
 if (scorePercent<30) {
   document.getElementById("result-message").innerHTML = "Wow, you got " + scorePercent + "... you could really use our meal generator!";
 }
}

 