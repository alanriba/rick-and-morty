import { InjectionToken, Provider } from '@angular/core';
import { EpisodeApiService } from '../infraestructura/episode-api.service';

export const HTTP_EPISODE_SERVICE = new InjectionToken<EpisodeApiService>('EpisodeApiService');
export const EPISODE_API_PROVIDER: Provider = { provide: HTTP_EPISODE_SERVICE, useClass: EpisodeApiService };
