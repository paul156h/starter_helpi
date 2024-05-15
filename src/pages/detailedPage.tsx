import React, { useState } from "react";
import { DetailedQuestions } from "../components/DetailedQuestions";
import { Button, Form } from "react-bootstrap";
import { ProgressBar } from "../components/progressBar";
import "./detailedPage.css";

import job1 from "../images/job1.jpg";
import job2 from "../images/job2.jpg";
import job5 from "../images/job5.jpg";
import job6 from "../images/job6.png";
import job7 from "../images/job7.png";
import job8 from "../images/job8.png";
import job9 from "../images/job9.png";
import job10 from "../images/job10.png";
import job11 from "../images/job11.png";
import job12 from "../images/job12.png";

import loadingbar from "../images/loadingbar.gif";
import checkmark from "../images/checkmark.png";

import OpenAI from "openai";

function addNewLineBeforeNumbers(inputString: string): string {
  const stringWithoutStars = inputString.replace(/\*\*/g, "");
  const regex = /(\d+\.)|(\d+)/g;
  let match;
  let lastIndex = 0;
  let modifiedString = "";

  while ((match = regex.exec(stringWithoutStars)) !== null) {
    const matchIndex = match.index;
    modifiedString += stringWithoutStars.substring(lastIndex, matchIndex);
    modifiedString += match[0];
    lastIndex = matchIndex + match[0].length;
  }
  modifiedString += stringWithoutStars.substring(lastIndex);
  return modifiedString;
}

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
  const [resultArray, setResultArray] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [careers, setCareers] = useState<string>("");
  const [readyForResults, setReadyForResults] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [key, setKey] = useState<string>(keyData);

  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload();
  }

  const updateSubmitted = (bool: boolean) => {
    setSubmitted(bool);
  };

  const updateReadyForResults = () => {
    setReadyForResults(!readyForResults);
  };

  const updateLoading = (bool: boolean) => {
    setLoading(bool);
  };

  const updateCareers = (response: string) => {
    setCareers(response);
  };

  const updateResultArray = (answer: string, num: number) => {
    const tempArray = [...resultArray];
    tempArray.splice(num, 1, answer);
    setResultArray(tempArray);
  };

  const updateNumAnswered = (value: number) => {
    setNumAnswered(numAnswered + value);
  };
  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };
  const handlePrevQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  const resetQuiz = () => {
    setCurrentQuestion(1);
    setNumAnswered(0);
    setLoading(true);
    setSubmitted(false);
    updateReadyForResults();
  };

  async function results(answers: string[]) {
    console.log(answers);
    let Key = localStorage.getItem("MYKEY");
    if (Key !== null) {
      Key = JSON.parse(Key);
    }
    if (Key === null) {
      throw new Error("API key not found");
    }
    const openai = new OpenAI({ apiKey: Key, dangerouslyAllowBrowser: true });
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant. Your answers will be used as the results of an ideal career questionnaire.",
          },
          {
            role: "user",
            content: `Take in all of the answers and analyze it and Only List 5 Jobs that best Suits the user after given all of the answers. The questions are as follows: Question 1: What was your favorite and least favorite subjects in high school/college?; Question 2: How much of an impact will the amount of money you could potentially earn from your career impact your decision?; Question 3: Would you rather be the leader a team or be one of the workers of a team?; Question 4: Would you want to create a difference in the world with your job or are you content with just getting your job done?; Question 5: Would you rather have a job where you are constantly communicating with customers or one where you can keep to yourself?; Question 6: What part of the world would you like to live while working?; Question 7: How many hours a day are you willing to work(including unpaid overtime)?; Question 8: What is your level of expertise with computers and electronics?; Question 9: Would you be willing to have a career with something that includes a lot of manual labor?; Question 10: Would you like to make your own work schedule and work off your own terms or are you content with having a predetermined schedule every week? Generate possible career choices for someone who responded to the quiz questions in the form of a list. Their answers are for those questions are stored in this array: ${answers}.`,
          },
        ],
        model: "gpt-4-turbo",
      });
      if (completion.choices[0].message.content !== null) {
        // Remove "**" from the content before formatting
        const contentWithoutStars =
          completion.choices[0].message.content.replace(/\*\*/g, "");

        // Format careers with new lines before each career suggestion
        const formattedCareers = addNewLineBeforeNumbers(contentWithoutStars);
        updateCareers(formattedCareers);
        updateLoading(false);
      } else {
        updateCareers("No careers found");
        updateLoading(false);
      }
    } catch {
      updateCareers("An error occured while searching for careers");
      updateLoading(false);
    }
  }

  const handleSubmitAnswers = () => {
    updateSubmitted(true);
    results(resultArray);
    console.log(careers);
  };

  return (
    <>
      <div className="detailed-title">
        <h1>Welcome To Our Detailed Quiz</h1>
      </div>
      {!submitted ? (
        <>
          <ProgressBar numAnswered={numAnswered}></ProgressBar>
          <div className="question">
            <DetailedQuestions
              question="What were your favorite and least favorite subjects in high school/college?"
              questionNumber={1}
              currentQuestion={currentQuestion}
              image={job1}
              updateNumAnswered={updateNumAnswered}
              updateResultArray={updateResultArray}
            ></DetailedQuestions>

            <DetailedQuestions
              question="How much of an impact will the amount of money you could potentially earn from your career impact your decision?"
              questionNumber={2}
              currentQuestion={currentQuestion}
              image={job8}
              updateNumAnswered={updateNumAnswered}
              updateResultArray={updateResultArray}
            ></DetailedQuestions>

            <DetailedQuestions
              question="Would you rather be the leader a team or be one of the workers of a team?"
              questionNumber={3}
              currentQuestion={currentQuestion}
              image={job6}
              updateNumAnswered={updateNumAnswered}
              updateResultArray={updateResultArray}
            ></DetailedQuestions>

            <DetailedQuestions
              question="Would you want to create a difference in the world with your job or are you content with just getting your job done?"
              questionNumber={4}
              currentQuestion={currentQuestion}
              image={job9}
              updateNumAnswered={updateNumAnswered}
              updateResultArray={updateResultArray}
            ></DetailedQuestions>

            <DetailedQuestions
              question="Would you rather have a job where you are constantly communicating with customers or one where you can keep to yourself?"
              questionNumber={5}
              currentQuestion={currentQuestion}
              image={job7}
              updateNumAnswered={updateNumAnswered}
              updateResultArray={updateResultArray}
            ></DetailedQuestions>

            <DetailedQuestions
              question="What part of the world would you like to live while working?"
              questionNumber={6}
              currentQuestion={currentQuestion}
              image={job12}
              updateNumAnswered={updateNumAnswered}
              updateResultArray={updateResultArray}
            ></DetailedQuestions>

            <DetailedQuestions
              question="How many hours a day are you willing to work(including unpaid overtime)?"
              questionNumber={7}
              currentQuestion={currentQuestion}
              image={job2}
              updateNumAnswered={updateNumAnswered}
              updateResultArray={updateResultArray}
            ></DetailedQuestions>

            <DetailedQuestions
              question="What is your level of expertise with computers and electronics?"
              questionNumber={8}
              currentQuestion={currentQuestion}
              image={job5}
              updateNumAnswered={updateNumAnswered}
              updateResultArray={updateResultArray}
            ></DetailedQuestions>

            <DetailedQuestions
              question="Would you be willing to have a career with something that includes a lot of manual labor?"
              questionNumber={9}
              currentQuestion={currentQuestion}
              image={job11}
              updateNumAnswered={updateNumAnswered}
              updateResultArray={updateResultArray}
            ></DetailedQuestions>

            <DetailedQuestions
              question="Would you like to make your own work schedule and work off your own terms or are you content with having a predetermined schedule every week?"
              questionNumber={10}
              currentQuestion={currentQuestion}
              image={job10}
              updateNumAnswered={updateNumAnswered}
              updateResultArray={updateResultArray}
            ></DetailedQuestions>
          </div>

          <div>
            {numAnswered === 100 && !submitted && currentQuestion !== 10 ? (
              <center>
                <h2>
                  You Have Answered All Questions, Go to Last Page to Submit!
                </h2>{" "}
              </center>
            ) : (
              <></>
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
              <Button
                onClick={handleSubmitAnswers}
                disabled={numAnswered !== 100}
              >
                Submit
              </Button>
            )}
          </div>
        </>
      ) : (
        <center>
          {!readyForResults ? (
            <>
              {loading ? (
                <div className="loadingScreen1">
                  <img
                    src={loadingbar}
                    className="loading-image"
                    alt="loadingImg"
                  ></img>
                  <h2>Give Us a Second, We are Loading Your Results!</h2>
                </div>
              ) : (
                <>
                  <img
                    src={checkmark}
                    className="checkmark-image"
                    alt="checkmarkimg"
                  ></img>
                  <h2>Results Created, Click the Button to View!</h2>
                  <div className="loadingScreen2">
                    <Button
                      className="resultBtn"
                      onClick={updateReadyForResults}
                    >
                      See Results
                    </Button>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="resultBox">
                <h3>These Careers Are Best Suited For You</h3>
                {careers.split("\n").map((career, index) => (
                  <p key={index}>{career}</p>
                ))}
              </div>

              <div>
                {submitted && (
                  <Button className="resetButton" onClick={resetQuiz}>
                    Reset Quiz
                  </Button>
                )}
              </div>
            </>
          )}
        </center>
      )}

      <div className="footer">
        <p>
          <div>
            <Form className="api-key-form">
              <Form.Label className="center-label">API Key</Form.Label>
              <Form.Control
                className="api-input"
                type="password"
                placeholder="Insert API Key Here"
                onChange={changeKey}
              ></Form.Control>
              <div>
                <Button className="Submit-Button" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
              Copyright 2024 - Designed by Nazmul Hossain, Brandon Cell, James
              Healy, and Matthew Montalvo
            </Form>
          </div>
        </p>
      </div>
    </>
  );
}
