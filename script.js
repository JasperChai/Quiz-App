function checkAnswer(){
  const answer = document.getElementById("answer-input").value;
  if(answer.toLowerCase() == "paris"){
    document.getElementById("result").innerHTML = "Correct!";
  }else{
    document.getElementById("result").innerHTML = "Incorrect!";
  }
}

function checkAnswer1(){
  const answer = document.getElementById("answer-input").value;
  if(answer.toLowerCase() == "yes"){
    document.getElementById("result-2").innerHTML = "Correct!";
  }else{
    document.getElementById("result-2").innerHTML = "Incorrect!";
  }
}