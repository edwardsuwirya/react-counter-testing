import {COUNTER_INCREMENTED,COUNTER_DECREMENTED,SET_LOADING} from "./CounterAction";

const initialState = {
    nilai: 0,
    isLoad: false
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENTED:
            return {...state, ...action.counter};
        case COUNTER_DECREMENTED:
            return {...state, ...action.counter};
        case SET_LOADING:
            return {...state, isLoad: action.counter.isLoad}
        default:
            return state;
    }
}

export default counterReducer;
