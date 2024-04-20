import React, { useState } from "react";


export function ProgressBar({numAnswered}: {numAnswered:number}): JSX.Element{

    return(
        <div>
            <center>
            <progress value={numAnswered} max={100} />
            <span>{numAnswered}%</span>
            </center>
        </div>
    );
}