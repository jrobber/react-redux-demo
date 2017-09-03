//Note these exercises are best done with quokka 

//What is state
let state = {
    state: "is an object",
    has: "properties",
    some: "properties might be for UI components",
    others: "might be for information or data",
    redux: "is a tool that lets us keep track of our current 'state'"
}

//How to state ingredient 1 - Reduce
let array = [1, 5, 2, 6, 4]

//REDUCE - is a vocab word that means to combine many into 1.
//Looking at the array above how could we combine it into a single value?

//The product would be 240
//The string would be "15264"
//What would the sum be ?

//We can do the same thing with objects.  It will keep all different properties and overwrite existing ones
let objects = [{
    name: "Joe",
    age: 7,
    color: 'blue'
},
{
    cereal: 'frosted cocoa flake puff crunch'
},
{
    age: 8,
},
{
    name: "Joseph",
}, {
    age: 9
}]

let allObjectsCombined = objects.reduce((currentMash, nextObject) => {
    currentMash;
    nextObject;
    return Object.assign(currentMash, nextObject) //Object.assign is doing the mashing, reduce is doing the looping
}, {})
allObjectsCombined;

//TRY IT
// 1. Make Joey's final name be Joseph
// 2. Add another object the array that updates age to be 9
// 3. Add another object the array that adds a new property 'petname'


// In redux we're going to write a function that handles all reduces
// It takes in our current state and then the next set of instructions on how to update.
// Then it returns an object, like above, that is the 'current mash' of all objects.

// The set of instructions we give to this reducer function is called an action.
// These actions are put on an object.  It has a type and then anything else it needs.

let action = {
    type: "update_age",
    age: 10
}

function reducer(state, action) {
    state;
    action;
    switch (action.type) {
        case "update_age":
            return Object.assign({}, state, { age: action.age })
    }
}
let state1 = reducer(allObjectsCombined, action)
state1;


//TRY IT
// 1. Create a new action for update cereal that changes the cereal.  Handle it in the reducer. Invoke and save to state2
// 1. Create a new action for update color that changes the color.  Handle it in the reducer. Invoke and save to state3


// We're going to send these actions from lots of places, 
// so building that object, over and over again, could get redundant and is error prone to typos.
// To help with this we wrap it in a function called an action builder


function updateAge(age) {
    return {
        type: "update_age",
        age: age
    }
}


function reducer2(state, action) {
    //SINGLE POINT OF TRUTH
    switch (action.type) {
        case "update_age":
            return Object.assign({}, state, { age: action.age })
        case "update_cereal":
            return Object.assign({}, state, { age: action.age })
        case "update_name":
            return Object.assign({}, state, { age: action.age })
    }
}
let ageAction = updateAge(12);
let state2 = reducer2(allObjectsCombined, ageAction);
state2;

//Try it
// 1. Change Joey's age to 13
// 2. Create an action builder for update cereal and use it to update your state


/*
    That's redux!  
    1. Create a reducer function handling all the changes to your object
    2. Create action builders to help you shape the right data and requests
*/

// Next we're going to move on to react-redux to use it in our react apps