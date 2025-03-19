const questions = [
    { statement: "2+2?", answer: "2+2 = 4" },
    { statement: "In which year did Christopher Columbus discover America?", answer: "1492" },
    { statement: "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?", answer: "The E letter" }
  ];
  
  const contentDiv = document.getElementById("content");
  
  questions.forEach((q, index) => {
      const questionPara = document.createElement("p");
      questionPara.textContent = q.statement;
  
      const answerButton = document.createElement("button");
      answerButton.textContent = "Show the answer";
      
      answerButton.addEventListener("click", () => {
          answerButton.remove();
          const answerPara = document.createElement("p");
          answerPara.textContent = q.answer;
          questionPara.appendChild(answerPara);
      });
  
      questionPara.appendChild(answerButton);
      contentDiv.appendChild(questionPara);
  });
  