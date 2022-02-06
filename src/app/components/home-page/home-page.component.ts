import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AmazonItem } from 'src/app/models/item';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public listOfProducts: AmazonItem[] = [];
  product!: AmazonItem;

  constructor(private productServise: ProductsService) {}

  ngOnInit(): void {
    this.productServise.bestsellersTvList().subscribe((resp) => {
      this.listOfProducts = resp.results;
      console.log(this.listOfProducts);
    });
  }
}
