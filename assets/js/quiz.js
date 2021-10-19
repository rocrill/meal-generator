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
  
  /* Use input name to include in result message */
  let fName = document.getElementById("input_id").value;

  /* Score determines result message */
  if (scorePercent>=90) {
    document.getElementById("result-message").innerHTML = `Congrats ${fName}, you got ${scorePercent}%! You must be a qualified nutritionist!`;
    document.getElementById("result-image").style.backgroundImage = "url('./assets/images/nutritionist.jpg')";
    document.getElementById("result-and-message-container").style.display= "block";
  } else if (scorePercent>=60) {
    document.getElementById("result-message").innerHTML = `Nice work ${fName}! You got ${scorePercent}%! :)`;
    document.getElementById("result-image").style.backgroundImage = "url('./assets/images/nice-work.jpg')";
    document.getElementById("result-and-message-container").style.display= "block";
  } else if (scorePercent>=30) {
    document.getElementById("result-message").innerHTML = `Hmm, you got ${scorePercent}% ${fName}! ... your nutritional knowledge could be worse, but you should still probably give our meal generator a go!`;
    document.getElementById("result-image").style.backgroundImage = "url('./assets/images/just-ok.jpg')";
    document.getElementById("result-and-message-container").style.display= "block";
  } else {
    document.getElementById("result-message").innerHTML = `Wow ${fName}, you got ${scorePercent}%! ... you could probably use our meal generator!`;
    document.getElementById("result-image").style.backgroundImage = "url('./assets/images/bad-score.jpg')";
    document.getElementById("result-image").style.backgroundColor = 'beige';
    document.getElementById("result-and-message-container").style.display= "block";  
  }
}

function refreshPage() {
  const radio = document.getElementsByTagName("input");

  for(let i=0; i < radio.length; i++) {
    radio[i].checked = false;
  }
  document.getElementById("result-message").innerHTML = "";
  document.getElementById("quiz-result").innerHTML = "";
  document.getElementById("result-and-message-container").style.display= "none";
  
}
