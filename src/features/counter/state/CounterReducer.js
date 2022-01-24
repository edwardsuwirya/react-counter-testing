import {COUNTER_DECREMENTED, COUNTER_INCREMENTED} from "./CounterAction";

const initialState = {
    nilai: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENTED:
            return {...state, nilai: action.counter};
        case COUNTER_DECREMENTED:
            return {...state, nilai: action.counter};
        default:
            return state;
    }
}

export default counterReducer;
