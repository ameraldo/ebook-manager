import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { ContainerComponent } from './container.component';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule, 
    RouterModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatButtonModule,
    MatListModule,
    MatMenuModule
  ],
})
export class ContainerModule {}
