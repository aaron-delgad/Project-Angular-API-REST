import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product} from './../../../../shared/model/product'

@Component({
  selector: 'rutas2-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = {
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


  @Output() showDetail = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnProductDetail(){
      this.showDetail.emit(this.product.id);
    }
}
