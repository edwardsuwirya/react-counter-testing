import {COUNTER_DECREMENTED, COUNTER_INCREMENTED, SET_LOADING} from "./CounterAction";

const initialState = {
    nilai: 0,
    isLoad : false
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENTED:
            return {...state, nilai: action.counter};
        case COUNTER_DECREMENTED:
            return {...state, nilai: action.counter};
        case SET_LOADING:
            return {...state, isLoad: action.isLoad}
        default:
            return state;
    }
}

export default counterReducer;
