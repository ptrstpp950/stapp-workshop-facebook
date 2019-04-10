import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from "src/app/shared/interfaces/user.interface";
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user:User = null;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setupPost();
  }

  private setupPost() {
    const postId = this.route.snapshot.params.userId;
    this.usersService.getUserById(postId)
      .subscribe({
        next: (response) => {
          this.user = response;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

}
