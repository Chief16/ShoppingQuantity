import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  private modalService = inject(NgbModal);
  private productService = inject(ProductService);

  products: Product[] = this.productService.products;

  constructor() { }

  ngOnInit() {
  }

  validateQuantity(product: any) {
    if (product.selectedQuantity > product.avlQuantity || product.selectedQuantity < 1) {
      product.quantityError = true;
    } else {
      product.quantityError = false;
    }
  }

  addToCart(product: Product) {
    const selectedProduct = JSON.parse(JSON.stringify(product));
    const idx = this.products.findIndex(p => p.id === selectedProduct.id);
    this.products[idx].avlQuantity -= selectedProduct.selectedQuantity;
    this.productService.addToCart(selectedProduct);
    this.products[idx].selectedQuantity = 1;
    this.open();
  }

  checkProductOutOfStock(product: Product) {
    return product.avlQuantity === 0;
  }

	open() {
		const modalRef = this.modalService.open(CartComponent);
	}
}
