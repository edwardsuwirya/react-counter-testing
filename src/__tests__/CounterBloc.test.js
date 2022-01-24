import CounterBloc from "../features/counter/CounterBloc";

describe('Counter Bloc', () => {
    let counterRepositoryMock;
    let useCounterMock;

    beforeEach(() => {
        counterRepositoryMock = jest.fn();
        useCounterMock = jest.fn();
    });

    test('Increment Handler', async () => {
        let incrementServiceReturnMock = jest.fn().mockResolvedValue(1)
        counterRepositoryMock.mockReturnValue({
                callDecrementService: jest.fn(),
                callIncrementService: incrementServiceReturnMock
            }
        );
        let setCountMock = jest.fn()
        useCounterMock.mockReturnValue({
            count: 1,
            setCount: setCountMock,
            error: '',
            setError: jest.fn()
        })
        let bloc = CounterBloc(0, useCounterMock, counterRepositoryMock);
        await bloc.handleIncrement();
        expect(setCountMock).toHaveBeenCalledWith(1)
    });

    test('Decrement Handler', async () => {
        let decrementServiceReturnMock = jest.fn().mockResolvedValue(1)
        counterRepositoryMock.mockReturnValue({
                callDecrementService: decrementServiceReturnMock,
                callIncrementService: jest.fn()
            }
        );
        let setCountMock = jest.fn()
        useCounterMock.mockReturnValue({
            count: 1,
            setCount: setCountMock,
            error: '',
            setError: jest.fn()
        })
        let bloc = CounterBloc(0, useCounterMock, counterRepositoryMock);
        await bloc.handleDecrement();
        expect(setCountMock).toHaveBeenCalledWith(1)
    });

    test('Increment Handler Error', async () => {
        let incrementServiceReturnMock = jest.fn().mockResolvedValue(4)
        counterRepositoryMock.mockReturnValue({
                callDecrementService: jest.fn(),
                callIncrementService: incrementServiceReturnMock
            }
        );
        let setErrorMock = jest.fn()
        useCounterMock.mockReturnValue({
            count: 0,
            setCount: jest.fn(),
            error: '',
            setError: setErrorMock
        })
        let bloc = CounterBloc(0, useCounterMock, counterRepositoryMock);
        await bloc.handleIncrement();
        expect(setErrorMock).toHaveBeenCalledWith('Tidak boleh lebih dari 3')
    });

    test('Decrement Handler Error', async () => {
        let decrementServiceReturnMock = jest.fn().mockResolvedValue(-1)
        counterRepositoryMock.mockReturnValue({
                callDecrementService: decrementServiceReturnMock,
                callIncrementService: jest.fn()
            }
        );
        let setErrorMock = jest.fn()
        useCounterMock.mockReturnValue({
            count: 0,
            setCount: jest.fn(),
            error: '',
            setError: setErrorMock
        })
        let bloc = CounterBloc(0, useCounterMock, counterRepositoryMock);
        await bloc.handleDecrement();
        expect(setErrorMock).toHaveBeenCalledWith('Tidak bole negatif')
    });
});
