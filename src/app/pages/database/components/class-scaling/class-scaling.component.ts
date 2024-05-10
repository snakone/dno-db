import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClassStats, classStats } from '@shared/types/interfaces';

@Component({
  selector: 'app-class-scaling',
  templateUrl: './class-scaling.component.html',
  styleUrl: './class-scaling.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ClassScalingComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('warrior') warriorSort!: MatSort;
  @ViewChild('archer') archerSort!: MatSort;
  @ViewChild('sorceress') sorceressSort!: MatSort;
  @ViewChild('cleric') clericSort!: MatSort;
  @ViewChild('academic') academicSort!: MatSort;
  @ViewChild('kali') kaliSort!: MatSort;
  @ViewChild('assassin') assassinSort!: MatSort;
  @ViewChild('lancea') lanceaSort!: MatSort;

  displayedColumns: string[] = ['className', 'pdmgStr', 'pdmgAgi', 'mdmgInt', 'critdmgStr', 'critdmgAgi', 'critdmgInt', 'hpVit', 'pdefVit', 'mdefInt', 'critAgi'];
  dataSourceWarrior = new MatTableDataSource<ClassStats>([]);
  dataSourceArcher = new MatTableDataSource<ClassStats>([]);
  dataSourceSorceress = new MatTableDataSource<ClassStats>([]);
  dataSourceCleric = new MatTableDataSource<ClassStats>([]);
  dataSourceAcademic = new MatTableDataSource<ClassStats>([]);
  dataSourceKali = new MatTableDataSource<ClassStats>([]);
  dataSourceAssassin = new MatTableDataSource<ClassStats>([]);
  dataSourceLancea = new MatTableDataSource<ClassStats>([]);

  ngAfterViewInit() {
    this.dataSourceWarrior.data = classStats.Warrior;
    this.dataSourceWarrior.sort = this.warriorSort;

    this.dataSourceArcher.data = classStats.Archer;
    this.dataSourceArcher.sort = this.archerSort;

    this.dataSourceSorceress.data = classStats.Sorceress;
    this.dataSourceSorceress.sort = this.sorceressSort;

    this.dataSourceCleric.data = classStats.Cleric;
    this.dataSourceCleric.sort = this.clericSort;

    this.dataSourceAcademic.data = classStats.Academic;
    this.dataSourceAcademic.sort = this.academicSort;

    this.dataSourceKali.data = classStats.Kali;
    this.dataSourceKali.sort = this.kaliSort;

    this.dataSourceAssassin.data = classStats.Assassin;
    this.dataSourceAssassin.sort = this.academicSort;

    this.dataSourceLancea.data = classStats.Lancea;
    this.dataSourceLancea.sort = this.lanceaSort;
  }

}
