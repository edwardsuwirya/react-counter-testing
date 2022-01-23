import {useState} from "react";

const Counter = ()=> {
    const [count, setCount] = useState(0);

    const handleIncrement = ()=>setCount(count+1)
    const handleDecrement = ()=>setCount(count-1)
    return (
        <div>
            Counter = <span id="value">{count}</span><br/>
            <button id="increment" onClick={handleIncrement}>Tambah</button>
            <button id="decrement" onClick={handleDecrement}>Kurang</button>
        </div>
    )
}

export default Counter;
