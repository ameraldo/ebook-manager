import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Book, Query as StorageQuery } from '@ebook-manager/storage';
import { storage } from '../app.globals';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private subject = new Subject<Book>();
  public observable: Observable<Book> = this.subject.asObservable();

  public getBooks(query?: StorageQuery): Book[] {
    return storage.find(query);
  }

  public getBook(id: string): Book {
    return storage.get(id);
  }

  public saveBook(book: Book): void {
    const savedBook = storage.save(book);
    this.subject.next(savedBook);
  }
}
