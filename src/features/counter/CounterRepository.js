import axios from "axios";
import client from "../../shared/ApiClient";

const CounterRepository = () => {
    const callIncrementService = async (num) => {
        try {
            let result = await client.get(`/increment?num=${num}`);
            let data = result.data;
            return data.result;
        } catch (e) {
            return null;
        }

    }
    const callDecrementService = async (num) => {
        try {
            let result = await client.get(`/decrement?num=${num}`);
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
