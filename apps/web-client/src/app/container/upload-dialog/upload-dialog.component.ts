import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Book } from 'epubjs';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'ebook-manager-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss'],
})
export class UploadDialogComponent implements AfterViewInit {
  @ViewChild('input') private inputRef!: ElementRef;

  public loading = false;
  public closed = false;
  private input: ElementRef['nativeElement'];

  constructor(
    private dialogRef: MatDialogRef<UploadDialogComponent>,
    private booksService: BooksService
  ) {}

  ngAfterViewInit() {
    this.input = this.inputRef.nativeElement;
  }

  openInputDialog() {
    if (!this.loading) this.input.click();
  }

  async convertToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error('Unable to read blob.'));
    });
  }

  async selectFile() {
    this.loading = true;
    try {
      const file = this.input.files[0];
      if (file.type !== 'application/epub+zip') throw new Error('Invalid file type.');
      // Read the book content.
      const book = new Book(file);
      await book.ready;
      const bookSrc = await this.convertToBase64(file);
      // Get cover.
      let coverSrc: string | undefined;
      const coverUrl = await book.coverUrl();
      if (coverUrl) {
        coverSrc = await fetch(coverUrl)
          .then((res) => { if (res.ok) return res.blob(); throw new Error('Invalid book cover.'); })
          .then((blob) => this.convertToBase64(blob));
      }
      // Get metadata.
      const metadata = await book.loaded.metadata;
      // Avoid adding duplicate books.
      const found = this.booksService.getBooks({ 'metadata.identifier': metadata.identifier }).length;
      // Save book in storage.
      if (!found) this.booksService.saveBook({ src: bookSrc, cover: coverSrc, metadata });
      this.dialogRef.close();
    } catch (error) { console.log(error); }
    this.loading = false;
  }
}
