import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
 
 import { IDomainResponseCharacter } from '../../../domain/character/domain/character.model';
import { IDomainResponseEpisode } from '../../../domain/episode/domain/episode.model';

@Component({
  selector: 'app-episode-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episode-list.component.html',
})
export class EpisodeListComponent {
  @Input() episodes?: IDomainResponseEpisode[]
 
}
