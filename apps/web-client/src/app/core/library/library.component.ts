import { Component } from '@angular/core';

@Component({
  selector: 'ebook-manager-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent {

  books = [
    {
      title: 'Art of War',
      author: 'Sun Tzu',
      coverImage: 'https://m.media-amazon.com/images/I/71qbK90zBjL.jpg',
    },
    {
      title: 'The 48 Laws of Power',
      author: 'Robert Greene',
      coverImage: 'https://cdn.kobo.com/book-images/48827ce4-6c36-4e5b-949a-c642fc566dce/1200/1200/False/the-48-laws-of-power.jpg',
    },
    {
      title: 'On the Road',
      author: 'Jack Kerouac',
      coverImage: 'https://i.pinimg.com/originals/92/b6/c0/92b6c06203fedad753fdebefa2c62624.jpg',
    },
    {
      title: 'The Book of Five Rings',
      author: 'Miyamoto Musashi',
      coverImage: 'https://i5.walmartimages.com/asr/be1c0140-2601-4b93-9093-1e53f1e56180_1.c300dd63fe1ad8d003d65fea6e3724cd.jpeg',
    }
  ];

}
