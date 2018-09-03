import React from 'react';
import classes from './Person.css';
//import Radium from 'radium'

const person = (props) => {

    const rnd = Math.random();

    if(rnd > 0.70){
        throw new Error ('Something went wrong'); 
    }   

    return (
        <div className={classes.Person} /*style={style}*/>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

//export default person;
export default person