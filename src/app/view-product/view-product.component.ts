import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService, Product } from '../services/product.service';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Try to get product from router state first (instant navigation)
    const state = history.state;
    if (state.product) {
      this.product = state.product;
    } else {
      // Fallback: fetch product from API if user opens the page directly
      const productId = Number(this.route.snapshot.paramMap.get('id'));
      this.productService.getProductById(productId).subscribe({
        next: (data) => this.product = data,
        error: (err) => console.error('Error fetching product', err)
      });
    }
  }
}
