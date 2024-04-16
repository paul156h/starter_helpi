import { BasicQuestions } from "../components/BasicQuestions";

export function BasicPage() {
  return (
    //The Basic Page will have questions be answered in mulitple choice form
    <>
      <h1>Basic Questionnaire</h1>
      <hr></hr>
      <BasicQuestions question="(add question 1 here)" questionNumber="1" answer1="yes" answer2="no" answer3="maybe" answer4="idk bruh"></BasicQuestions>
      <hr></hr>
      <BasicQuestions question="How comfortable are you with public speaking?" questionNumber="2" answer1="I'm extremely comfortable and am willing to do it" answer2="I'm fine with it whenever I have to do it" answer3="I would rather not have to do it" answer4="I cannot get myself to do this even if I tried"></BasicQuestions>
      <hr></hr>
      <BasicQuestions question="About how much money would you like to earn?" questionNumber="3" answer1="I want to become really, really rich" answer2="I would like to be able to buy whatever I want and still live a comfortable life" answer3="I'm fine with any amount as long as I live comfortably" answer4="Money doesn't have an impact on my decision"></BasicQuestions>
      <hr></hr>
      <BasicQuestions question="(add question 4 here)" questionNumber="4" answer1="yes" answer2="no" answer3="a" answer4="b"></BasicQuestions>
      <hr></hr>
      <BasicQuestions question="(add question 5 here)" questionNumber="5" answer1="yes" answer2="no" answer3="maybe" answer4="idk bruh"></BasicQuestions>
      <hr></hr>
      <BasicQuestions question="(add question 6 here)" questionNumber="6" answer1="yes" answer2="no" answer3="maybe" answer4="idk bruh"></BasicQuestions>
      <hr></hr>
      <BasicQuestions question="(add question 7 here)" questionNumber="7" answer1="yes" answer2="no" answer3="maybe" answer4="idk bruh"></BasicQuestions>
      <hr></hr>
      <BasicQuestions question="(add question 7 here)" questionNumber="8" answer1="yes" answer2="no" answer3="maybe" answer4="idk bruh"></BasicQuestions>
      <hr></hr>
      <BasicQuestions question="(add question 7 here)" questionNumber="9" answer1="yes" answer2="no" answer3="maybe" answer4="idk bruh"></BasicQuestions>
      <hr></hr>
      <BasicQuestions question="(add question 7 here)" questionNumber="10" answer1="yes" answer2="no" answer3="maybe" answer4="idk bruh"></BasicQuestions>
    </>
    //this can be stylized later to look better, but for now this is the basic setup
  );
}
