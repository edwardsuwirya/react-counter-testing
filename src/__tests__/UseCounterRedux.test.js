import UseCounter from "../features/counter/UseCounter";
import * as reactRedux from 'react-redux'
import UseCounterRedux from "../features/counter/state/UseCounterRedux";

//npm install --save-dev @testing-library/react-hooks

describe('UseCounterRedux', () => {
    jest.spyOn(reactRedux, 'useSelector')
    let dispatchMock = jest.fn()
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    test('Dispatch Increment', () => {
        useDispatchMock.mockReturnValue(dispatchMock)
        let counterRedux = UseCounterRedux();
        counterRedux.dispatchIncrement(1);
        expect(dispatchMock.mock.calls.length).toBe(1);
    })
    test('Dispatch Decrement', () => {
        useDispatchMock.mockReturnValue(dispatchMock)
        let counterRedux = UseCounterRedux();
        counterRedux.dispatchDecrement(1);
        expect(dispatchMock.mock.calls.length).toBe(1);
    })
})
