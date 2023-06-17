import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit{

  productCategories: ProductCategory[] = [];
  constructor(private productService: ProductService){}

  ngOnInit(){
    this.listProductCategories();
  }
  listProductCategories() {
    // Invoke the Service
    this.productService.getProductCategories().subscribe(
      data => {
        // Logging the obtained data
        console.log('Product Categories: ' + JSON.stringify(data));
        // Assigning the data to our Property.
        this.productCategories = data;
      }
    );
  }
}
