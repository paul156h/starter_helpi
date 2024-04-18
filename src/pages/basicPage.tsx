import { Button } from "react-bootstrap";
import { BasicQuestions } from "../components/BasicQuestions";
import { useState } from "react";

export function BasicPage() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };
  return (
    //The Basic Page will have questions be answered in mulitple choice form
    <>
      <h1>Basic Questionnaire</h1>
      <hr></hr> {currentQuestion === 1 && (
      <BasicQuestions question="How much experience do you have with working?" questionNumber="1" answer1="I have had several different jobs at different places" answer2="I have only had a 2-3 different jobs" answer3="I have only had one singlular job my whole life" answer4="I have never had a job before"></BasicQuestions>
      )}
      <hr></hr> {currentQuestion === 2 && (
      <BasicQuestions question="How comfortable are you with public speaking?" questionNumber="2" answer1="I'm extremely comfortable and am willing to do it" answer2="I'm fine with it whenever I have to do it" answer3="I would rather not have to do it" answer4="I cannot get myself to do this even if I tried"></BasicQuestions>
      )}
      <hr></hr> {currentQuestion === 3 && (
      <BasicQuestions question="About how much money would you like to earn?" questionNumber="3" answer1="I want to become really, really rich" answer2="I would like to be able to buy whatever I want and still live a comfortable life" answer3="I'm fine with any amount as long as I live comfortably" answer4="Money doesn't have an impact on my decision"></BasicQuestions>
      )}
      <hr></hr> {currentQuestion === 4 && (
      <BasicQuestions question="Which one of these words best describes you?" questionNumber="4" answer1="Center of Attention" answer2="Participating" answer3="In the crowd" answer4="Alone"></BasicQuestions>
      )}
      <hr></hr> {currentQuestion === 5 && (
      <BasicQuestions question="How much would you like your job to help people?" questionNumber="5" answer1="I want it to be my sole purpose" answer2="I would really like if my job helped others in need" answer3="I would be fine if helping people was a side effect of me doing my job" answer4="I couldn't care less how my actions may impact someone"></BasicQuestions>
      )}
      <hr></hr> {currentQuestion === 6 && (
      <BasicQuestions question="How many hours would you like to work" questionNumber="6" answer1="I'm fine with whatever I am assigned, even if I have to work overtime" answer2="I would like to work a 9-5 (or any other 8 hour period)" answer3="I would prefer to work a lot less than 8 hours a day" answer4="I would rather create my own hours and work to my own schedule"></BasicQuestions>
      )}
      <hr></hr> {currentQuestion === 7 && (
      <BasicQuestions question="How good are you at planning?" questionNumber="7" answer1="I usually have a schedule planning literally every part of my day out" answer2="I make sure to keep the big events in check but don't worry about the little parts of my schedule" answer3="I try to keep my plan organized but usually don't do a good job with it" answer4="I don't keep a schedule and I deal with things as they come"></BasicQuestions>
      )}
      <hr></hr> {currentQuestion === 8 && (
      <BasicQuestions question="Which of the following sounds the most interesting?" questionNumber="8" answer1="Electronic & Programs" answer2="History & Culture" answer3="Biology & Anatomy" answer4="Sports & Fitness"></BasicQuestions>
      )}
      <hr></hr> {currentQuestion === 9 && (
      <BasicQuestions question="How much are you willing to do any sort of manual labor?" questionNumber="9" answer1="I would prefer to do manual labor in my job" answer2="I am fine with some manual labor in my job" answer3="I would prefer not to have manual labor in my job" answer4="I will never want to do any manual labor in my job"></BasicQuestions>
      )}
      <hr></hr> {currentQuestion === 10 && (
      <BasicQuestions question="What would you rather do with your free time?" questionNumber="10" answer1="Learn a new skill" answer2="Relax" answer3="Have fun with a hobby" answer4="Spend the time with friends/loved ones"></BasicQuestions>
      )}
      {currentQuestion < 10 && (<Button onClick = {handleNextQuestion}>Next</Button>)}
    </>
    //this can be stylized later to look better, but for now this is the basic setup
  );
}
