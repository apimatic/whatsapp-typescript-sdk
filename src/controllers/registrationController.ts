/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ContentTypeEnum,
  contentTypeEnumSchema,
} from '../models/contentTypeEnum';
import {
  RegisterPhoneRequest,
  registerPhoneRequestSchema,
} from '../models/registerPhoneRequest';
import {
  SuccessResponse,
  successResponseSchema,
} from '../models/successResponse';
import { string } from '../schema';
import { BaseController } from './baseController';

export class RegistrationController extends BaseController {
  /**
   * Used to register a phone number or to migrate WhatsApp Business Accounts from a current On-Premises
   * deployment to the new Cloud-Based API. Business Solution Providers (BSPs) must authenticate
   * themselves with an access token with the whatsapp_business_management permission.
   *
   * @param phoneNumberID
   * @param body
   * @return Response from the API call
   */
  async registerPhone(
    phoneNumberID: string,
    body: RegisterPhoneRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SuccessResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      phoneNumberID: [phoneNumberID, string()],
      body: [body, registerPhoneRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/${mapped.phoneNumberID}/register`;
    return req.callAsJson(successResponseSchema, requestOptions);
  }

  /**
   * Used to deregister a phone number. Deregister phone removes a previously registered phone. You can
   * always re-register your phone using by repeating the registration process. Business Solution
   * Providers (BSPs) must authenticate themselves with an access token with the
   * whatsapp_business_management permission.
   *
   * @param contentType
   * @param phoneNumberID
   * @return Response from the API call
   */
  async deregisterPhone(
    contentType: ContentTypeEnum,
    phoneNumberID: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SuccessResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      contentType: [contentType, contentTypeEnumSchema],
      phoneNumberID: [phoneNumberID, string()],
    });
    req.header('Content-Type', mapped.contentType);
    req.appendTemplatePath`/${mapped.phoneNumberID}/deregister`;
    return req.callAsJson(successResponseSchema, requestOptions);
  }
}
