import { SetMetadata } from '@nestjs/common';

export const API_RES_MESSAGE_METADATA_KEY = 'ApiSuccessMessage';

export const ApiResMessage = (message: string) => SetMetadata(API_RES_MESSAGE_METADATA_KEY, message);
