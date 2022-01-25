import axios from "axios";

const CounterRepository = () => {
    const callIncrementService = async (num) => {
        try {
            let result = await axios.get(`http://localhost:3000/counter/increment?num=${num}`);
            let data = result.data;
            return data.result;
        } catch (e) {
            return null;
        }

    }
    const callDecrementService = async (num) => {
        try {
            let result = await axios.get(`http://localhost:3000/counter/decrement?num=${num}`);
            let data = result.data;
            return data.result;
        } catch (e) {
            return null;
        }

    }

    return {
        callDecrementService,
        callIncrementService
    }
}

export default CounterRepository;
