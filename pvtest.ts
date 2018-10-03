import * as AWS from "aws-sdk";
import * as AWSLambda from "aws-lambda";
import { Event, Callback, Response } from "./types/ProxyModel";
import { ResponseHelper } from "accresponsehelper/responseHandling";
import { HttpResponseError } from "./types/httpResponseError";
import { HTTPStatusCodes } from "accresponsehelper/http-status-enum";

export async function handler(
  event: Event,
  context: AWSLambda.Context,
  callback: Callback
) {
  let responseHelper: ResponseHelper = new ResponseHelper(context);
  
  try {
    let response = responseHelper.createResponse(HTTPStatusCodes.OK, {});
    return callback(null, response);
  } catch (error) {
    let response: Response;
    if (error instanceof HttpResponseError)
      response = responseHelper.createResponse(error.statusCode, error.message);
    else if (error instanceof Error)
      response = responseHelper.createErrorResponse(
        HTTPStatusCodes.INTERNAL_SERVER_ERROR,
        error.message
      );
    else
      response = responseHelper.createErrorResponse(
        HTTPStatusCodes.INTERNAL_SERVER_ERROR,
        error
      );

    return callback(null, response);
  }
}
