import React, { useState } from "react";
import { Form } from "react-bootstrap";


export function DetailedQuestions({question,questionNumber,currentQuestion}: {question: string; questionNumber:number;currentQuestion:number;}): JSX.Element {
    const [input, setInput] = useState<string>("");
    function updateInput(event: React.ChangeEvent<HTMLInputElement>){
        setInput(event.target.value);
    }

    return(
        <div>
            {questionNumber !== currentQuestion ? "" : <p>Question {questionNumber}: {question}</p>}
            <Form.Group controlId="checkInput">
                <Form.Control type="text" value={input} hidden={questionNumber !== currentQuestion} onChange={updateInput} />
            </Form.Group>
        </div>
    );
}