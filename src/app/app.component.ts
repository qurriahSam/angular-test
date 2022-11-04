import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(HeaderComponent) header!: HeaderComponent;

  ngAfterViewInit() {
    this.header.title = 'Header';
  }
}
