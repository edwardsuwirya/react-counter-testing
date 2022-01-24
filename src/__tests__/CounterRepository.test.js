import axios from 'axios';
import CounterRepository from "../features/counter/CounterRepository";

describe('Counter Repository', () => {
    jest.mock("axios");
    it('Should return increment response success', async () => {
        axios.get = jest.fn()
        axios.get.mockResolvedValue({data: {result: 1}});
        const result = await CounterRepository().callIncrementService(1)
        expect(axios.get).toHaveBeenCalledWith(`http://localhost:3000/counter/increment?num=1`);
        expect(result).toBe(1);
    });
    it('Should return decrement response success', async () => {
        axios.get = jest.fn()
        axios.get.mockResolvedValue({data: {result: 2}});
        const result = await CounterRepository().callDecrementService(1)
        expect(axios.get).toHaveBeenCalledWith(`http://localhost:3000/counter/decrement?num=1`);
        expect(result).toBe(2);
    });
})
