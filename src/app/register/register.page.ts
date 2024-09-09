import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  data = {
    name: "",
    user: "",
    pw: "",
    confirmPw: ""
  };

  constructor(private nCtrl: NavController, private toastController: ToastController) {}

  async register() {
    const emailRegex = /@duocuc\.cl$/;

    if (!this.data.name || !this.data.user || !this.data.pw || !this.data.confirmPw) {
      const toast = await this.toastController.create({
        color: 'danger',
        message: 'Por favor, complete todos los campos.',
        duration: 2000,
        position: 'bottom'
      });
      await toast.present();
    } else if (!emailRegex.test(this.data.user)) {
      const toast = await this.toastController.create({
        color: 'danger',
        message: 'El correo debe terminar en "@duocuc.cl".',
        duration: 2000,
        position: 'bottom'
      });
      await toast.present();
    } else if (this.data.pw !== this.data.confirmPw) {
      const toast = await this.toastController.create({
        color: 'danger',
        message: 'Las contraseñas no coinciden.',
        duration: 2000,
        position: 'bottom'
      });
      await toast.present();
    } else {
      const toast = await this.toastController.create({
        color: 'success',
        message: 'Registro exitoso!',
        duration: 2000,
        position: 'bottom'
      });
      await toast.present();
      this.nCtrl.navigateForward('/home'); // Navega a la página de inicio u otra de tu elección
    }
  }

  goLogin() {
    this.nCtrl.navigateForward('/login');
  }

  async mostrarMensajeRedNoDisponible() {
    const toast = await this.toastController.create({
      message: 'Aún no tenemos esta red :D',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  ngOnInit() {}
}