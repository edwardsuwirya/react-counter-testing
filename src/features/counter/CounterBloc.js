const CounterBloc = (initVal, useCounter, counterRepository) => {
    let {count, setCount, error, setError} = useCounter(initVal);
    let {
        callDecrementService,
        callIncrementService
    } = counterRepository();

    const handleIncrement = async () => {
        let result = await callIncrementService(count);
        if (result >= 3) {
            setError('Tidak boleh lebih dari 3');
        } else {
            setCount(result);
        }
    }
    const handleDecrement = async () => {
        let result = await callDecrementService(count);
        if (result < 0) {
            setError('Tidak bole negatif')
        } else {
            setCount(result)
        }
    }
    return {
        count,
        error,
        handleDecrement,
        handleIncrement
    }
}

export default CounterBloc;
