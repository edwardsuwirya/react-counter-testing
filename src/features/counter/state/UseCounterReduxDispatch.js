import {useDispatch} from "react-redux";

const UseCounterReduxDispatch = (action) => {
    let {counterDecrementAction, counterIncrementAction, setLoading} = action();
    const dispatch = useDispatch();

    const dispatchIncrement = (res) => {
        dispatch(counterIncrementAction(res))
    }
    const dispatchDecrement = (res) => {
        dispatch(counterDecrementAction(res))
    }

    const dispatchLoading = (isLoad = true) => {
        dispatch(setLoading(isLoad))
    }

    return {
        dispatchIncrement, dispatchDecrement, dispatchLoading
    }
}

export default UseCounterReduxDispatch;
