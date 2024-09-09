import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data = {
    user: "",
    pw: "",
  };

  constructor(private nCtrl: NavController,
    private toastController: ToastController) { }

    async goHome() {
      const emailRegex = /@duocuc\.cl$/; // Verifica que el correo termine en "@duocuc.cl"
      const correctPassword = 'AdminDuocUC'; // Contraseña válida
  
      if (!this.data.user || !this.data.pw) {
        // Verifica si los campos están vacíos
        const toast = await this.toastController.create({
          color: 'danger',
          message: 'Por favor, complete todos los campos.',
          duration: 2000,
          position: 'bottom'
        });
        await toast.present();
      } else if (!emailRegex.test(this.data.user)) {
        // Valida que el correo tenga el dominio @duocuc.cl
        const toast = await this.toastController.create({
          color: 'danger',
          message: 'El correo debe terminar en "@duocuc.cl".',
          duration: 2000,
          position: 'bottom'
        });
        await toast.present();
      } else if (this.data.pw !== correctPassword) {
        // Valida que la contraseña sea "AdminDuocUC"
        const toast = await this.toastController.create({
          color: 'danger',
          message: 'La contraseña es incorrecta.',
          duration: 2000,
          position: 'bottom'
        });
        await toast.present();
      } else {
        // Si todo está correcto, navega a la página de inicio
        let nExtras: NavigationExtras = {
          queryParams: {
            data1: this.data.user,
            data2: this.data.pw
          }
        };
        await this.nCtrl.navigateForward(['/home'], nExtras);
      }
    }
  

  goResetPassword() {
    this.nCtrl.navigateForward('/reset-password');
  }

  

  async mostrarMensajeRedNoDisponible() {
    const toast = await this.toastController.create({
      message: 'Aún no tenemos esta red :D',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }



  ngOnInit() { }
}

