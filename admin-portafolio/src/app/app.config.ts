import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { authInterceptor } from './core/interceptors/auth.interceptor';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideToastr(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    
     provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
};
