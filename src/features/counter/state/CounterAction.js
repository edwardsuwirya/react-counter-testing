const COUNTER_INCREMENTED = "counter/incremented"
const COUNTER_DECREMENTED = "counter/decremented"
const SET_LOADING = "loading"

const counterIncrementAction = (counter) => {
    return {
        type: COUNTER_INCREMENTED,
        counter: counter
    }
}

const counterDecrementAction = (counter) => {
    return {
        type: COUNTER_DECREMENTED,
        counter: counter
    }
}

const setLoading = (isLoad) => {
    return {
        type: SET_LOADING,
        isLoad: isLoad
    }
}

export {COUNTER_INCREMENTED, COUNTER_DECREMENTED, SET_LOADING, counterIncrementAction, counterDecrementAction, setLoading}
