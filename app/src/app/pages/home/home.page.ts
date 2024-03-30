import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/domain/product';
import { AppState } from 'src/app/store';
import { AddCart } from 'src/app/store/cart.actions';
import { UtilToolService } from 'src/app/tools/util.tool.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  public productList: Product[] = [];

  constructor(private http: HttpClient, private utilService: UtilToolService, private store: Store<AppState>
  ) {
    this.getJSON().subscribe(data => this.productList = data);
  }

  private getJSON(): Observable<any> {
    return this.http.get("./assets/products.json");
  }

  public async addToCart(product: Product) {
    let loading = await this.utilService.LoadingShow();

    setTimeout(() => {
      this.store.dispatch(new AddCart(product));
      this.utilService.Toast("Produto adicionado ao carrinho!");
      this.utilService.LoadingHide(loading);
    }, 500);
  }
}
