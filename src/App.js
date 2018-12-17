import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//NEW IMPORTS
// To make this component work we need to 'connect' it with our top level redux store
import store from './store';
import { updateName, addPerson } from './reducer';

class App extends Component {
  componentDidMount() {
    let newState;
    const unsubscribe = store.subscribe(appState => {
      newState = {
        name: appState.name,
        people: appState.people,
      };
      this.setState(newState);
    });
    this.setState({
      unsubscribe,
    });
  }
  componentWillUnmount() {
    if (this.state.unsubscribe) {
      this.state.unsubscribe();
    }
  }
  updateName(newName) {
    const action = updateName(newName);
    store.dispatch(action);
  }
  addPerson(age, name) {
    const action = addPerson(age, name);
    store.dispatch(action);
  }
  render() {
    let { name, people } = this.state; //We can type this.props a lot less if we do this.

    //We got people from props, which came from mapStateToProps, which came from Redux
    let peopleRender = people.map(person => (
      <div>
        <strong>{person.name}</strong> - <span>{person.age}</span>
      </div>
    ));

    return (
      <div className="App">
        <p>
          <h4>{name}</h4>
          <input type="text" ref="name" />
          <button onClick={() => this.updateName(this.refs.name.value)}>
            Update
          </button>
        </p>
        <p>
          <h4>New Person</h4>
          <div>
            <h5>Name</h5>
            <input ref="newName" />
            <h5>Age</h5>
            <input ref="newAge" />
            <button
              onClick={() =>
                this.addPerson(this.refs.newAge.value, this.refs.newName.value)
              }
            >
              add
            </button>
          </div>
        </p>
        <p>{peopleRender}</p>
      </div>
    );
  }
}

export default App;
//This is often done in a single line of code like this:
//connect(mapStateToProps, outputActions)(App)

//Note: Usually App is not connected.  This is done in each route (when needed), and sometimes in a component
