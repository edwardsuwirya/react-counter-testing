import {useDispatch, useSelector} from "react-redux";
import {counterDecrementAction, counterIncrementAction, setLoading} from "./CounterAction";

const UseCounterRedux = () => {
    const dispatch = useDispatch();
    const countSelector = state => state.nilai;
    const count = useSelector(countSelector);
    const isLoadSelector = state => state.isLoad;
    const isLoad = useSelector(isLoadSelector)
    console.log("isLoad", isLoad);

    const dispatchIncrement = (res) => {
        dispatch(counterIncrementAction(res))
    }
    const dispatchDecrement = (res) => {
        dispatch(counterDecrementAction(res))
    }

    const dispatchLoading = (res) => {
        console.log("loading", res);
        dispatch(setLoading(res))
    }

    return {
        dispatchIncrement, dispatchDecrement, dispatchLoading, count, isLoad
    }
}

export default UseCounterRedux;
