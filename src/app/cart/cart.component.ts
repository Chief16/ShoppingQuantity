import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  activeModal = inject(NgbActiveModal);

  cartItems: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cartItems = this.productService.getCartItems();
  }
}
