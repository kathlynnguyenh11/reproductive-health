import React from "react";

import {QUIZ_DATA} from '../asset/QuizData';

class Quiz extends React.Component{

  state = {
    userAnswer: null,
    currentQuestion: 0,
    options: [],
    quizEnd: false,
    score: 0,
  }

  loadQuiz = () => {
    const {currentQuestion} = this.state;
    this.setState(()=>{
      return {
        question: QUIZ_DATA[currentQuestion].question,
        options: QUIZ_DATA[currentQuestion].options,
        answer: QUIZ_DATA[currentQuestion].answer,
      }
    })
  }

  nextQuestionHandler = () => {
    const {userAnswer, answer, score} = this.state;
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    })
    if (userAnswer === answer){
      this.setState({
        score: score+1
      })
    }

  }

  finishHandler = () => {
    if (this.state.currentQuestion === QUIZ_DATA.length - 1) {
      this.setState({
        quizEnd: true
      })
    }
  }

  checkAnswer = (answer)=>{
    this.setState({
      userAnswer: answer
    })
  }
  componentDidMount() {
    this.loadQuiz();
  }

  componentDidUpdate(prevProps, prevState){
    const {currentQuestion} = this.state;
    if ((this.state.currentQuestion)!== prevState.currentQuestion){
      this.setState(()=>{
        return{
          disabled: true,
          question: QUIZ_DATA[currentQuestion].question,
          options: QUIZ_DATA[currentQuestion].options,
          answer: QUIZ_DATA[currentQuestion].answer,
        }
      })
    }
  }

  render(){
    const {question, options, currentQuestion, userAnswer, quizEnd, score} = this.state;
    
    if (quizEnd){
      return(
        <div className="container-fluid text-center"> 
        <div> 
          <h2 className="mont-font">Game over!</h2>
          <h4 className="font-italic">Final score is {score}</h4>
        </div>
        <div className="container-fluid bg-1 container__margin">
          <h5 className="mont-font text-center text-white">The correct answers: </h5>
          <div className="text-justify">
            {QUIZ_DATA.map((item,index) => (
              <div 
                className="row ui floating message options"
                key={index}
              >
              <span>{item.question}</span> 
              <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      )
    }
    return(
      <div className="container-fluid container__margin text-center">
        <div className="container-fluid">
          <h3 className="mont-font">Sex and Gender Identity</h3>
          <p>There’s a lot more to being male, female, or any gender than the sex assigned at birth. Your biological or assigned sex does not always tell your complete story.</p>
          <p className="font-italic">Take the quiz below to know more about different terms about sex and gender identity</p>
        </div>
        <div className="quiz bg-2 container-fluid container__margin text-center text-white">
          <h4 className="mont-font text-center">{question}</h4>
          <span className="">{`Questions ${currentQuestion+1} out of ${QUIZ_DATA.length}`}</span>
            {options.map(option => (
              <p 
                key={option.id}
                className={`ui floating message options
                  ${userAnswer === option ? "selected" : ""}
                  `}
                onClick={() => this.checkAnswer(option)}
              >
                {option}
              </p>
            ))}
            {currentQuestion < QUIZ_DATA.length-1 && 
            <button onClick={this.nextQuestionHandler} className="btn btn-light"> Next </button>
            }
            {currentQuestion === QUIZ_DATA.length-1 && 
            <button onClick={this.finishHandler}> Finish </button>
          }
        </div>
      </div>
    )
  }
};

export default Quiz;
