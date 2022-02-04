const CounterBloc = (initVal, useCounter, useCounterReduxDispatch, counterRepository) => {
    let {error, setError} = useCounter(initVal);
    let {dispatchIncrement, dispatchDecrement, dispatchLoading} = useCounterReduxDispatch();
    let {
        callDecrementService,
        callIncrementService
    } = counterRepository();

    //Challenge, ubah code berikut dimana kalo state awal sudah 3, tidak perlu call API
    //state awal dibawah 3, baru boleh call API
    const handleIncrement = async (count) => {
        dispatchLoading();
        setError('');
        let result = await callIncrementService(count);
        if (result) {
            if (result >= 3) {
                setError('Tidak boleh lebih dari 3');
                dispatchLoading(false);
            } else {
                dispatchIncrement(result);
            }
        } else {
            setError("Server Error");
            dispatchLoading(false);
        }

    }
    //Challenge, ubah code berikut dimana kalo state awal sudah 0, tidak perlu call API
    //state awal diatas 0, baru boleh call API
    const handleDecrement = async (count) => {
        dispatchLoading();
        setError('');
        let result = await callDecrementService(count);
        console.log(result)
        if (result !== null) {
            if (result < 0) {
                setError('Tidak bole negatif');
                dispatchLoading(false);
            } else {
                dispatchDecrement(result)
            }
        } else {
            setError("Server Error");
            dispatchLoading(false);
        }

    }
    return {
        error,
        handleDecrement,
        handleIncrement,
    }
}

export default CounterBloc;
