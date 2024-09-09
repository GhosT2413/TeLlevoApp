import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  data = {
    user: "",
    pw: ""
  };

  constructor(private nCtrl: NavController, private toastController: ToastController) { }

  async logout() {
    // Limpiar datos de sesión
    this.data.user = "";
    this.data.pw = "";

    // Redirigir al login
    await this.nCtrl.navigateRoot('/login');

    // Mostrar un mensaje de confirmación
    const toast = await this.toastController.create({
      color: 'success',
      message: 'Sesión cerrada exitosamente.',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
  
}
