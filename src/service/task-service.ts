import axios from "axios";
import { Answer, ResponseBase } from '../types/service.js';

export class TaskService {
  #apiKey: string = process.env.API_KEY;
  #baseUrl: string = process.env.BASE_URL;
  #taskName: string | null = null;
  #taskToken: string | null = null;
  #task: ResponseBase | null = null;

  constructor(taskName: string) {
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

  async getTaskToken(taskName = this.taskName): Promise<string> {
    const response = await axios.post<{ token: string } & ResponseBase>(
      `${this.#baseUrl}/token/${taskName}`,
      { "apikey": this.#apiKey },
    );
    if (response.data.code === 0) {
      this.#taskToken = response.data.token;
    }
    return response.data.token;
  }

  async getTask(taskToken = this.#taskToken) {
    const response = await axios.get<
      { cookie: string; } & ResponseBase
    >(`${this.#baseUrl}/task/${taskToken}`);

    if (response.data.code === 0) {
      this.#task = response.data;
    }
    return response.data;
  }

  async answerTask(answer: Answer, taskToken = this.#taskToken) {
    const response = await axios.post<ResponseBase>(`${this.#baseUrl}/answer/${taskToken}`, {
      "answer": answer
    });
    if (response.data.code === 0) {
      this.#clear();
    }
    return response.data;
  }
}
