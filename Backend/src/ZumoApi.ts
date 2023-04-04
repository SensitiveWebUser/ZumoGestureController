// Import packages
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import debug, { Debugger } from 'debug';

// Import errors
import { ZumoApiError } from './errors';

// Create debug logger
const logger: Debugger = debug('backend:zumoAPI');

const instance: AxiosInstance = axios.create({
  baseURL: process.env!.RASPBERRY_PI_PICO as string,
  timeout: 500 as number,
}) as AxiosInstance;

export const request: Function = async <T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    logger('Requesting data from Raspberry Pi Pico...');
    const response: AxiosResponse<any, any> = await instance(config);
    return response?.data;
  } catch (error: any) {
    logger(error);
    throw new ZumoApiError();
  }
};

export const post: Function = async <T>(
  params?: string,
  data?: object
): Promise<void> => {
  try {
    logger('Posting data to Raspberry Pi Pico...');
    const post = await instance.post(params || '', data || {});
  } catch (error: any) {
    logger(error);
    throw new ZumoApiError();
  }
};
