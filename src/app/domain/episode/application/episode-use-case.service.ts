import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDomainResponseEpisode } from '../domain/episode.model';
import { IEpisodeApiService } from '../infraestructura/episode-api.interface';
import { HTTP_EPISODE_SERVICE } from '../provider/character-api.provider';
 

@Injectable({ providedIn: 'root' })
export class EpisodeUseCaseService {
    constructor(@Inject(HTTP_EPISODE_SERVICE) private _episodeApiService: IEpisodeApiService) {}

    getEpisode(): Observable<IDomainResponseEpisode[]> {
        return this._episodeApiService.getEpisode();
    } 
}