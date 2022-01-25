import * as reactRedux from 'react-redux'
import UseCounterReduxDispatch from "../features/counter/state/UseCounterReduxDispatch";

//npm install --save-dev @testing-library/react-hooks

describe('UseCounterReduxDispatch', () => {
    let dispatchMock = jest.fn();
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    let counterActionMock = jest.fn();
    let counterDecrementActionMock = jest.fn();
    let counterIncrementActionMock = jest.fn();
    let setLoadingMock = jest.fn();

    test('Dispatch Increment', () => {
        useDispatchMock.mockReturnValue(dispatchMock);
        counterActionMock.mockReturnValue({
            counterDecrementAction: jest.fn(),
            counterIncrementAction: counterIncrementActionMock,
            setLoading: jest.fn()
        });
        let counterRedux = UseCounterReduxDispatch(counterActionMock);
        counterRedux.dispatchIncrement(1);
        expect(dispatchMock).toHaveBeenCalledWith(counterIncrementActionMock(1));

    })
    test('Dispatch Decrement', () => {
        useDispatchMock.mockReturnValue(dispatchMock);
        counterActionMock.mockReturnValue({
            counterDecrementAction: counterDecrementActionMock,
            counterIncrementAction: jest.fn(),
            setLoading: jest.fn()
        });
        let counterRedux = UseCounterReduxDispatch(counterActionMock);
        counterRedux.dispatchDecrement(1);
        expect(dispatchMock).toHaveBeenCalledWith(counterDecrementActionMock(1));
    })
    test('Dispatch Loading true', () => {
        useDispatchMock.mockReturnValue(dispatchMock)
        counterActionMock.mockReturnValue({
            counterDecrementAction: jest.fn(),
            counterIncrementAction: jest.fn(),
            setLoading: setLoadingMock
        });
        let counterRedux = UseCounterReduxDispatch(counterActionMock);
        counterRedux.dispatchLoading();
        expect(dispatchMock).toHaveBeenCalledWith(setLoadingMock(true));
    });
    test('Dispatch Loading false', () => {
        useDispatchMock.mockReturnValue(dispatchMock)
        counterActionMock.mockReturnValue({
            counterDecrementAction: jest.fn(),
            counterIncrementAction: jest.fn(),
            setLoading: setLoadingMock
        });
        let counterRedux = UseCounterReduxDispatch(counterActionMock);
        counterRedux.dispatchLoading(false);
        expect(dispatchMock).toHaveBeenCalledWith(setLoadingMock(false));
    })
})
