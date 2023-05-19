import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit{

  public installAngular: string = 'npm install -g @angular/cli'
  public installAngularVersion: string = 'npm install -g @angular/cli@10.2.3'
  public uninstallAngular: string = 'npm uninstall -g @angular/cli'
  public cleanCache: string = 'npm cache clean --force'

  constructor() {}

  ngOnInit(): void {
    
  }

  public onClick(installAngular: string) {
    navigator.clipboard.writeText(installAngular);
  }

}
