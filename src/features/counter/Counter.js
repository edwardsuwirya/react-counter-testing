import CounterOutput from "./view/CounterOutput";
import CounterButton from "./view/CounterButton";
import {useSelector} from "react-redux";

const Counter = ({bloc}) => {
    const isLoadSelector = state => state.isLoad;
    const isLoad = useSelector(isLoadSelector)
    let {
        error,
        handleDecrement,
        handleIncrement,
    } = bloc();

    return (
        <div>
            <CounterOutput/>
            <CounterButton title={"Tambah"} action={handleIncrement}/>
            <CounterButton title={"Kurang"} action={handleDecrement}/>
            <br/>
            <span>{error}</span>
            <br></br>
            {isLoad ? <span>Loading...</span> : <></>}
        </div>
    )
}

export default Counter;
