import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BooksModels} from '../../../model/books.models';
import {BooksService} from '../../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public booksmodels: BooksModels;
  public subscriptionParams: Subscription;
  constructor(
    public booksService: BooksService,
    public routerService: Router,
    public activateRouteService: ActivatedRoute) { }

  ngOnInit() {
    this.booksmodels = new BooksModels();
    this.viewData();
  }
  viewData() {
    this.subscriptionParams = this.activateRouteService.params.subscribe(data  => {
      const i = data.id;
      this.subscription = this.booksService.getBook(i).subscribe((booksmodels: BooksModels) => {
        this.booksmodels = booksmodels;
        // this.routerService.navigateByUrl('booksmodels');
      });
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
