import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { email: 'test@example.com', password: '123456' },
    { email: 'alo.cruz@duocuc.cl', password: '123456' },
    { email: 'an.camposa@duocuc.cl', password: '123456' },
    { email: 'penca@domain.com', password: '123456' } // Corregido
  ];

  constructor() {}

  // Validar formato de correo electrónico
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Restablecer contraseña (simulación)
  resetPassword(email: string): Promise<string> {
    if (!this.isValidEmail(email)) {
      return Promise.reject('El formato del correo electrónico no es válido.');
    }

    const user = this.users.find(u => u.email === email);
    if (user) {
      return Promise.resolve('Se ha enviado un correo electrónico de restablecimiento.');
    } else {
      return Promise.reject('El correo electrónico no está registrado.');
    }
  }
}
