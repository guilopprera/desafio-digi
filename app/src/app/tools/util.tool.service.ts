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

  public async ToastInfoTop(msg: string, duration: number = 3000): Promise<void> {
    const toast = await this.Toast(msg, "toast-info", duration);
    await toast.present();
  }

  private async Toast(msg: string, cssClass: string, duration: number): Promise<HTMLIonToastElement> {
    return await this.toastCtrl.create({
      message: msg,
      cssClass: `toast-custom ${cssClass}`,
      duration: duration,
      position: 'top'
    });
  }
}
