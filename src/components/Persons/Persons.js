import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Person from '../Persons/Person/Person'

class Persons extends Component {

    constructor(props){
        super(props);
        console.log('[Persons.js] constructor', props);
      }
    
      componentWillMount(){
        console.log('[Persons.js] componentWillMount');
      }
      
      componentDidMount(){
        console.log('[Persons.js] componentDidMount');
      }

    render () {
        console.log('[Persons.js] render');
        return this.props.persons.map((person, index) => {
            return (<ErrorBoundary key={person.id}>
                    <Person
                    click={() => this.props.clicked(index)}
                    name={person.name} 
                    age={person.age} 
                    changed={(event) => this.props.changed(event, person.id)}>My hobbies: race</Person>
                </ErrorBoundary>
            )
        });
    }

}

export default Persons