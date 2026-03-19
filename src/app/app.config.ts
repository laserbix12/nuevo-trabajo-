import { ApplicationConfig, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    importProvidersFrom(FormsModule),
    { provide: LOCALE_ID, useValue: 'es' }
  ]
};
