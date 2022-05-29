import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { webCoreRoutes } from './web-core.routes';

import id from '@angular/common/locales/id';
import { registerLocaleData } from '@angular/common';
import { EXTERNAL_MODULES } from './build-specifics';
import { WebShellModule } from '@radvil/web/shell';

registerLocaleData(id);

const rootReducers = {};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(webCoreRoutes, { scrollPositionRestoration: 'top' }),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(rootReducers, { metaReducers: [] }),
    StoreRouterConnectingModule.forRoot(),
    WebShellModule.forRoot(),
    ...EXTERNAL_MODULES,
  ],
  exports: [BrowserAnimationsModule, HttpClientModule, RouterModule],
})
export class WebCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: WebCoreModule) {
    if (parentModule) {
      throw new Error(`WebCoreModule has already been loaded. Please import in AppModule only!`);
    }
  }
}
