import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//NEW IMPORTS 
// To make this component work we need to 'connect' it with our top level redux store
import { connect } from 'react-redux'
import { updateName, addPerson } from './reducer'

class App extends Component {
  render() {
    let { name, people } = this.props; //We can type this.props a lot less if we do this.

    //We got people from props, which came from mapStateToProps, which came from Redux
    let peopleRender = people.map((person) => (
      <div>
        <strong>{person.name}</strong> - <span>{person.age}</span>
      </div>
    ))

    return (
      <div className="App">
        <p>
          <h4>{name}</h4>
          <input type="text" ref="name"/>
          <button onClick={()=> this.props.updateName(this.refs.name.value)}>Update</button>    
        </p>
        <p>
          <h4>New Person</h4>
          <div>
            <h5>Name</h5>
            <input ref="newName"></input>
            <h5>Age</h5>
            <input ref="newAge"></input>
            <button onClick={()=> this.props.addPerson(this.refs.newAge.value, this.refs.newName.value)}>add</button>
          </div>
        </p>
        <p>
          {peopleRender}
        </p>
      </div>
    );
  }
}

//Input function to get data from state
function moveFromStoreToProps(state) {
  //state refers to the redux state
  if(!state) return {};

  let {people, name} = state;

  // return { //This object gets mashed/merged into this.props
  //   people,
  //   name
  // }
  return { //This object gets mashed/merged into this.props
    people: people,
    name: name
  }
}

//Output object with all of the actions that this component will update our store about

// We need to import any actions we want to send through the process
// We importeded these up above with this line of code :
// import {updateAge, addPerson} from './reducer'
let outputActions = {
  updateName: updateName,
  addPerson: addPerson
}

let reduxInsAndOuts = connect(moveFromStoreToProps, outputActions)
export default reduxInsAndOuts(App);
//This is often done in a single line of code like this:
//connect(mapStateToProps, outputActions)(App)

//Note: Usually App is not connected.  This is done in each route (when needed), and sometimes in a component