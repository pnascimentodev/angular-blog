import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {
    ngSkipHydration: 'true'
  }
})
export class AppComponent {
  title = 'angular-blog-dio';
}
