import React, { Component } from 'react';
import Person from './Person/Person.js'
import classes from './App.css';
//import Radium, {StyleRoot} from 'radium'

class App extends Component {

  state = {
    persons: [
      {id: 1, name: 'Kaio', age: 32},
      {id: 2, name: 'Mari', age: 30},
      {id: 3, name: 'Didi', age: 53}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked')
    this.setState({
      persons: [
        {name: newName, age: 32},
        {name: 'Mari', age: 30}
      ],
      otherState: 'some other value',
      showPersons: false
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=> {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    
    persons[personIndex] = person;

    this.setState({persons: persons})

  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) => {    
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id} 
                changed={(event) => this.nameChangedHandler(event, person.id)}>My hobbies: race</Person>
            )
          })}
        </div> 

      );
      style.backgroundColor = 'red';
      /*style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }*/
    }

    const assignedClasses = [];

    const personsSize = this.state.persons.length;

    if(personsSize <= 2){
      assignedClasses.push( classes.red );
    }

    if(personsSize <= 1){
      assignedClasses.push( classes.bold )
    }

    return (
      //<StyleRoot>
        <div className={classes.App}>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button style={style} onClick={ this.tooglePersonsHandler }>Toggle Persons</button>
          {persons}
        </div>
      //</StyleRoot>
      
    );
  }
}
//<button onClick={this.switchNameHandler.bind(this, 'Kaio Cesar Koerich')}>Switch Names</button>
export default App;
//export default Radium(App)
