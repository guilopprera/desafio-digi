import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './domain/product';
import { AppState } from './store';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public productsQtd: number = 0;
  products$: Observable<Product[]>;

  constructor(private store: Store<AppState>) { }

  async ngOnInit(): Promise<void> {
    await this.store.pipe(select('products')).subscribe(res => {
      if (res)
        this.productsQtd = res.length;
    });
  }
}
