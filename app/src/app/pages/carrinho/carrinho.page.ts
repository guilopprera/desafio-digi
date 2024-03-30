import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/domain/product';
import { AppState } from 'src/app/store';
import { RemoveFromCart } from 'src/app/store/cart.actions';
import { UtilToolService } from 'src/app/tools/util.tool.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  products$: Observable<Product[]>;
  products: Product[];
  total: number = 0;

  constructor(private utilService: UtilToolService,
    private store: Store<AppState>) { }

  async ngOnInit(): Promise<void> {
    await this.store.pipe(select('products')).subscribe(res => {
      this.products = res == undefined ? [] : res;
      let $ = this;
      $.total = 0;

      this.products.forEach(prod => {
        $.total += parseInt(prod.price);
      });
    });
  }

  public async removeFromCart(product: Product) {
    let loading = await this.utilService.LoadingShow();

    setTimeout(() => {
      this.store.dispatch(new RemoveFromCart(product));
      this.utilService.LoadingHide(loading);
    }, 500);
  }
}
