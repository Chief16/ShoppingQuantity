import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductService } from './service/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  cartQuantity = 0;
  title = environment.title || "Shopping Quantity Application";
  private modalService = inject(NgbModal);

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.cartItems$.subscribe((items) => {
      this.cartQuantity = items.reduce((acc, item) => acc + item.selectedQuantity, 0);
    });
  }

  open() {
		const modalRef = this.modalService.open(CartComponent);
	}
}
