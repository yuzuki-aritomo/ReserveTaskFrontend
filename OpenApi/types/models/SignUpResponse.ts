/* tslint:disable */
/* eslint-disable */
/**
 * Rails Reservation Api
 * Reservatin Api Document
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    SignUpResponseData,
    SignUpResponseDataFromJSON,
    SignUpResponseDataFromJSONTyped,
    SignUpResponseDataToJSON,
} from './';

/**
 * 
 * @export
 * @interface SignUpResponse
 */
export interface SignUpResponse {
    /**
     * 
     * @type {string}
     * @memberof SignUpResponse
     */
    status?: string;
    /**
     * 
     * @type {SignUpResponseData}
     * @memberof SignUpResponse
     */
    data?: SignUpResponseData;
}

export function SignUpResponseFromJSON(json: any): SignUpResponse {
    return SignUpResponseFromJSONTyped(json, false);
}

export function SignUpResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignUpResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'data': !exists(json, 'data') ? undefined : SignUpResponseDataFromJSON(json['data']),
    };
}

export function SignUpResponseToJSON(value?: SignUpResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'data': SignUpResponseDataToJSON(value.data),
    };
}
