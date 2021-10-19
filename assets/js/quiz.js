//Calculates the quiz score by incrementing the score total by 1 whenever the correct answer has been selected. 
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
 
  // Rounds quiz score to a while numnber and displays score as a percentage. 
  let scorePercent = Math.round((score/6)*100);
  document.getElementById("quiz-result").innerHTML = "Result:"+ scorePercent + "%";
  
  // Gets user input name to include in result message. If no name is input, message is adjusted to prevent empty spaces.
  let fName = document.getElementById("input_id").value;
  if (fName != "") {
    fName = " " + fName;
  }

  // Determines what message and image is displayed to the user depending on their quiz score.
  if (scorePercent>=90) {
    document.getElementById("result-message").innerHTML = `Congrats${fName}, you got ${scorePercent}%! You must be a qualified nutritionist!`;
    document.getElementById("result-image").style.backgroundImage = "url('./assets/images/nutritionist.jpg')";
    document.getElementById("result-and-message-container").style.display= "block";
  } else if (scorePercent>=60) {
    document.getElementById("result-message").innerHTML = `Nice work${fName}! You got ${scorePercent}%! :)`;
    document.getElementById("result-image").style.backgroundImage = "url('./assets/images/nice-work2.jpg')";
    document.getElementById("result-image").style.objectFit = "contain";
    document.getElementById("result-and-message-container").style.display= "block";
  } else if (scorePercent>=30) {
    document.getElementById("result-message").innerHTML = `Hmm, you got ${scorePercent}%${fName}! ... your nutritional knowledge could be worse, but you should still probably give our meal generator a go!`;
    document.getElementById("result-image").style.backgroundImage = "url('./assets/images/bad-score.png')";
    document.getElementById("result-and-message-container").style.display= "block";
  } else {
    document.getElementById("result-message").innerHTML = `Wow${fName}, you got ${scorePercent}%! ... you could probably use our meal generator!`;
    document.getElementById("result-image").style.backgroundImage = "url('./assets/images/bad-score.png')";
    document.getElementById("result-and-message-container").style.display= "block";  
  }
}

// Clears all radio buttons and any result message and image displayed from a previous quiz round.
function refreshPage() {
  const radio = document.getElementsByTagName("input");

  for(let i=0; i < radio.length; i++) {
    radio[i].checked = false;
  }
  document.getElementById("result-message").innerHTML = "";
  document.getElementById("quiz-result").innerHTML = "";
  document.getElementById("result-and-message-container").style.display= "none";
  
}
