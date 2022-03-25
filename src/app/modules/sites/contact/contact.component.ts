import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product';
import { BusinesService } from 'src/app/shared/services/busines.service';


@Component({
  selector: 'rutas2-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  showProductDetail = 0;
  product: Product[] = [];

  producDetail: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: {
      id: 0,
      name: '',
      typeImg: '',
    },
    images: []
  };

  draw = true;
  constructor(private readonly businesService: BusinesService) { }

  ngOnInit(): void {
    this.businesService.onProductGet(8,0).subscribe(answer =>{
      this.product = answer;
      console.log(answer);
  })
}

  ngOnProductDetail(id: number){
    this.businesService.onProductDetail(id).subscribe(answer => {
      this.showProductDetail = 1;
      this.producDetail = answer;

    })
  }

}
