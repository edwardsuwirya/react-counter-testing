import {useState} from "react";

const Counter = ({initVal})=> {
    const [count, setCount] = useState(initVal);
    const [error, setError] = useState('');

    const handleIncrement = ()=>{
        if(count >= 3){
            setError('Tidak boleh lebih dari 3')
        }else{
            setCount(count+1)
        }

    }
    const handleDecrement = ()=>{
        if(count <= 0){
            setError('Tidak bole negatif')
        }else{
            setCount(count-1)
        }
    }
    return (
        <div>
            Counter = <span id="value">{count}</span><br/>
            <button id="increment" onClick={handleIncrement}>Tambah</button>
            <button id="decrement" onClick={handleDecrement}>Kurang</button><br/>
            <span>{error}</span>
        </div>
    )
}

export default Counter;
