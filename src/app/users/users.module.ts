import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UserPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
