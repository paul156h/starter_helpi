import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ProgressBar(): JSX.Element{
    const [progress, setProgress] = useState<number>(0);


    return(
        <div>

            <progress value={progress} max={100} />
            <span>{progress}%</span>

        </div>
    );
}