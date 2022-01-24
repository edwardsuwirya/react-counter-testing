const COUNTER_INCREMENTED = "counter/incremented"
const COUNTER_DECREMENTED = "counter/decremented"

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

export {COUNTER_INCREMENTED, COUNTER_DECREMENTED, counterIncrementAction, counterDecrementAction}
