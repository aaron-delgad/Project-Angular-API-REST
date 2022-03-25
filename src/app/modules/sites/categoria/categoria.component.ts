import { Component, OnInit } from '@angular/core';
import { BusinesService } from 'src/app/shared/services/busines.service';
import { MatTableDataSource } from '@angular/material/table';
import { Categories } from 'src/app/shared/model/category';

@Component({
  selector: 'rutas2-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  displayedColumns: string[] = ['name', 'typeImg'];
  dataSource = new MatTableDataSource<Categories>([]);

  constructor(private readonly businesService: BusinesService) { }

  ngOnInit(): void {
    this.businesService.getAllCategory().subscribe(answer => {
      this.dataSource.connect().next(answer);
      console.log(answer);
    });
  }


}
