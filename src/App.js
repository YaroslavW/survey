import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      id:'',
      name:'',
      answers:{
        q1:'',
        q2:'',
        q3:'',
        q4:''
      },
      submitted: false
    }
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
  }
  handleNameSubmit(event){
    var name =this.refs.name.value; 
    this.setState({ name: name},
      ()=>console.log(this.state))
    // console.log(this.state)
    event.preventDefault()
  }
  handleQuestionSubmit(event){

  }
  handleQuestionChange(event){
    var answers = this.state.answers
    if(event.target.name === 'q1'){
      answers.q1 = event.target.value
    } else if(event.target.name === 'q2'){
      answers.q2 = event.target.value
    } else if(event.target.name === 'q3'){
      answers.q3 = event.target.value
    } else if(event.target.name === 'q4'){
      answers.q4 = event.target.value
    } else if(event.target.name === 'q5'){
      answers.q5 = event.target.value
    }
    this.setState({ answers:answers},
      ()=>console.log(this.state))
  }
  render() {
    var user;
    var questions;
    if(this.state.name && this.state.submitted === false){
      user=<h2>Welcome {this.state.name}</h2>
      questions = <span>
        <h3>Survey Questions</h3>
        <form onSubmit={this.handleQuestionSubmit.bind(this)}>
          <div>
            <label>What is your favorit oprating system?</label><br />
            <input type="radio" name="q1" value="Windows" onChange={this.handleQuestionChange}/>Windows<br />
            <input type="radio" name="q1" value="OSX" onChange={this.handleQuestionChange} />OSX<br />
            <input type="radio" name="q1" value="Linux" onChange={this.handleQuestionChange} />Linux<br />
            <input type="radio" name="q1" value="Solaris" onChange={this.handleQuestionChange} />Solaris<br />
            <input type="radio" name="q1" value="Other" onChange={this.handleQuestionChange} />Other<br />
          </div>
          <div>
            <label>What is your favorit brand of TV?</label><br />
            <input type="radio" name="q2" value="Sony" onChange={this.handleQuestionChange}/>Sony<br />
            <input type="radio" name="q2" value="Samsung" onChange={this.handleQuestionChange} />Samsung<br />
            <input type="radio" name="q2" value="Panasonic" onChange={this.handleQuestionChange} />Panasonic<br />
            <input type="radio" name="q2" value="Vizzio" onChange={this.handleQuestionChange} />Vizzio<br />
            <input type="radio" name="q2" value="Other" onChange={this.handleQuestionChange} />Other<br />
          </div>
          <div>
            <label>What is your favorite smartphone brand?</label><br />
            <input type="radio" name="q3" value="Nokia" onChange={this.handleQuestionChange}/>Nokia<br />
            <input type="radio" name="q3" value="Samsung" onChange={this.handleQuestionChange} />Samsung<br />
            <input type="radio" name="q3" value="Fly" onChange={this.handleQuestionChange} />Fly<br />
            <input type="radio" name="q3" value="iPhone" onChange={this.handleQuestionChange} />iPhone<br />
            <input type="radio" name="q3" value="Other" onChange={this.handleQuestionChange} />Other<br />
          </div>
          <div>
            <label>What is your favorit oprating system?</label><br />
            <input type="radio" name="q4" value="Windows" onChange={this.handleQuestionChange}/>Windows<br />
            <input type="radio" name="q4" value="OSX" onChange={this.handleQuestionChange} />OSX<br />
            <input type="radio" name="q4" value="Linux" onChange={this.handleQuestionChange} />Linux<br />
            <input type="radio" name="q4" value="Solaris" onChange={this.handleQuestionChange} />Solaris<br />
            <input type="radio" name="q4" value="Other" onChange={this.handleQuestionChange} />Other<br />
          </div>
          <div>
            <label>What is your favorit oprating system?</label><br />
            <input type="radio" name="q5" value="Windows" onChange={this.handleQuestionChange}/>Windows<br />
            <input type="radio" name="q5" value="OSX" onChange={this.handleQuestionChange} />OSX<br />
            <input type="radio" name="q5" value="Linux" onChange={this.handleQuestionChange} />Linux<br />
            <input type="radio" name="q5" value="Solaris" onChange={this.handleQuestionChange} />Solaris<br />
            <input type="radio" name="q5" value="Other" onChange={this.handleQuestionChange} />Other<br />
          </div>                                        
        </form>
      </span>
    } else if(!this.state.name && this.state.submitted === false){
      user= <span>
        <h2>Please enter your name to begin the survey.</h2>
        <form onSubmit={this.handleNameSubmit.bind(this)}>
          <input type="text" placeholder="Enter name..." ref="name"/>
        </form>
      </span>
      questions = ''
    } else if(this.state.submitted === true){

    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Simple Survey</h1>

        </header>
        <div className="text-center">
          {user}
        </div>
        <div className="container">
          {questions}
        </div>
      </div>
    );
  }
}

export default App;
