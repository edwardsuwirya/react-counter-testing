import CounterBloc from "../features/counter/CounterBloc";

describe('Counter Bloc', () => {
    let counterRepositoryMock;
    let useCounterMock;
    let useCounterReduxDispatchMock;

    beforeEach(() => {
        counterRepositoryMock = jest.fn();
        useCounterMock = jest.fn();
        useCounterReduxDispatchMock = jest.fn();
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
            error: '',
            setError: jest.fn()
        })
        useCounterReduxDispatchMock.mockReturnValue({
            dispatchIncrement: setCountMock,
            dispatchDecrement: jest.fn(),
            dispatchLoading: jest.fn(),
        })
        let bloc = CounterBloc(0, useCounterMock, useCounterReduxDispatchMock, counterRepositoryMock);
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
            error: '',
            setError: jest.fn()
        });
        useCounterReduxDispatchMock.mockReturnValue({
            dispatchIncrement: jest.fn(),
            dispatchDecrement: setCountMock,
            dispatchLoading: jest.fn(),
        })
        let bloc = CounterBloc(0, useCounterMock, useCounterReduxDispatchMock, counterRepositoryMock);
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
            error: '',
            setError: setErrorMock
        })
        useCounterReduxDispatchMock.mockReturnValue({
            dispatchIncrement: jest.fn(),
            dispatchDecrement: jest.fn(),
            dispatchLoading: jest.fn(),
        })
        let bloc = CounterBloc(0, useCounterMock, useCounterReduxDispatchMock, counterRepositoryMock);
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
            setCount: jest.fn(),
            error: '',
            setError: setErrorMock
        })
        useCounterReduxDispatchMock.mockReturnValue({
            dispatchIncrement: jest.fn(),
            dispatchDecrement: jest.fn(),
            dispatchLoading: jest.fn(),
        })
        let bloc = CounterBloc(0, useCounterMock, useCounterReduxDispatchMock, counterRepositoryMock);
        await bloc.handleDecrement();
        expect(setErrorMock).toHaveBeenCalledWith('Tidak bole negatif')
    });
});
