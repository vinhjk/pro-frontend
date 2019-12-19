import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksService} from '../../../services/book.service';
import {Subscription} from 'rxjs';
import {BooksModels} from '../../../model/books.models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public booksmodels: BooksModels[] = [];
  constructor(
    public booksService: BooksService) { }

  ngOnInit() {
    this.subscription =  this.booksService.getAllBooks().subscribe(data => {
      this.booksmodels = data;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onDeleteBook(id: number) {
    this.subscription =  this.booksService.deleteBook(id).subscribe(data => {
      this.updateDataAfterDelete(id);
    });
  }
  updateDataAfterDelete(id: number) {
    for (let i = 0; i < this.booksmodels.length; i++) {
      if (this.booksmodels[i].id === id) {
        this.booksmodels.splice(i, 1);
        break;
      }
    }
  }

}
