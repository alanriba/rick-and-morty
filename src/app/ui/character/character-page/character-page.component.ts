import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from "../character-list/character-list.component";
import { finalize } from 'rxjs';
import { CharacterUseCaseService } from '../../../domain/character/application/character-use-case.service';
import { IDomainResponseCharacter, Info, Result } from '../../../domain/character/domain/character.model';
 
@Component({
    selector: 'app-character-page',
    standalone: true,
    templateUrl: './character-page.component.html',
    imports: [CommonModule, CharacterListComponent]
})
export class CharacterPageComponent {
  private _characterApiService = inject(CharacterUseCaseService);
  listCharacters: Result[] = []; // 
  infoPage: Info = { count: 0, pages: 0, next: '', prev: '' }; 

  ngOnInit(): void {
    this._loadCharacters();
  }

  private _loadCharacters(): void {
    this._characterApiService
      .getCharacter()
      .subscribe({
        next: (response) => {
          this.infoPage = response.info;
          this.listCharacters = response.results;
        }
      });
  }
}
