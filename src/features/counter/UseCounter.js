import {useState} from "react";

const UseCounter = () => {
    const [error, setError] = useState('');


    return {
         error, setError
    }
}

export default UseCounter;
