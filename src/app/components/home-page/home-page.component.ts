import { Component, OnInit } from '@angular/core';
import { HMitem, ProductDetails } from 'src/app/models/item';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public listOfProducts: HMitem[] = [];
  product!: HMitem;
  productCode: string = '';
  productDetails!: ProductDetails;
  productData!: ProductDetails;

  constructor(private productService: ProductsService) {
    this.productCode = '0715828013';
  }

  ngOnInit(): void {}

  public getAllProducts(): void {
    console.log('paspausta');

    this.productService.getHmMenProducts().subscribe((resp) => {
      this.listOfProducts = resp.results;
      console.log(this.listOfProducts);
    });
  }

  public ProductDetails(): void {
    this.productService
      .getItemDetailsByCode(this.productCode)
      .subscribe((resp) => {
        this.productData = resp.product;
        console.log('produc DETAILS po uzklausos:', this.productData);

        this.productDetails = {
          code: this.productData.code,
          color: this.productData.color,
          constructionDescr: this.productData.constructionDescr,
          countryOfProduction: this.productData.countryOfProduction,
          description: this.productData.description,
          fits: this.productData.fits,
          inStock: this.productData.inStock,
          keyFibreTypes: this.productData.keyFibreTypes,
          name: this.productData.name,
          whitePrice: this.productData.whitePrice,
        };
        console.log(
          'visa info apie produkta po uzklausos:',
          this.productDetails
        );
      });
  }
}
