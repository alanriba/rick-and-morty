import { Observable } from 'rxjs';
import { IDomainResponseEpisode } from '../domain/episode.model';

export interface IEpisodeApiService {
    getEpisode(): Observable<IDomainResponseEpisode[]>;
}
