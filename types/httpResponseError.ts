import { HTTPStatusCodes } from 'accresponsehelper/http-status-enum';

export class HttpResponseError extends Error {
    statusCode: HTTPStatusCodes;
    constructor(statusCode: HTTPStatusCodes, errorMessage: string) {
        super(errorMessage);
        this.statusCode = statusCode;
    }
}