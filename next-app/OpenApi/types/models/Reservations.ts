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
    Reservation,
    ReservationFromJSON,
    ReservationFromJSONTyped,
    ReservationToJSON,
} from './';

/**
 * 
 * @export
 * @interface Reservations
 */
export interface Reservations {
    /**
     * 
     * @type {Array<Reservation>}
     * @memberof Reservations
     */
    data?: Array<Reservation>;
}

export function ReservationsFromJSON(json: any): Reservations {
    return ReservationsFromJSONTyped(json, false);
}

export function ReservationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Reservations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ReservationFromJSON)),
    };
}

export function ReservationsToJSON(value?: Reservations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ReservationToJSON)),
    };
}

