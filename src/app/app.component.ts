import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor (@Inject(DOCUMENT) private document) { }
  ngOnInit() {
    let brands = ['brand-c/brand-c.css', 'brand-d/brand-d.css', 'brand-e/brand-e.css']
    let x:number = Math.floor(Math.random() * 3);
    this.document.getElementById('brandcss').setAttribute('href', 'assets/brands/' + brands[x]);
    this.ready = true;
  }
  ready = false;
  title = 'app works!';
}
