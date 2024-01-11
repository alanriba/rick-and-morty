import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CHARACTER_API_PROVIDER } from './domain/character/provider/character-api.provider'; 
import { EPISODE_API_PROVIDER } from './domain/episode/provider/character-api.provider';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(withFetch()),
    CHARACTER_API_PROVIDER, 
    EPISODE_API_PROVIDER
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
