import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public nameNavbar: boolean = true;
  public nameOwner: string = 'rodolfo barreto salas de lima'

  constructor() {}

  ngOnInit(): void {}

  public nameNavbarChange(): boolean {
    return this.nameNavbar = !this.nameNavbar;
  }

}
