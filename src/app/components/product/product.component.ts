import { Component, Input, OnInit } from '@angular/core';
import { HMitem } from 'src/app/models/item';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input()
  product!: HMitem;
  item!: {
    name: string;
    brandName: string;
    imageUrl: any;
    price: number;
    currency: string;
    code: string;
  };

  constructor() {}

  ngOnInit(): void {
    const { name, brandName, defaultArticle, whitePrice } = this.product;
    const { logo, code } = defaultArticle;
    const logoObj = logo.logoPicture[0];
    const imageUrl = logoObj.url;
    const { value, currencyIso } = whitePrice;

    console.log(name);

    // const price = whitePrice.value;
    // const currency = whitePrice.currencyIso;

    this.item = {
      name,
      brandName,
      imageUrl,
      price: value,
      currency: currencyIso,
      code,
    };

    console.log(this.item);
  }
}
