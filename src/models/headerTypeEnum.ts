/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for HeaderTypeEnum
 */
export enum HeaderTypeEnum {
  Text = 'text',
  Document = 'document',
  Image = 'image',
  Video = 'video',
}

/**
 * Schema for HeaderTypeEnum
 */
export const headerTypeEnumSchema: Schema<HeaderTypeEnum> = stringEnum(HeaderTypeEnum);
