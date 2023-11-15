import { ResponseBase } from '../types/service.js';
import { OpenAiService } from '../service/open-ai-service.js';
import { ModerationResponse } from '../types/openAI.js';

export const returnCookie = (value: { cookie: string } & ResponseBase) => value.cookie;

export const moderation = async (value: { input: string[] } & ResponseBase) => {
  const openAiService = new OpenAiService();
  const response = await Promise.all<Promise<ModerationResponse>>(
    value.input.map(openAiService.moderate.bind(openAiService))
  );
  return response
    .map((item) => item.results[0].flagged)
    .map(Number);
};

export const taskNameToHandlerMap = {
  helloapi: returnCookie,
  moderation,
};
