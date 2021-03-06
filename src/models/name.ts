/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Name {
  /** Full name, as it normally appears. */
  formattedName: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  suffix?: string;
  prefix?: string;
}

export const nameSchema: Schema<Name> = object({
  formattedName: ['formatted_name', string()],
  firstName: ['first_name', optional(string())],
  lastName: ['last_name', optional(string())],
  middleName: ['middle_name', optional(string())],
  suffix: ['suffix', optional(string())],
  prefix: ['prefix', optional(string())],
});
