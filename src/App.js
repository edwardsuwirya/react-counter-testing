import './App.css';
import Counter from "./features/counter/Counter";
import CounterBloc from "./features/counter/CounterBloc";
import UseCounter from "./features/counter/UseCounter";
import CounterRepository from "./features/counter/CounterRepository";
import UseCounterRedux from "./features/counter/state/UseCounterRedux";

const App = () => {
    return (
        <Counter bloc={() => CounterBloc(0, UseCounter, UseCounterRedux, CounterRepository)}/>
    );
}

export default App;
