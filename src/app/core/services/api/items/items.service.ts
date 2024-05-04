import { Injectable } from '@angular/core';
import { filter, map, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '@env/environment';
import { DNOItemResponse, DNO_EnhancementItem } from '@shared/types/interfaces';
import { HttpService } from '@core/services/http/http.service';

@Injectable({providedIn: 'root'})

export class ItemsService {

  readonly API_ITEMS = environment.api;

  cachedNames: {[key: string]: DNO_EnhancementItem} = {};

  constructor(
    private http: HttpService
  ) { }

  public getItemByName(field: string): Observable<DNO_EnhancementItem> {
    if(field in this.cachedNames) {
      return of(this.cachedNames[field]);
    }

    return this.http
      .post<DNOItemResponse>(this.API_ITEMS + 'get-item', {name: field})
      .pipe(
        filter(res => !!res && res.ok),
        map(res => res.item),
        tap(item => this.cachedNames[field] = item)
    );
  }

}