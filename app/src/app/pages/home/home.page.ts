import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Product as Produto } from 'src/app/domain/product';
import { UtilToolService } from 'src/app/tools/util.tool.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public listaProdutos: Produto[] = [];

  constructor(private http: HttpClient, private toastController: ToastController, private utilService: UtilToolService,
  ) {
    this.getJSON().subscribe(data => {
      this.listaProdutos = data;
    });
  }

  private getJSON(): Observable<any> {
    return this.http.get("./assets/products.json");
  }

  public async addToCart() {
    await this.utilService.LoadingShow();
  }
}
