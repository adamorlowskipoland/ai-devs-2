export interface ResponseBase {
  code: number;
  msg: string;
}

export interface ApiKeyPayload {
  apiKey: string;
}

export type Answer = string | string[];
