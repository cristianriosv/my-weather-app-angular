import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule
  ]
})
export class TableComponent {
  @Input() columns!: { columnDef: string, header: string, cell: (element: any) => string, sort?: boolean }[];
  @Input() data!: object[];
  dataSource: MatTableDataSource<object> = new MatTableDataSource();
  @Input() displayedColumns!: string[];

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
