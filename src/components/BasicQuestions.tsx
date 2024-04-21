import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function BasicQuestions({question,questionNumber, answers, currentQuestion, updateNumAnswered}:
{question: string; questionNumber:number; answers:string[]; currentQuestion:number; updateNumAnswered: (value: number) => void }): JSX.Element {
    const [input, setInput] = useState<string>("");
    function updateInput(event: React.ChangeEvent<HTMLInputElement>){
        setInput(event.target.value);

        if(input === ""){
            updateNumAnswered(-10)
        }
        else{
            updateNumAnswered(10)
        }
    }

    return(
    <div>
        {questionNumber !== currentQuestion ? "" : <p>Question {questionNumber}: {question}</p>}
        <Form>
            {answers.map((answer, index) => (
                <Form.Check
                key = {index}
                type = "radio"
                id = {answer}
                label = {questionNumber === currentQuestion ? answer : ""}
                hidden={questionNumber !== currentQuestion}
                value={answer}
                checked={input === answer}
                onChange={updateInput}
                />
            ))}
        </Form>
    </div>
    )
}