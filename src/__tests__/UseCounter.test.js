import {act, renderHook} from "@testing-library/react-hooks";
import UseCounter from "../features/counter/UseCounter";

//npm install --save-dev @testing-library/react-hooks

describe('UseCounter', () => {
    test('set error', () => {
        const {result} = renderHook(() => UseCounter(0));
        act(() => {
            result.current.setError("Error")
        })

        expect(result.current.error).toBe("Error");
    })
})
