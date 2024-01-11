import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacterApiService } from '../infraestructura/character-api.interface';
import { IDomainResponseCharacter } from '../domain/character.model';
import { HTTP_CHARACTER_SERVICE } from '../provider/character-api.provider';

@Injectable({ providedIn: 'root' })
export class CharacterUseCaseService {
    constructor(@Inject(HTTP_CHARACTER_SERVICE) private _characterApiService: ICharacterApiService) {}

    getCharacter(): Observable<IDomainResponseCharacter> {
        return this._characterApiService.getCharacter();
    } 
}