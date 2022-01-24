import {useState} from "react";

const UseCounter = (initVal) => {
    const [count, setCount] = useState(initVal);
    const [error, setError] = useState('');

    return {
        count, setCount, error, setError
    }
}

export default UseCounter;
