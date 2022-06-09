import React, { useState } from "react";
import "./QuestionForm.css";
import questionList from "../../Data/questions.json";
const QuestionForm = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const [questionCategory, setQuestionCategory] = useState("");
  const [questionDifficulty, setQuestionDifficulty] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswer, setIncorrectAnswer] = useState("");
  const [incorrectAnswer1, setIncorrectAnswer1] = useState("");
  const [incorrectAnswer2, setIncorrectAnswer2] = useState("");

  const handleSubmit1 = (e) => {                                //butona basılınca input formlarının içindeki verileri alıcak 
    /* SORU EKLEME KISMI questionList.result çekiliyor ... ile ayrılıp json dosyasına yeni array yeni array ekleniyor*/
    e.preventDefault();
    console.log(
      newQuestion,
      questionCategory,
      questionDifficulty,
      correctAnswer,
      incorrectAnswer,incorrectAnswer1,incorrectAnswer2
    );

    questionList.results = [            //json dosyasına yeni array(?) ekleme , ... ile json dosyasınının hepsini alıp girdiler vasıtasıyla yeni veri
      ...questionList.results,
      {
        category: questionCategory,
        difficulty: questionDifficulty,
        question: newQuestion,
        correct_answer: correctAnswer,
        incorrect_answers: [incorrectAnswer,incorrectAnswer1,incorrectAnswer2],
      },
    ];
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div>
          <input
            className="newQuestion"
            type="text"
            placeholder="  Soru :"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
        </div>
        <div>
          <input
            className="newQuestion"
            type="text"
            placeholder="  Ders :"
            value={questionCategory}
            onChange={(e) => setQuestionCategory(e.target.value)}
          />
        </div>
        <div>
          <input
            className="newQuestion"
            type="text"
            placeholder="  Sınavın türü :"
            value={questionDifficulty}
            onChange={(e) => setQuestionDifficulty(e.target.value)}
          />
         </div> 
          <div>
            <input
              className="newQuestion"
              type="text"
              placeholder="  Doğru Cevap :"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            />
          </div>
          <div>
          <input
            className="newQuestion"
            type="text"
            placeholder="  Yanlış Cevap :"
            value={incorrectAnswer}
            onChange={(e) => setIncorrectAnswer(e.target.value)}
          />
          </div>
          <div>
          <input
            className="newQuestion"
            type="text"
            placeholder="  Yanlış Cevap :"
            value={incorrectAnswer1}
            onChange={(e) => setIncorrectAnswer1(e.target.value)}
          />
          </div>
          <div>
          <input
            className="newQuestion"
            type="text"
            placeholder="  Yanlış Cevap :"
            value={incorrectAnswer2}
            onChange={(e) => setIncorrectAnswer2(e.target.value)}
          />
          </div>
        </div>
     
      <div className="new-expense__actions">
        <button className="button-5" type={"submit"} onClick={handleSubmit1}>
          Soru Ekle
        </button>
      </div>
    </form>
  );
};

export default QuestionForm;
