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


import * as runtime from '../runtime';
import {
    InlineObject,
    InlineObjectFromJSON,
    InlineObjectToJSON,
    Reception,
    ReceptionFromJSON,
    ReceptionToJSON,
    Receptions,
    ReceptionsFromJSON,
    ReceptionsToJSON,
} from '../models';

export interface ReceptionsGetRequest {
    start?: Date;
    end?: Date;
}

export interface ReceptionsPostRequest {
    inlineObject?: InlineObject;
}

export interface ReceptionsReceptionIdDeleteRequest {
    receptionId: number;
}

/**
 * 
 */
export class ReceptionApi extends runtime.BaseAPI {

    /**
     * fp予約登録一覧取得
     */
    async receptionsGetRaw(requestParameters: ReceptionsGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Receptions>> {
        const queryParameters: any = {};

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = (requestParameters.start as any).toISOString();
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = (requestParameters.end as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/receptions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReceptionsFromJSON(jsonValue));
    }

    /**
     * fp予約登録一覧取得
     */
    async receptionsGet(requestParameters: ReceptionsGetRequest, initOverrides?: RequestInit): Promise<Receptions> {
        const response = await this.receptionsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * fp予約可能日時登録
     */
    async receptionsPostRaw(requestParameters: ReceptionsPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Reception>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/receptions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObjectToJSON(requestParameters.inlineObject),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReceptionFromJSON(jsonValue));
    }

    /**
     * fp予約可能日時登録
     */
    async receptionsPost(requestParameters: ReceptionsPostRequest, initOverrides?: RequestInit): Promise<Reception> {
        const response = await this.receptionsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 予約削除
     */
    async receptionsReceptionIdDeleteRaw(requestParameters: ReceptionsReceptionIdDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Reception>> {
        if (requestParameters.receptionId === null || requestParameters.receptionId === undefined) {
            throw new runtime.RequiredError('receptionId','Required parameter requestParameters.receptionId was null or undefined when calling receptionsReceptionIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/receptions/{reception_id}`.replace(`{${"reception_id"}}`, encodeURIComponent(String(requestParameters.receptionId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReceptionFromJSON(jsonValue));
    }

    /**
     * 予約削除
     */
    async receptionsReceptionIdDelete(requestParameters: ReceptionsReceptionIdDeleteRequest, initOverrides?: RequestInit): Promise<Reception> {
        const response = await this.receptionsReceptionIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

}