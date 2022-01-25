import {useSelector} from "react-redux";

const CounterOutput = () => {
    const countSelector = state => state.nilai;
    const countResult = useSelector(countSelector);
    return (
        <div>
            Counter = <span id="value">{countResult}</span><br/>
        </div>
    )
}

export default CounterOutput;
