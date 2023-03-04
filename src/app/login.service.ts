import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostraMenu = new Subject<boolean>();

  constructor() { }

  login(usuario: string, senha: string): void{
    if(usuario == "douglas" && senha == "admin"){
      localStorage.setItem("token", "authuser00");
      this.mostraMenu.next(false);
    } else {
      this.mostraMenu.next(true);
    }
  }

  setMotraMenu(valor: boolean){
    this.mostraMenu.next(valor);
  }

  getMostraMenu(){
    return this.mostraMenu.asObservable();
  }

}