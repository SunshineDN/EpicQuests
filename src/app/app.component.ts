import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'EpicQuests';
  mostrarMenu: boolean = true;

  constructor(private _login: LoginService) { }

  ngOnInit(): void {
    this._login.getMostraMenu().subscribe(
      res => { this.mostrarMenu = res }
    )
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }
}
