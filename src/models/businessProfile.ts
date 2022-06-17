/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';
import { VerticalEnum, verticalEnumSchema } from './verticalEnum';

export interface BusinessProfile {
  /** ID of the business profile object. */
  id: string;
  /** The messaging service used for the request. Always set it to "whatsapp" if you are using the WhatsApp Business API. */
  messagingProduct: string;
  /** Address of the business. */
  address: string;
  /** Description of the business. */
  description: string;
  /** Industry of the business. This can be either an empty string or one of the accepted values. */
  vertical?: VerticalEnum;
  /** The contact email address (in valid email format) of the business. */
  email?: string;
  /** The URLs associated with the business. For instance, a website, Facebook Page, or Instagram. You must include the http:// or https:// portion of the URL. */
  websites?: string[];
  /** URL of the profile picture generated from a call to the Resumable Upload API. */
  profilePictureUrl?: string;
}

export const businessProfileSchema: Schema<BusinessProfile> = object({
  id: ['id', string()],
  messagingProduct: ['messaging_product', string()],
  address: ['address', string()],
  description: ['description', string()],
  vertical: ['vertical', optional(verticalEnumSchema)],
  email: ['email', optional(string())],
  websites: ['websites', optional(array(string()))],
  profilePictureUrl: ['profile_picture_url', optional(string())],
});
