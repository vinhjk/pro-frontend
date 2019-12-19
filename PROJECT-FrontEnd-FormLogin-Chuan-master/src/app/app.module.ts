import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { BooksComponent } from './components/books/books.component';
import { BookAddComponent } from './components/books/book-add/book-add.component';
import { BookEditComponent } from './components/books/book-edit/book-edit.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { BookViewComponent } from './components/books/book-view/book-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    BooksComponent,
    BookAddComponent,
    BookEditComponent,
    BookListComponent,
    ViewbookComponent,
    BookViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
