/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  PersonalInformationTypeEnum,
  personalInformationTypeEnumSchema,
} from './personalInformationTypeEnum';

export interface UrlObject {
  url?: string;
  type?: PersonalInformationTypeEnum;
}

export const urlObjectSchema: Schema<UrlObject> = object({
  url: ['url', optional(string())],
  type: ['type', optional(personalInformationTypeEnumSchema)],
});
