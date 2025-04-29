import { Component } from '@angular/core';
import { environment } from '@environments/environment';


@Component({
  selector: 'gifs-side-menu-header',
  imports: [],
  templateUrl: './gifs-side-menu-header.component.html',
  styleUrl: './gifs-side-menu-header.component.css',
})
export default class GifsSideMenuHeaderComponent {
  envs = environment;
}
