import { Component, OnInit } from '@angular/core';
import { BusinesService } from 'src/app/shared/services/busines.service';
import { MatTableDataSource } from '@angular/material/table';
import { UserModalComponent } from '../A_components/user-modal/user-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Users } from 'src/app/shared/model/users';
@Component({
  selector: 'rutas2-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public readonly dialog: MatDialog,private readonly businesService: BusinesService) { }

  ngOnInit(): void {
    this.businesService.getAllUsers().subscribe(answer => {
      this.dataSource.connect().next(answer);
    })
  }

  displayedColumns: string[] = ['name', 'email', 'password'];
  dataSource = new MatTableDataSource<Users>([]);

  addUser(){
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.ngOnInit();
    });

  }

}
