import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ProgressBar(): JSX.Element{
    const [progress, setProgress] = useState<number>(0);

    function updateProgress(){
        setProgress(progress+1);
    }

    return(
        <div>
            <center>
            <progress value={progress} max={100} />
            <span>{progress}%</span>
            </center>
        </div>
    );
}