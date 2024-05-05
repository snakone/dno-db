import { Injectable } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '@env/environment';
import { DNOItemMaterial, DNOItemMaterialResponse } from '@shared/types/interfaces';
import { HttpService } from '@core/services/http/http.service';

@Injectable({ providedIn: 'root' })

export class MaterialsService {

  readonly API_MATERIALS = environment.api;

  cachedItems: DNOItemMaterial[] = [];

  constructor(private http: HttpService) { }

  public getMaterials(): Observable<DNOItemMaterial[]> {
    if(this.cachedItems.length > 0) { return of(this.cachedItems); }
    return this.http
      .get<DNOItemMaterialResponse>(this.API_MATERIALS + 'get-materials')
      .pipe(
        filter(res => !!res && res.ok),
        map(res => res.items),
        tap(items => this.cachedItems = items)
      );
  }

}