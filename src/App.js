import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState , setPersonsState] = useState({
        person : [
          {name : "Max", age: 26},
          {name : "Mad", age: 25},
          {name : "Kristen", age: 21}
        ],
        otherState : "somevalue"
       });

    const switchNameHandler = (newName) => (
         setPersonsState( {
               person : [
             {name : newName, age: 26},
             {name : "MadMax", age: 25},
             {name : "Kristen", age: 26}
           ]
          })
       )       
      const nameChangeHandler = (event) => (
        setPersonsState( {
              person : [
            {name : "Manish", age: 26},
            {name : event.target.value, age: 25},
            {name : "Kristen", age: 26}
          ]
         })
      )  
      const style = {
        backgroundColor : 'white',
        font : 'inherit',
        border : '5px solid black',
        padding: '8px',
        cursor : 'pointer'
      }; 


    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <button 
        style={style}
        onClick={switchNameHandler.bind(this , "Max!")}>Switch Name</button>
        <Person name={personsState.person[0].name} 
                age={personsState.person[0].age}>Hobbies : Cricket</Person>
        <Person name={personsState.person[1].name} 
                age={personsState.person[1].age}
                changed = {nameChangeHandler}/>
        <Person name={personsState.person[2].name} 
                click= {switchNameHandler.bind(this, "Manish")}age={personsState.person[2].age}/>
      </div>
    );
  }

export default app;


// state = {
//   person : [
//     {name : "Max", age: 26},
//     {name : "Mad", age: 25},
//     {name : "Kristen", age: 21}
//   ],
//   otherState : "somevalue"
//  }

//  switchNameHandler = () => (

//    this.setState( {
//          person : [
//        {name : "Maxmillian", age: 26},
//        {name : "MadMax", age: 25},
//        {name : "Kristen", age: 26}
//      ]
//     })
//  )