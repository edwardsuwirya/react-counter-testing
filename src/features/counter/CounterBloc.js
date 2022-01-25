const CounterBloc = (initVal, useCounter, useCounterRedux, counterRepository) => {
    let {error, setError} = useCounter(initVal);
    let {dispatchIncrement, dispatchDecrement, dispatchLoading, count, isLoad} = useCounterRedux();
    let {
        callDecrementService,
        callIncrementService
    } = counterRepository();

    const handleIncrement = async () => {
        dispatchLoading(true)
        let result = await callIncrementService(count);
        if (result >= 3) {
            setError('Tidak boleh lebih dari 3');
            dispatchLoading(false)
        } else {
            dispatchIncrement(result);
            dispatchLoading(false)
        }
    }
    const handleDecrement = async () => {
        dispatchLoading(true)
        let result = await callDecrementService(count);
        if (result < 0) {
            setError('Tidak bole negatif')
            dispatchLoading(false)
        } else {
            dispatchDecrement(result)
            dispatchLoading(false)
        }
    }
    return {
        count,
        error,
        handleDecrement,
        handleIncrement,
        isLoad
    }
}

export default CounterBloc;
