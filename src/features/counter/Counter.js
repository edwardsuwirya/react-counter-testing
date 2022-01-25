import CounterOutput from "./view/CounterOutput";
import CounterButton from "./view/CounterButton";

const Counter = ({bloc}) => {
    let {
        count,
        error,
        handleDecrement,
        handleIncrement,
        isLoad
    } = bloc();

console.log(isLoad);
    return (
        <div>
            <CounterOutput countResult={count}/>
            <CounterButton title={"Tambah"} action={handleIncrement}/>
            <CounterButton title={"Kurang"} action={handleDecrement}/>
            <br/>
            <span>{error}</span>
            <br></br>
            {isLoad ? <span>Loading...</span>:<></>}
        </div>
    )
}

export default Counter;
