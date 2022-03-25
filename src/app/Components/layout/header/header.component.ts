import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rutas2-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
  }

  onMenuRutas(ruta: string){
    this.router.navigate(['/web/'+ruta]);
  }
}
