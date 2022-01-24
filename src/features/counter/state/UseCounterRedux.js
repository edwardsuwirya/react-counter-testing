import {useDispatch, useSelector} from "react-redux";
import {counterDecrementAction, counterIncrementAction} from "./CounterAction";

const UseCounterRedux = () => {
    const dispatch = useDispatch();
    const countSelector = state => state.nilai;
    const count = useSelector(countSelector);

    const dispatchIncrement = (res) => {
        dispatch(counterIncrementAction(res))
    }
    const dispatchDecrement = (res) => {
        dispatch(counterDecrementAction(res))
    }

    return {
        dispatchIncrement, dispatchDecrement, count
    }
}

export default UseCounterRedux;
