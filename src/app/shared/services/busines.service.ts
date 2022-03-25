import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categories } from '../model/category';
import { Users } from '../model/users';
import { UsersRequest } from '../model/users.request';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class BusinesService {

  urlPrincipal = environment.backend.path;

  productAll = this.urlPrincipal + environment.backend.sites.productAll;

  categoryAll = this.urlPrincipal + environment.backend.sites.categoryAll;

  usersAll = this.urlPrincipal + environment.backend.sites.userAll;
  userSave = this.urlPrincipal + environment.backend.sites.userSave;

  constructor(private readonly httpClient: HttpClient) { }

  getAllCategory(): Observable<Categories[]>{
    return this.httpClient.get(this.categoryAll)
    .pipe(map(resp => Categories.createCategories(resp)));
  }

  getAllUsers(): Observable<Users[]>{
    return this.httpClient.get(this.usersAll)
    .pipe(map(resp => Users.createUsers(resp)));
  }

  getUserSave(body: UsersRequest): Observable<UsersRequest>{
    return this.httpClient.post(this.userSave,body)
    .pipe(map(resp => UsersRequest.createUser(resp)));
  }

  onProductGet(limit: number, offset: number): Observable<Product[]>{
    const _params = new HttpParams().set('limit', limit).set('offset', offset);
   return  this.httpClient.get(this.productAll,{params: _params})
   .pipe(map(answer => Product.createObjects(answer)));
  }

  onProductDetail(id: number) {
    return this.httpClient.get<Product>(`${this.productAll}/${id}`);
  }
}
