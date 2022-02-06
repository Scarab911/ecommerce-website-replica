import { Component, Input, OnInit } from '@angular/core';
import { AmazonItem } from 'src/app/models/item';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input()
  product!: AmazonItem;

  constructor() {}

  ngOnInit(): void {}
}
