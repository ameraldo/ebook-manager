import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerModule } from './container/container.module';
import { CoreModule } from './core/core.module';

@Component({
  standalone: true,
  imports: [ContainerModule, CoreModule, RouterModule],
  selector: 'ebook-manager-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-client';
}
