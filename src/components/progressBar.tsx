import React, { useState } from "react";


export function ProgressBar({numAnswered}: {numAnswered:number}): JSX.Element{
    const [progress, setProgress] = useState<number>(numAnswered);
    function updateProgress(numAnswered: number){
        setProgress(numAnswered);
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