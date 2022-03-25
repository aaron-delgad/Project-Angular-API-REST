import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { sitesRouting } from '../sites-routing';
import { ReactiveFormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { CategoriaComponent } from './categoria/categoria.component';
import { MatTableModule} from '@angular/material/table';
import { UserModalComponent } from './A_components/user-modal/user-modal.component';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { UserComponent } from './user/user.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductCardComponent } from './A_components/product-card/product-card.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    CategoriaComponent,
    UserModalComponent,
    UserComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    sitesRouting,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatPaginatorModule
  ]
})
export class SitesModule { }
