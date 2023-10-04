import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';

@Component({
  selector: 'ebook-manager-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  constructor(public dialog: MatDialog) {}

  openUploadDialog() {
    this.dialog.open(UploadDialogComponent);
  }
}
