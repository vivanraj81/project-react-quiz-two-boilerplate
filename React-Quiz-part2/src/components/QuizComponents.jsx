import React, { Component } from 'react'
import questions from './quizQuestion.json'
import '../App.css'

 class QuizComponents extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       questions : questions,
       start : {}, 
       next : {},
       previous : {},
       qIndex : 0,

    }
  }
  
  componentDidMount(){
    this.startQuestion(this.start, this.questions, this.next, this.previous);
  }

  startQuestion=(questions=this.state.questions,start, next, previous)=>{
    let {qIndex} = this.state;

    if (this.state.questions.length !==0) {
      questions = this.state.questions
      start = questions[qIndex]
      next = questions[qIndex + 1]
      previous = questions[qIndex - 1]  


      this.setState({
        start,
        next,
        previous 
       
      })
  }
    
  }

  next=()=>{
    if(this.state.next !==undefined){
      this.setState(prevState => ({
        qIndex : prevState.qIndex + 1
      }),() =>{ this.startQuestion(this.state.state, this.state.start, this.state.next, this.state.previous)})
    }
  }

  handlePrevious=()=>{
    if(this.state.previous !==undefined){
      this.setState(prevState => ({
        qIndex : prevState.qIndex - 1
      }),() =>{ this.startQuestion(this.state.state, this.state.start, this.state.next, this.state.previous)})
    }
  }

  handleQuit=()=>{
   if(window.confirm('Are you sure you want to quit?')){
    window.location.reload(false);
   }
  }
  render() {
    const {start} = this.state;

    return (
      <div className='box'>
        <h1>Question</h1>

        <div><div className="back">{this.state.qIndex +1} of 15</div>
            <h3>{start.question}</h3>
        </div>

        <div className="choices pack">
          <p className='a'>{start.optionA}</p>
          <p className='a'>{start.optionB}</p>
        </div>

        <div className="choices pack">
          <p className='a'>{start.optionC}</p>
          <p className='a'>{start.optionD}</p>
        </div>

        <div className="click">
          <button className='previous' onClick={this.handlePrevious}>Previous</button>
          <button className='next' onClick={this.next}>Next</button>
          <button className='quit' onClick={this.handleQuit}>Quit</button>
        </div>
      </div>
    )
  }
}

export default QuizComponents