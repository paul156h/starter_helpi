import React, { useState } from "react";
import { DetailedQuestions } from "../components/DetailedQuestions";
import {ProgressBar} from "../components/progressBar";
import { Button } from "react-bootstrap";

export function DetailedPage() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };
  const handlePrevQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleSubmit = () => { 
    setSubmitted(true);
  };
  return (
    <>
    <ProgressBar numAnswered={0}></ProgressBar>
      <h1>Detailed Questionnaire</h1>
      <DetailedQuestions question="What was your favorite and least favorite subjects in high school/college?" questionNumber={1} currentQuestion={currentQuestion}></DetailedQuestions>
      
      <DetailedQuestions question="How much of an impact will the amount of money you could potentially earn from your career impact your decision?" questionNumber={2} currentQuestion={currentQuestion}></DetailedQuestions>
      
      <DetailedQuestions question="Would you rather be the leader a team or be one of the workers of a team?" questionNumber={3} currentQuestion={currentQuestion}></DetailedQuestions>
      
      <DetailedQuestions question="Would you want to create a difference in the world with your job or are you content with just getting your job done?" questionNumber={4} currentQuestion={currentQuestion}></DetailedQuestions>
      
      <DetailedQuestions question="Would you rather have a job where you are constantly communicating with customers or one where you can keep to yourself?" questionNumber={5} currentQuestion={currentQuestion}></DetailedQuestions>
      
      <DetailedQuestions question="What part of the world would you like to live while working?" questionNumber={6} currentQuestion={currentQuestion}></DetailedQuestions>
      
      <DetailedQuestions question="How many hours a day are you willing to work(including unpaid overtime)?" questionNumber={7} currentQuestion={currentQuestion}></DetailedQuestions>
      
      <DetailedQuestions question="What is your level of expertise with computers and electronics?" questionNumber={8} currentQuestion={currentQuestion}></DetailedQuestions>
      
      <DetailedQuestions question="Would you be willing to have a career with something that includes a lot of manual labor?" questionNumber={9} currentQuestion={currentQuestion}></DetailedQuestions>
      
      <DetailedQuestions question="Would you like to make your own work schedule and work off your own terms or are you content with having a predetermined schedule every week?" questionNumber={10} currentQuestion={currentQuestion}></DetailedQuestions>
      <div>
      {currentQuestion > 1 ? (<Button onClick={handlePrevQuestion}>Prev </Button>) : <hr></hr>}
      </div>
      <div>
      {currentQuestion < 10 ? (
        <Button onClick = {handleNextQuestion}>Next</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
      </div>
    </>
        //this can be stylized later to look better, but for now this is the basic setup
  );
}
