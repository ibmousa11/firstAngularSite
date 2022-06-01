import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  constructor(private productService: ProductService) {}
  title: string = 'Products';

  imageWidth = 50;
  imageHeight = 50;

  errorMessage: string = '';

  buttonClicked = false;

  test: number = 0;

  _listFilter: string = '';

  get listFilter() {
    return this._listFilter;
  }

  set listFilter(value: string) {
    console.log(this.filteredProducts);

    this._listFilter = value;

    this.filteredProducts = this.performFilter(this._listFilter);
  }

  performFilter(value: string) {
    value = value.toLocaleLowerCase();
    return this.products.filter((service: IProduct) =>
      service.serviceName.toLocaleLowerCase().includes(value)
    );
  }

  onRatingClicked(message: string): void {
    this.title = this.title + ' ' + message;
    console.log(message);
  }

  products: IProduct[] = [];

  filteredProducts: IProduct[] = [];

  ngOnInit(): void {
    console.log('Implemented!');
    this.productService.getProducts().subscribe({
      next: (products) => {
        (this.products = products);
        console.log(products);
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err)
    });
  }

  // ngOnDestroy(): void {
  //     this.sub.unsubscribe();
  // }

  toggleImage() {
    this.buttonClicked = !this.buttonClicked;
  }

  increment() {
    this.test++;
  }

  decrement() {
    this.test--;
  }
}
