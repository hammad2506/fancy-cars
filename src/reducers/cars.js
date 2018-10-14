const defaultCarsState = [];

// Just adding a boilerplate if need be to add cars
const carsReducer = (state = defaultCarsState, action) => {
    switch(action.type){
        case 'ADD_CAR':
            return [...state, action.car];
        default:
            return state;    
    }
}

export default carsReducer;