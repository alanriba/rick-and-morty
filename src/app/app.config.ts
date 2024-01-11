import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CHARACTER_API_PROVIDER } from './domain/character/provider/character-api.provider';  
import { provideHttpClient, withFetch } from '@angular/common/http';
import { EPISODE_API_PROVIDER } from './domain/episode/provider/character-api.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(withFetch()), 
    CHARACTER_API_PROVIDER, EPISODE_API_PROVIDER]
};
