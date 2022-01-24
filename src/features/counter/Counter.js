const Counter = ({bloc}) => {
    let {
        count,
        error,
        handleDecrement,
        handleIncrement
    } = bloc();


    return (
        <div>
            Counter = <span id="value">{count}</span><br/>
            <button id="increment" onClick={handleIncrement}>Tambah</button>
            <button id="decrement" onClick={handleDecrement}>Kurang</button>
            <br/>
            <span>{error}</span>
        </div>
    )
}

export default Counter;
