import './App.css';
import CounterWithLoading from "./features/counter/Counter";
import CounterBloc from "./features/counter/CounterBloc";
import UseCounter from "./features/counter/UseCounter";
import CounterRepository from "./features/counter/CounterRepository";
import UseCounterReduxDispatch from "./features/counter/state/UseCounterReduxDispatch";
import CounterAction from "./features/counter/state/CounterAction";
import {useSelector} from "react-redux";

const App = () => {
    const isLoadSelector = state => state.isLoad;
    const isLoad = useSelector(isLoadSelector);
    return (
        <CounterWithLoading isLoad={isLoad}
                 bloc={() => CounterBloc(0, UseCounter, () => UseCounterReduxDispatch(CounterAction), CounterRepository)}/>
    );
}

export default App;
