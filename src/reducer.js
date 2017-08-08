//This is a reducer file, in projects we're going to call it a duck (re-duck, get it?!)
//We put all action builders and the reducer function in here.
//We can make as many reducers as we want, in as many files as we want to split up our code in easier to understand chunks.

//CONSTANTS
const UPDATE_NAME = "UPDATE_NAME";
const ADD_PERSON = "ADD_PERSON"
const GET_PEOPLE = "GET_PEOPLE"

//ACTION BUILDERS
export function updateName(name) {
    return {
        type: UPDATE_NAME,
        name //es6 shortcut for assigning a variable to an object with the same property name as the variable name
    }
}

export function addPerson(age, name) {
    return {
        type: ADD_PERSON,
        age,
        name
    }
}

export function getPeople(){
    return {
        type: GET_PEOPLE,
        payload: axios.get('URL TO GET PEOPLE')
    }
}

let initialState = {
    people: [{
        name: "Sleepy",
        age: 7
    }]
}
//REDUCER
export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_NAME:
            return Object.assign({}, state, { name: action.name })
        case ADD_PERSON:
            let peopleCopy = state.people.slice();
            let { name, age } = action;
            peopleCopy.push({ name, age })
            return Object.assign({}, state, { people: peopleCopy })
        case GET_PEOPLE + "_FULFILLED":
            let data = action.payload //The response data is found here put it on state or do stuff
        case GET_PEOPLE + "_REJECTED":
            let data = action.payload
    }

    return state;
}