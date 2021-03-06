import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {

  state = {
    word: '',
    length: 0,
  }

checkLengthHandler = (event) => {
  let word = event.target.value;
 this.setState({length: word.length, word: word});
}

deleteCharacterHandler = (index) => {
  var arr = this.state.word.split('');
  arr.splice(index, 1);
  arr = arr.join('');
  this.setState({word: arr, length: arr.length});
}

  render() {

    let list = null;

    if(this.state.length > 0){
      list = (
        <div>
        {this.state.word.split('').map((letter, index) => {
          return (
            <CharComponent 
            letter={letter} 
            click={() => this.deleteCharacterHandler(index)}
            key={index}/>
          )
        })}
        </div>
      )
    }
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>


        <input type='text' value={this.state.word} onChange={(event) => this.checkLengthHandler(event)} />
        <p>{this.state.length}</p>
        <ValidationComponent length={this.state.length}/>
        {list}
      </div>
    );
  }
}

export default App;
