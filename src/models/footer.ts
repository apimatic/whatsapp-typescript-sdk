/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Footer {
  /** The footer content. Emojis and markdown are supported. Links are supported. */
  text: string;
}

export const footerSchema: Schema<Footer> = object({
  text: ['text', string()],
});