import './App.css';
import Counter from "./features/counter/Counter";
import CounterBloc from "./features/counter/CounterBloc";
import UseCounter from "./features/counter/UseCounter";
import CounterRepository from "./features/counter/CounterRepository";
import UseCounterReduxDispatch from "./features/counter/state/UseCounterReduxDispatch";
import CounterAction from "./features/counter/state/CounterAction";

const App = () => {
    return (
        <Counter
            bloc={() => CounterBloc(0, UseCounter, () => UseCounterReduxDispatch(CounterAction), CounterRepository)}/>
    );
}

export default App;
