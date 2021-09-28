import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-procuct-create',
  templateUrl: './procuct-create.component.html',
  styleUrls: ['./procuct-create.component.css']
})
export class ProcuctCreateComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  })

  constructor(private productService: ProductService,
              private router: Router ) {
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    this.productForm.reset();
    this.goHome();
  }
  goHome() {
    this.router.navigate(['product'])
  }

}
