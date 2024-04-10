import React from "react";
import { DetailedQuestions } from "../components/DetailedQuestions";

export function DetailedPage() {
  return (
    <>
      <h1>Detailed Questionnaire</h1>
      <hr></hr>
      <DetailedQuestions question="hi" questionNumber="1"></DetailedQuestions>
    </>

  );
}
