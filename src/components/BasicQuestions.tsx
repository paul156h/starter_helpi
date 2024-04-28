import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./BasicQuestion.css";

export function BasicQuestions({
  question,
  questionNumber,
  image,
  answers,
  currentQuestion,
  updateNumAnswered,
  updateResultArray,
}: {
  question: string;
  questionNumber: number;
  image: string;
  answers: string[];
  currentQuestion: number;
  updateNumAnswered: (value: number) => void;
  updateResultArray: (value: string, num: number) => void;
}): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [alreadyAnswered, setAlreadyAnswered] = useState<boolean>(false);

  function updateInput(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedInput = event.target.value;
    setInput(updatedInput);
    if (!alreadyAnswered) {
      setAlreadyAnswered(true);
      updateResultArray(updatedInput, questionNumber);
      updateNumAnswered(10);
    }
  }

  return (
    <div>
      {questionNumber !== currentQuestion ? (
        ""
      ) : (
        <div>
          <p>
            Question {questionNumber}: {question}
          </p>
          <img src={image} className="basicQ-img" alt="questionImg"></img>
          <Form>
            {answers.map((answer, index) => (
              <Form.Check
                key={index}
                type="radio"
                id={answer}
                label={questionNumber === currentQuestion ? answer : ""}
                hidden={questionNumber !== currentQuestion}
                value={answer}
                checked={input === answer}
                onChange={updateInput}
              />
            ))}
          </Form>
        </div>
      )}
    </div>
  );
}
