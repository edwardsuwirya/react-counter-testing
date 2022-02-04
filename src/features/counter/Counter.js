import CounterOutput from "./view/CounterOutput";
import CounterButton from "./view/CounterButton";
import {WithLoading} from "../../shared/WithLoading";

const Counter = ({bloc}) => {
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
        </div>
    )
}

const CounterWithLoading = WithLoading(Counter);
export default CounterWithLoading;
