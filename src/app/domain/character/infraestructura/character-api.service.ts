import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { ICharacterApiService } from './character-api.interface';
import { IDomainResponseCharacter } from "../domain/character.model";
import { IApiCharacterResponse } from "./model/character-api.model";
import { environment } from "../../../../environments/environment";

@Injectable()
export class CharacterApiService implements ICharacterApiService {
    private _httpClient = inject(HttpClient);
    private readonly URL_CHARACTER = environment.api + '/character';


    getCharacter(): Observable<IDomainResponseCharacter> {
        return this._httpClient.get<IApiCharacterResponse>(this.URL_CHARACTER);
    }
}