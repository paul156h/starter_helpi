import React, { useState } from "react";
import { DetailedQuestions } from "../components/DetailedQuestions";
import { ProgressBar } from "../components/progressBar";
import { Button, Form } from "react-bootstrap";
import "./detailedPage.css";
import "./detailedPage.css";
import job1 from "../images/job1.jpg";
import job2 from "../images/job2.jpg";
import job3 from "../images/job3.jpg";
import job4 from "../images/job4.jpg";
import job5 from "../images/job5.jpg";

let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

export function DetailedPage() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [numAnswered, setNumAnswered] = useState<number>(0);

  const updateNumAnswered = (value: number) => {
    setNumAnswered(numAnswered + value);
  };
  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };
  const handlePrevQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload();
  };
  const [key, setKey] = useState<string>(keyData);

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  return (
    <>
      <div className="detailed-title">
        <h1>Welcome To Our Detailed Questions</h1>
      </div>
      <ProgressBar numAnswered={numAnswered}></ProgressBar>
      <div className="question">
        <DetailedQuestions
          question="What was your favorite and least favorite subjects in high school/college?"
          questionNumber={1}
          currentQuestion={currentQuestion}
          image={job1}
          updateNumAnswered={updateNumAnswered}
        ></DetailedQuestions>

        <DetailedQuestions
          question="How much of an impact will the amount of money you could potentially earn from your career impact your decision?"
          questionNumber={2}
          currentQuestion={currentQuestion}
          image={job2}
          updateNumAnswered={updateNumAnswered}
        ></DetailedQuestions>

        <DetailedQuestions
          question="Would you rather be the leader a team or be one of the workers of a team?"
          questionNumber={3}
          currentQuestion={currentQuestion}
          image={job3}
          updateNumAnswered={updateNumAnswered}
        ></DetailedQuestions>

        <DetailedQuestions
          question="Would you want to create a difference in the world with your job or are you content with just getting your job done?"
          questionNumber={4}
          currentQuestion={currentQuestion}
          image={job4}
          updateNumAnswered={updateNumAnswered}
        ></DetailedQuestions>

        <DetailedQuestions
          question="Would you rather have a job where you are constantly communicating with customers or one where you can keep to yourself?"
          questionNumber={5}
          currentQuestion={currentQuestion}
          image={job5}
          updateNumAnswered={updateNumAnswered}
        ></DetailedQuestions>

        <DetailedQuestions
          question="What part of the world would you like to live while working?"
          questionNumber={6}
          currentQuestion={currentQuestion}
          image={job1}
          updateNumAnswered={updateNumAnswered}
        ></DetailedQuestions>

        <DetailedQuestions
          question="How many hours a day are you willing to work(including unpaid overtime)?"
          questionNumber={7}
          currentQuestion={currentQuestion}
          image={job2}
          updateNumAnswered={updateNumAnswered}
        ></DetailedQuestions>

        <DetailedQuestions
          question="What is your level of expertise with computers and electronics?"
          questionNumber={8}
          currentQuestion={currentQuestion}
          image={job3}
          updateNumAnswered={updateNumAnswered}
        ></DetailedQuestions>

        <DetailedQuestions
          question="Would you be willing to have a career with something that includes a lot of manual labor?"
          questionNumber={9}
          currentQuestion={currentQuestion}
          image={job4}
          updateNumAnswered={updateNumAnswered}
        ></DetailedQuestions>

        <DetailedQuestions
          question="Would you like to make your own work schedule and work off your own terms or are you content with having a predetermined schedule every week?"
          questionNumber={10}
          currentQuestion={currentQuestion}
          image={job5}
          updateNumAnswered={updateNumAnswered}
        ></DetailedQuestions>
      </div>

      <div>
        {numAnswered === 100 ? (
          <center>
            <h2>You Have Answered All Questions, Go to Last Page to Submit!</h2>{" "}
          </center>
        ) : (
          <hr></hr>
        )}
      </div>

      <div className="next-container">
        <div className="prev">
          {currentQuestion > 1 ? (
            <Button onClick={handlePrevQuestion}>Prev </Button>
          ) : (
            <hr></hr>
          )}
        </div>

        <div className="next"></div>
        {currentQuestion < 10 ? (
          <Button onClick={handleNextQuestion}>Next</Button>
        ) : (
          <Button onClick={handleSubmit} disabled={numAnswered !== 100}>
            Submit
          </Button>
        )}
      </div>

      {submitted ? (
        <center>
          <h1>Good Job for Submitting</h1>
        </center>
      ) : (
        ""
      )}
      <div className="footer">
      <p>
      <div>
      <Form className="api-key-form">
        <Form.Label className="center-label">API Key:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Insert API Key Here"
          onChange={changeKey}
        ></Form.Control>
        
        <div>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
        </div>
      Copyright 2024; Designed by Nazmul Hossain, Brandon Cell, James Healy, and Matthew Montalvo 
      </Form>
      </div>
      </p>
      </div>
    </>
  );
}
