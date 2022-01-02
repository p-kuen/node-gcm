import Message from "./message";
export interface SenderOptions {
}
export interface SendOptions {
}
declare type SendCallback = (err: unknown, response?: Record<string, unknown>) => void;
export default class Sender {
    key: string;
    options: SenderOptions;
    constructor(key: string, options?: SenderOptions);
    send(message: Message, recipient: any, callback: SendCallback): any;
    send(message: Message, recipient: any, options?: SendOptions, callback?: SendCallback): any;
    sendNoRetry: (message: Message, recipient: string | string[], callback?: (err: unknown, response?: Record<string, unknown>, attemptedRegTokens?: string[]) => void) => void;
}
export {};
