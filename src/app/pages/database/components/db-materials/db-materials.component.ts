import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialsService } from '@core/services/api/materials/materials.service';
import { DNOItemMaterial } from '@shared/types/interfaces';
import { getRatioColor } from '@shared/utils.app';
import { startWith, switchMap, catchError, of, map } from 'rxjs';

@Component({
  selector: 'app-db-materials',
  templateUrl: './db-materials.component.html',
  styleUrl: './db-materials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DbMaterialsComponent {

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

  public getColor(ratio: number = 0): string {
    return getRatioColor(ratio);
  }

  public filter(): void {
    this.dataSource.filter = this.text;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
