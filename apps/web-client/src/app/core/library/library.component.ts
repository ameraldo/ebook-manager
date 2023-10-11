import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ebook-manager-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit, OnDestroy {

  public books: any[] = [];
  public subscription: Subscription;

  constructor(private router: Router, private booksService: BooksService) {
    this.subscription = this.booksService.observable.subscribe((book) => {
      if (book) this.books.push(book);
    });
  }

  ngOnInit(): void { this.books = this.booksService.getBooks(); }
  ngOnDestroy(): void { this.subscription.unsubscribe(); }

  viewBook(id: number) { this.router.navigate([`/book/${id}`]); }
}
