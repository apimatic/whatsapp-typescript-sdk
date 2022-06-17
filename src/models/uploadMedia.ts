/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface UploadMedia {
  id: string;
}

export const uploadMediaSchema: Schema<UploadMedia> = object({
  id: ['id', string()],
});
