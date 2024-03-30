import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilToolService {
  public static ListaLoadings: HTMLIonLoadingElement[];

  constructor(private toastCtrl: ToastController, private loadingCtrl: LoadingController) { }

  public async LoadingShow(msg: string = "Carregando..."): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingCtrl.create({
      message: msg,
      backdropDismiss: false,
      keyboardClose: false
    });

    await loading.present();

    if (UtilToolService.ListaLoadings == null)
      UtilToolService.ListaLoadings = [];

    UtilToolService.ListaLoadings.push(loading);

    return loading;
  }

  public async LoadingHide(loading: HTMLIonLoadingElement) {
    await loading.dismiss();

    var loadingsFilter = UtilToolService.ListaLoadings.filter((value: HTMLIonLoadingElement) => {
      return value != loading;
    });

    UtilToolService.ListaLoadings = loadingsFilter;
  }

  public async Toast(msg: string): Promise<HTMLIonToastElement> {
    return await this.toastCtrl.create({
      message: msg,
      duration: 500,
      position: 'bottom'
    });
  }
}
