export interface HMitem {
  brandName: string;
  name: string;
  whitePrice: WhitePrice;
  defaultArticle: DefaultArcticle;
}

export interface DefaultArcticle {
  logo: Logo;
  code: string;
}

export interface Logo {
  logoPicture: any[];
}

//Product details intrefaces
export interface ProductDetails {
  code: string;
  color: Color;
  constructionDescr: string;
  countryOfProduction: string;
  description: string;
  fits: string[];
  inStock: boolean;
  keyFibreTypes: string[];
  name: string;
  whitePrice: Price;
}

export interface Color {
  code: string;
  rgbColor: string;
  text: string;
}

export interface Price {
  price: number;
  currency: string;
}

export interface WhitePrice {
  currencyIso: string;
  formattedValue: string;
  value: number;
}
// export interface AmazonItem {
//   asin: String;
//   full_link: string;
//   image: string;
//   prices: any;
//   rank: number;
//   title: string;
// }
