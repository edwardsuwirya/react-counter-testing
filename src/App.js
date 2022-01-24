import './App.css';
import Counter from "./features/counter/Counter";
import CounterBloc from "./features/counter/CounterBloc";
import UseCounter from "./features/counter/UseCounter";
import CounterRepository from "./features/counter/CounterRepository";

function App() {
    return (
        <div>
            <Counter bloc={() => CounterBloc(0, UseCounter, CounterRepository)}/>
        </div>
    );
}

export default App;
