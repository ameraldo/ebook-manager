import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
// Import the Angular Material modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { LibraryComponent } from './library/library.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [CommonModule, LayoutModule, MatGridListModule, MatCardModule],
  declarations: [LibraryComponent, SettingsComponent],
  exports: [LibraryComponent],
})
export class CoreModule {}
