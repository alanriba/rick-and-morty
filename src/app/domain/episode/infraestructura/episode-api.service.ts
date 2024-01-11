import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, tap, map } from "rxjs";

import { environment } from "../../../../environments/environment";
import { IEpisodeApiService } from './episode-api.interface';
import { IDomainResponseEpisode } from '../domain/episode.model';
import { IApiEpisodeResponse } from "./model/episode-api.model";

@Injectable()
export class EpisodeApiService implements IEpisodeApiService {
    private _httpClient = inject(HttpClient);
    private readonly URL_EPISODE = environment.api + '/character';


    getEpisode(): Observable<IDomainResponseEpisode[]> {
        return this._httpClient.get<IApiEpisodeResponse>(this.URL_EPISODE).pipe(
            tap(response => console.log('Respuesta del servidor:', response)),
            map(response => response.results.map(episodeApi => ({
                id: episodeApi.id,
                name: episodeApi.name,
                air_date : episodeApi.air_date,
                episode: episodeApi.episode,
                url: episodeApi.url,
                characters: episodeApi.characters,
                created: episodeApi.created
            })))
        );
    }
}