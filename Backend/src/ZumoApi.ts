// Import packages
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import debug, { Debugger } from 'debug';

// Import errors
import { ZumoApiError } from './errors';

// Create debug logger
const logger: Debugger = debug('backend:zumoAPI');

const baseURL: string = ('http://' + process.env!.RASPBERRY_PI_PICO) as string;

const instance: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 500 as number,
}) as AxiosInstance;

export const request: Function = async <T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T> | void> => {
  try {
    logger('Requesting data from Raspberry Pi Pico...');
    const response: AxiosResponse<any, any> = await instance(config);
    return response?.data;
  } catch (error: any) {
    logger(new ZumoApiError());
  }
};

export const post: Function = async <T>(
  params: string,
  data?: object
): Promise<void> => {
  try {
    logger('Posting data to Raspberry Pi Pico...');
    const url: string = `${baseURL}${params}`;
    await instance.post(url, data);
  } catch (error: any) {
    logger(new ZumoApiError());
  }
};
