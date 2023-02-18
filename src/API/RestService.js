import axios from "axios";

export default class PostService {
    static async getTopics() {
        const response = await axios.get('http://localhost:8080/secure_sdl')
        console.log(response);
        return response;
    }
}