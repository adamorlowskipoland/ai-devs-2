import { ResponseBase } from '../types/service.js';

export const returnCookie = (object: { cookie: string } & ResponseBase) => object.cookie;

export const taskNameToHandlerMap = {
  "helloapi": returnCookie,
};
