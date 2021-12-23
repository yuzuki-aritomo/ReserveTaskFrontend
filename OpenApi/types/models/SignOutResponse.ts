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
/**
 * 
 * @export
 * @interface SignOutResponse
 */
export interface SignOutResponse {
    /**
     * 
     * @type {boolean}
     * @memberof SignOutResponse
     */
    success?: boolean;
}

export function SignOutResponseFromJSON(json: any): SignOutResponse {
    return SignOutResponseFromJSONTyped(json, false);
}

export function SignOutResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignOutResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function SignOutResponseToJSON(value?: SignOutResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
    };
}
