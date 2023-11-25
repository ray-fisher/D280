import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WorldComponent } from "./world/world.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, WorldComponent]
})
export class AppComponent {
  title = 'D280';
}
