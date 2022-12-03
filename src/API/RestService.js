import axios from "axios";

export default class PostService {
    static async getTopics() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response);
        return response;
    }
}