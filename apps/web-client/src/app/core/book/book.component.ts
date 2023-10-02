import { Component, OnInit } from '@angular/core';
import { Book } from 'epubjs';

@Component({
  selector: 'ebook-manager-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  book = {
    id: 4,
    title: 'The Book of Five Rings',
    author: 'Miyamoto Musashi',
    coverImage: 'https://i5.walmartimages.com/asr/be1c0140-2601-4b93-9093-1e53f1e56180_1.c300dd63fe1ad8d003d65fea6e3724cd.jpeg',
  };


  ngOnInit() {
    this.getBookContent();
  }

  async getBookContent() {
    try {
      const buffer = await fetch('https://archive.org/download/TheArtOfWarBySunTzu/ArtOfWar.epub')
      .then((response) => {
        if (!response.ok) throw new Error('Couldn\'t fetch book content.');
        return response.arrayBuffer();
      });

      const book = new Book(buffer as any);
      const rendition = book.renderTo('book-area', { flow: 'scrolled-doc', width: 800, height: 600 });
      rendition.display();

      console.log(book);

    } catch (error) { console.log(error); }
  }
}
