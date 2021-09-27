import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-procuct-list',
  templateUrl: './procuct-list.component.html',
  styleUrls: ['./procuct-list.component.css']
})
export class ProcuctListComponent implements OnInit {
  products: Product[] = [];
  productForm!: FormGroup;

  constructor(private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.getAll();
    this.productForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
    })

  }

  getAll() {
    this.products = this.productService.getAll();
  }

  showEdit(id: any) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.productForm.get('id')?.setValue(this.products[i].id);
        this.productForm.get('name')?.setValue(this.products[i].name);
        this.productForm.get('price')?.setValue(this.products[i].price);
        this.productForm.get('description')?.setValue(this.products[i].description);
        return;
      }
    }
  }
  deleteProduct(id: any) {
      this.productService.deleteProduct(id);
  }

  submitEdit() {
    this.productService.editProduct(this.productForm.value);
    this.productForm.reset();
  }



}
