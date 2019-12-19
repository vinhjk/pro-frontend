import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BooksModels} from '../model/books.models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public API = 'http://localhost:8080/api/auth/employee/';
  constructor(private httpClient: HttpClient) { }
  getAllBooks(): Observable<BooksModels[]> {
    return this.httpClient.get<BooksModels[]>(this.API);
  }
  addBooks(booksmodels: BooksModels): Observable<BooksModels> {
    return this.httpClient.post<BooksModels>(this.API , booksmodels);
  }
  deleteBook(id: number): Observable<BooksModels> {
    return this.httpClient.delete<BooksModels>(this.API  + id);
  }
  updateBook(book: BooksModels): Observable<BooksModels> {
    return this.httpClient.put<BooksModels>(this.API + book.id , book);
  }
  getBook(id: number): Observable<BooksModels> {
    return this.httpClient.get<BooksModels> (this.API + id);
  }
}
