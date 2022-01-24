import CounterOutput from "./view/CounterOutput";
import CounterButton from "./view/CounterButton";

const Counter = ({bloc}) => {
    let {
        count,
        error,
        handleDecrement,
        handleIncrement
    } = bloc();


    return (
        <div>
            <CounterOutput countResult={count}/>
            <CounterButton title={"Tambah"} action={handleIncrement}/>
            <CounterButton title={"Kurang"} action={handleDecrement}/>
            <br/>
            <span>{error}</span>
        </div>
    )
}

export default Counter;
