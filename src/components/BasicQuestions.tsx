import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function BasicQuestions({question,questionNumber, answers}:
{question: string; questionNumber:string; answers:string[]}): JSX.Element {
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
                id = {'question-${questionNumber}-${index}'}
                label = {answer}
                value={answer}
                checked={input === answer}
                onChange={updateInput}
                />
            ))}
        </Form>
    </div>
    )
}