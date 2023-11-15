import axios from "axios";
import { ModerationResponse } from '../types/openAI.js';

const axiosInstance = axios.create(
  {
    baseURL: process.env.OPEN_AI_BASE_URL,
    headers: {
      "Authorization": `Bearer ${process.env.OPEN_AI_KEY}`,
      "Content-Type": "application/json"
    },
  },
);

export class OpenAiService {
  public async moderate(input: string) {
    const response = await axiosInstance.post<ModerationResponse>(
      "/moderations",
      { input },
    );
    return response.data;
  }
}
