import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.sass'],
  standalone: true,
  imports: [
    MatToolbarModule
  ]
})
export class HeaderLayoutComponent {

}
