import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent
  ],
  exports: [
    PostListItemComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
