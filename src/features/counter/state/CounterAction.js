const COUNTER_INCREMENTED = "counter/incremented"
const COUNTER_DECREMENTED = "counter/decremented"
const SET_LOADING = "counter/loading"

const CounterAction = () => {
    const counterIncrementAction = (counter) => {
        return {
            type: COUNTER_INCREMENTED,
            counter: {nilai: counter, isLoad: false}
        }
    }

    const counterDecrementAction = (counter) => {
        return {
            type: COUNTER_DECREMENTED,
            counter: {nilai: counter, isLoad: false}
        }
    }

    const setLoading = (isLoad) => {
        return {
            type: SET_LOADING,
            counter: {isLoad: isLoad}
        }
    }
    return {
        counterIncrementAction,
        counterDecrementAction,
        setLoading
    }
}


export {CounterAction as default, COUNTER_INCREMENTED, COUNTER_DECREMENTED, SET_LOADING};
