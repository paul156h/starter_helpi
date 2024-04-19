import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function BasicQuestions({question,questionNumber, answers, currentQuestion}:
{question: string; questionNumber:number; answers:string[]; currentQuestion:number;}): JSX.Element {
    const [input, setInput] = useState<string>("");
    function updateInput(event: React.ChangeEvent<HTMLInputElement>){
        setInput(event.target.value);
    }

    return(
    <div>
        <p>Question {questionNumber}: {question}</p>
        <Form>
            {answers.map((answer, index) => (
                <Form.Check
                key = {index}
                type = "radio"
                id = {answer}
                label = {answer}
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