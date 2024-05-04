import { Injectable } from '@angular/core';
import { filter, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { DNOItemResponse, DNO_EnhancementItem } from '@shared/types/interfaces';
import { HttpService } from '@core/services/http/http.service';

@Injectable({providedIn: 'root'})

export class ItemsService {

  readonly API_ITEMS = environment.api;

  constructor(
    private http: HttpService
  ) { }

  public getItemByName(field: string): Observable<DNO_EnhancementItem> {
    return this.http
      .post<DNOItemResponse>(this.API_ITEMS + 'get-item', {name: field})
      .pipe(
        filter(res => !!res && res.ok),
        map(res => res.item)
    );
  }

}