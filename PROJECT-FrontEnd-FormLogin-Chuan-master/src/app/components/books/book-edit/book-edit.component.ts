import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BooksModels} from '../../../model/books.models';
import {BooksService} from '../../../services/book.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public booksmodels: BooksModels;
  public subscriptionParams: Subscription;

  constructor(
    public booksService: BooksService,
    public routerService: Router,
    public activateRouteService: ActivatedRoute
  ) { }

  ngOnInit() {
    this.booksmodels = new BooksModels();
    this.loadData();
  }
  loadData() {
    this.subscriptionParams = this.activateRouteService.params.subscribe(data  => {
      const i = data.id;
      this.subscription = this.booksService.getBook(i).subscribe((booksmodels: BooksModels) => {
        this.booksmodels = booksmodels;
      });
    });
  }
  onEditBooks() {
    this.subscription = this.booksService.updateBook(this.booksmodels).subscribe(data => {
      this.routerService.navigateByUrl('booksmodels');
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParams) {
      this.subscriptionParams.unsubscribe();
    }
  }

}
