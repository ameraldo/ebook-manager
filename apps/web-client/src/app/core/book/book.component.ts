import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Book } from 'epubjs';
import { BooksService } from '../../services/books.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ebook-manager-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  private paramsSubscription: Subscription;
  private id: string;
  public book: any;

  constructor(private router: Router, private route: ActivatedRoute, private booksService: BooksService) {}

  ngOnInit() {
    this.paramsSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') as string;
      this.book = this.booksService.getBook(this.id);
      if (!this.book) this.router.navigate(['/library']);
      else this.render();
    });
  }
  ngOnDestroy(): void { if (this.paramsSubscription) this.paramsSubscription.unsubscribe(); }

  async render() {
    try {
      const src = await fetch(this.book.src).then(res => res.arrayBuffer());
      const book = new Book(src as any);
      const rendition = book.renderTo('book-area', { flow: 'scrolled-doc', width: 800, height: 600 });
      rendition.display();
    } catch (error) { console.log(error); }
  }
}
