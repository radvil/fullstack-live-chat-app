import { InjectionToken, ValueProvider } from '@angular/core';
import { IWebAppConfig } from './app-config.interface';

export const WEB_APP_CONFIG = new InjectionToken<IWebAppConfig>('live-chat-app-web.config');

export const getWebAppConfigProvider = (value: IWebAppConfig): ValueProvider => ({
  provide: WEB_APP_CONFIG,
  useValue: value
});
