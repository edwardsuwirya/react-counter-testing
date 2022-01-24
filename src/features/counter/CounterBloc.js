import axios from "axios";
import {useState} from "react";

const CounterBloc = (initVal) => {
    const [count, setCount] = useState(initVal);
    const [error, setError] = useState('');

    const handleIncrement = async () => {
        let result = await axios.get(`http://localhost:3000/counter/increment?num=${count}`);
        let data = result.data

        if (data.result >= 3) {
            setError('Tidak boleh lebih dari 3');
        } else {
            setCount(data.result);
        }

    }
    const handleDecrement = async () => {
        let result = await axios.get(`http://localhost:3000/counter/decrement?num=${count}`);
        console.log(result);
        let data = result.data;
        if (data.result < 0) {
            setError('Tidak bole negatif')
        } else {
            setCount(data.result)
        }
    }
    return {
        count,
        error,
        handleDecrement,
        handleIncrement
    }
}

export default CounterBloc
