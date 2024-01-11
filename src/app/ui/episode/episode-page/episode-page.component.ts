import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { EpisodeUseCaseService } from '../../../domain/episode/application/episode-use-case.service';
import { IDomainResponseEpisode } from '../../../domain/episode/domain/episode.model';
import { EpisodeListComponent } from '../episode-list/episode-list.component';
 
@Component({
    selector: 'app-episode-page',
    standalone: true,
    imports: [CommonModule, EpisodeListComponent],
    templateUrl: './episode-page.component.html',
})
export class EpisodePageComponent {
  private _episodeApiService = inject(EpisodeUseCaseService);
  listEpisodes: IDomainResponseEpisode[] = [];
  showSpinner = true;

  ngOnInit(): void {
    this._loadCharacters();
  }

  private _loadCharacters(): void {
    this._episodeApiService
      .getEpisode()
      .pipe(finalize(() => (this.showSpinner = false)))
      .subscribe({
        next: (response) => {
          console.log('episodes',response);
          this.listEpisodes = response;
        }
      });
  }
}
