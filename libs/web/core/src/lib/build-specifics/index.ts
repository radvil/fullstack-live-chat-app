import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const EXTERNAL_MODULES = [
  StoreDevtoolsModule.instrument({
    maxAge: 25,
  }),
];
