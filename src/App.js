import './App.css';
import Counter from "./features/counter/Counter";
import CounterBloc from "./features/counter/CounterBloc";

function App() {
  return (
    <div>
      <Counter initVal={0} bloc={CounterBloc}/>
    </div>
  );
}

export default App;
