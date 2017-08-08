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
let startingSum = 0;

let mashTogetherFunction = (currentRunningResult, nextNumber) => {
    //This is the sum of all previous numbers
    currentRunningResult;

    nextNumber;
    return currentRunningResult + nextNumber
}

//We can use the reduce function to mash together everything in an array
//Reduce takes in a function that receives the current running result plus the next item in the array
let sum = array.reduce(mashTogetherFunction, startingSum)
sum;

// TRY IT
// 1. Change the starting value to 5 then watch the sum variable on line 27
// 2. Change the mashTogether function subract items
// 3. Change the mashTogether function to multiply items.
// 4. Change the mash together function to make an array, push the number into the array with the string 'I am ' + nextNumber.
//       Then return the array


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
    name: "Joey",
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


// In redux we aren't going to call reduce, but we're goint to write the function that is given to reduce.
// It takes in our current state and then the next set of instructions on how to update.
// These actions are put on an object that we call an action.  It has a type and then anything else it needs.

let action = {
    type: "update_age",
    age: 10
}

function reducer(state, action) {
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


// We're going to send these actions from lots of places, so building that object could get redundant and is error prone to typos.
// To help with this we wrap it in a function called an action builder

function updateAge(age) {
    return {
        type: "update_age",
        age: age
    }
}

function reducer(state, action) {
    switch (action.type) {
        case "update_age":
            return Object.assign({}, state, { age: action.age })
    }
}
let ageAction = updateAge(12);
let state10 = reducer(allObjectsCombined, ageAction);
state10;

//Try it
// 1. Change Joey's age to 13
// 2. Create an action builder for update cereal and use it to update your state

function reducer(state, action) {
    switch (action.type) {
        case "update_age":
            return Object.assign({}, state, { age: action.age })
    }
}
let ageAction2 = updateAge(12);
let state10 = reducer(allObjectsCombined, ageAction2);
state10;


/*
    That's redux!  
    1. Create a reducer function handling all the changes to your object
    2. Create action builders to help you shape the right data and requests
*/

// Next we're going to move on to react-redux to use it in our react apps