import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LayoutContainerModule } from '@radvil/web/layout/container';
import { webCoreRoutes } from './web.routes';

import id from '@angular/common/locales/id';
import { registerLocaleData } from '@angular/common';
import { EXTERNAL_MODULES } from './build-specifics';

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
    LayoutContainerModule,
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
