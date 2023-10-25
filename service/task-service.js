import axios from "axios";

export class TaskService {
    #apiKey = process.env.API_KEY;
    #baseUrl = process.env.BASE_URL;
    #taskName = null;
    #taskToken = null;
    #task = null;

    constructor(taskName) {
        this.#taskName = taskName;
    }

    get taskName() {
        return this.#taskName;
    }

    get task() {
        return this.#task;
    }

    #clear() {
        this.#task = null;
        this.#taskToken = null;
    }

    async getTaskToken(taskName = this.taskName) {
        const response = await axios.post(`${this.#baseUrl}/token/${taskName}`, {
            "apikey": this.#apiKey
        });
        if (response.data.code === 0) {
            this.#taskToken = response.data.token;
        }
        return response.data.token;
    }

    async getTask(taskToken = this.#taskToken) {
        const response = await axios.get(`${this.#baseUrl}/task/${taskToken}`);
        if (response.data.code === 0) {
            this.#task = response.data;
        }
        return response.data;
    }

    async answerTask(answer, taskToken = this.#taskToken) {
        const response = await axios.post(`${this.#baseUrl}/answer/${taskToken}`, {
            "answer": answer
        });
        if (response.data.code === 0) {
            this.#clear();
        }
        return response.data;
    }
}
