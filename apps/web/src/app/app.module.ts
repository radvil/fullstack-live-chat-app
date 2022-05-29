import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { getWebAppConfigProvider } from '@radvil/web/config';
import { WebCoreModule } from '@radvil/web/core';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, WebCoreModule],
  providers: [getWebAppConfigProvider(environment)],
})
export class AppModule {}
