
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

  let scorePercent = Math.round((score/6)*100);

  document.getElementById("quiz-result").innerHTML = "Result:"+ scorePercent + "%";
  
 if (scorePercent<30) {
   document.getElementById("result-message").innerHTML = `Wow, you got ${scorePercent}%! ... you could probably use our meal generator!`;
 }

 if (scorePercent>=30) {
  document.getElementById("result-message").innerHTML = `Hmm, you got ${scorePercent}%! ... your nutritional knowledge could be worse, but you should still probably give our meal generator a go!`;
}

if (scorePercent>=60) {
  document.getElementById("result-message").innerHTML = `Nice! You got ${scorePercent}%! :)`;
}

if (scorePercent>=90) {
  document.getElementById("result-message").innerHTML = `Huzzah! You got ${scorePercent}%! You must be a qualified nutritionist!`;
}

}

function refreshPage() {
  
  const radio = document.getElementsByTagName("input");

  for(let i=0; i < radio.length; i++) {
      radio[i].checked = false;
  }

  document.getElementById("result-message").innerHTML = "";
  document.getElementById("quiz-result").innerHTML = "";
 
}