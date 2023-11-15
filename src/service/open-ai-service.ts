import axios from "axios";
import { ModerationResponse } from '../types/openAI.js';

export class OpenAiService {
  #bearerToken: string = process.env.OPEN_AI_KEY;
  #baseUrl: string = process.env.OPEN_AI_BASE_URL;

  public async moderate(input: string) {
    const response = await axios.post<ModerationResponse>(
      `${this.#baseUrl}/moderations`,
      { input }, {
        headers: {
          "Authorization": `Bearer ${this.#bearerToken}`,
          "Content-Type": "application/json"
        }
      });
    return response.data;
  }
}
