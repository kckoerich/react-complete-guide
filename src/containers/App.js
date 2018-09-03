import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
//import Radium, {StyleRoot} from 'radium';

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
    let persons = null;

    if(this.state.showPersons){
      persons = 
        <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler}/>;
      
    }

    return (
      //<StyleRoot>
        <div className={classes.App}>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.tooglePersonsHandler}/>
            {persons}        
        </div>
      //</StyleRoot>
      
    );
  }
}
//<button onClick={this.switchNameHandler.bind(this, 'Kaio Cesar Koerich')}>Switch Names</button>
export default App;
//export default Radium(App)
