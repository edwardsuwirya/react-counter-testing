import {useSelector} from "react-redux";

const CounterButton = ({title, action}) => {
    const countSelector = state => state.nilai;
    const countResult = useSelector(countSelector);
    return (
        <button onClick={() => action(countResult)}>{title}</button>
    )
}

export default CounterButton;
