import React from "react";
import { DetailedQuestions } from "../components/DetailedQuestions";

export function DetailedPage() {
  return (
    <>
      <h1>Detailed Questionnaire</h1>
      <hr></hr>
      <DetailedQuestions question="What was your favorite and least favorite subjects in high school/college?" questionNumber="1"></DetailedQuestions>
      <hr></hr>
      <DetailedQuestions question="How much of an impact will the amount of money you could potentially earn from your career impact your decision?" questionNumber="2"></DetailedQuestions>
      <hr></hr>
      <DetailedQuestions question="Would you rather be the leader a team or be one of the workers of a team?" questionNumber="3"></DetailedQuestions>
      <hr></hr>
      <DetailedQuestions question="Would you want to create a difference in the world with your job or are you content with just getting your job done?" questionNumber="4"></DetailedQuestions>
      <hr></hr>
      <DetailedQuestions question="Would you rather have a job where you are constantly communicating with customers or one where you can keep to yourself?" questionNumber="5"></DetailedQuestions>
      <hr></hr>
      <DetailedQuestions question="What part of the world would you like to live while working?" questionNumber="6"></DetailedQuestions>
      <hr></hr>
      <DetailedQuestions question="How many hours a day are you willing to work(including unpaid overtime)?" questionNumber="7"></DetailedQuestions>
      <hr></hr>
      <DetailedQuestions question="What is your level of expertise with computers and electronics?" questionNumber="8"></DetailedQuestions>
      <hr></hr>
      <DetailedQuestions question="Would you be willing to have a career with something that includes a lot of manual labor?" questionNumber="9"></DetailedQuestions>
      <hr></hr>
      <DetailedQuestions question="Would you like to make your own work schedule and work off your own terms or are you content with having a predetermined schedule every week?" questionNumber="10"></DetailedQuestions>
    </>
        //this can be stylized later to look better, but for now this is the basic setup
  );
}
