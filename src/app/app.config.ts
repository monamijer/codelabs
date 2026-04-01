import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import '@angular/common/locales/global/fr'

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(),
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BIF'},
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ]
};
