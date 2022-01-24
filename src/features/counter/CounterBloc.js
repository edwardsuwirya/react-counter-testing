const CounterBloc = (initVal, useCounter, useCounterRedux, counterRepository) => {
    let {error, setError} = useCounter(initVal);
    let {dispatchIncrement, dispatchDecrement, count} = useCounterRedux();
    let {
        callDecrementService,
        callIncrementService
    } = counterRepository();

    const handleIncrement = async () => {
        let result = await callIncrementService(count);
        if (result >= 3) {
            setError('Tidak boleh lebih dari 3');
        } else {
            dispatchIncrement(result);
        }
    }
    const handleDecrement = async () => {
        let result = await callDecrementService(count);
        if (result < 0) {
            setError('Tidak bole negatif')
        } else {
            dispatchDecrement(result)
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
