import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { DNOItemMaterial } from '@shared/types/interfaces';
import {MatPaginator} from '@angular/material/paginator';
import { startWith, switchMap, catchError, map, of } from 'rxjs';
import { MaterialsService } from '@core/services/api/materials/materials.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrl: './database.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DatabaseComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['name', 'enchantLevel', 'enchantRatio', 'breakRatio', 'minDowngrade', 'maxDowngrade', 'gold'];
  dataSource = new MatTableDataSource<DNOItemMaterial>([]);

  resultsLength = 0;
  isLoadingResults = true;

  text = '';

  constructor(private materialSrv: MaterialsService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate = (data, filter) => {
      return data['Item Name'].includes(filter);
    }

    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.materialSrv.getMaterials().pipe(catchError(() => of(null)));
      }),
      map(data => {
        this.isLoadingResults = false;
        if (data === null) {
          return [];
        }
        this.resultsLength = data.length;
        return data;
      }),
    )
    .subscribe(data => {
      (this.dataSource.data = data)});
  }

  public getRatioColor(ratio: number = 0): string {
    if(ratio <= 15) { return 'crimson'; }
    else if(ratio > 15 && ratio <= 35) { return 'chocolate'; }
    else if(ratio > 25 && ratio <= 65) { return 'darkcyan' }
    else if(ratio > 65 && ratio < 100) { return 'darkslategray' }
    return 'chartreuse';
  }

  public filter(): void {
    this.dataSource.filter = this.text;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
