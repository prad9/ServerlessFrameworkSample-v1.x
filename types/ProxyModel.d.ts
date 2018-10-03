import { HTTPStatusCodes } from 'accresponsehelper/http-status-enum';

export interface PathParameters {
    tenantId?: string;
    clientId?: string;
    formType?: string;
    periodEndDate?: string;
    agentId?: string;
}

export interface QueryStringParameters {
    formType: string;
    taxYear?: string;
    periodEndDate: string;
}

export interface Identity {
    cognitoIdentityPoolId?: any;
    accountId: string;
    cognitoIdentityId?: any;
    caller: string;
    apiKey: string;
    sourceIp: string;
    accessKey: string;
    cognitoAuthenticationType?: any;
    cognitoAuthenticationProvider?: any;
    userArn: string;
    userAgent: string;
    user: string;
}

export interface RequestContext {
    accountId: string;
    resourceId: string;
    stage: string;
    requestId: string;
    identity: Identity;
    resourcePath: string;
    httpMethod: string;
    apiId: string;
}

export interface Event {
    resource: string;
    path: string;
    httpMethod: string;
    headers?: any;
    queryStringParameters?: QueryStringParameters;
    pathParameters: PathParameters;
    stageVariables?: any;
    requestContext: RequestContext;
    body: string;
    isBase64Encoded: boolean;
}

export interface Response {
    statusCode: HTTPStatusCodes;
    body: string;
}

interface Callback { (error?: string, result?: any): void }
