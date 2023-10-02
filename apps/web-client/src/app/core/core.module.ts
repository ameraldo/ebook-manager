import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
// Import the Angular Material modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { RatingComponent } from '../shared/rating/rating.component';

import { LibraryComponent } from './library/library.component';
import { BookComponent } from './book/book.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  imports: [
    CommonModule,
    RatingComponent,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
  ],
  declarations: [LibraryComponent, BookComponent, SettingsComponent],
  exports: [LibraryComponent],
})
export class CoreModule {}
