import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';

import {BooksComponent} from './components/books/books.component';
import {BookListComponent} from './components/books/book-list/book-list.component';
import {BookEditComponent} from './components/books/book-edit/book-edit.component';
import {BookAddComponent} from './components/books/book-add/book-add.component';
import {BookViewComponent} from './components/books/book-view/book-view.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'pm',
    component: PmComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BooksComponent,
    children : [
      {
        path : '',
        component : BookListComponent
      },
      {
        path : ':id/edit',
        component : BookEditComponent
      },
      {
        path : 'add',
        component : BookAddComponent
      },
      {
        path: ':id/views',
        component : BookViewComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
