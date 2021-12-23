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
 * @interface Reception
 */
export interface Reception {
    /**
     * 
     * @type {number}
     * @memberof Reception
     */
    receptionId: number;
    /**
     * 
     * @type {string}
     * @memberof Reception
     */
    userName?: string;
    /**
     * 
     * @type {Date}
     * @memberof Reception
     */
    start?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Reception
     */
    end?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof Reception
     */
    reserved?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Reception
     */
    canceled?: boolean;
}

export function ReceptionFromJSON(json: any): Reception {
    return ReceptionFromJSONTyped(json, false);
}

export function ReceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Reception {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'receptionId': json['reception_id'],
        'userName': !exists(json, 'user_name') ? undefined : json['user_name'],
        'start': !exists(json, 'start') ? undefined : (new Date(json['start'])),
        'end': !exists(json, 'end') ? undefined : (new Date(json['end'])),
        'reserved': !exists(json, 'reserved') ? undefined : json['reserved'],
        'canceled': !exists(json, 'canceled') ? undefined : json['canceled'],
    };
}

export function ReceptionToJSON(value?: Reception | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reception_id': value.receptionId,
        'user_name': value.userName,
        'start': value.start === undefined ? undefined : (value.start.toISOString()),
        'end': value.end === undefined ? undefined : (value.end.toISOString()),
        'reserved': value.reserved,
        'canceled': value.canceled,
    };
}
