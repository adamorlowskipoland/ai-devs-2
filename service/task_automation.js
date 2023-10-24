import "dotenv/config"
import axios from "axios";

export class TaskAutomation {
    #taskToken = process.env.TASK_TOKEN;
    #baseUrl = process.env.BASE_URL;
    constructor(taskName) {
        this.taskName = taskName;
    }

    async getTaskToken() {
        const response = await axios.post(`${this.#baseUrl}/token/${this.taskName}`, {
            "apikey": this.#taskToken
        });
        console.log('%c Line: , msg: : ', 'color: lightseagreen', response.data);
        return response.data;
    }
}
