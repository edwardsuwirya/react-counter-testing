import axios from "axios";

const CounterRepository = () => {
    const callIncrementService = async (num) => {
        let result = await axios.get(`http://localhost:3000/counter/increment?num=${num}`);
        let data = result.data;
        return data.result
    }
    const callDecrementService = async (num) => {
        let result = await axios.get(`http://localhost:3000/counter/increment?num=${num}`);
        let data = result.data
        return data.result
    }

    return {
        callDecrementService,
        callIncrementService
    }
}

export default CounterRepository;
