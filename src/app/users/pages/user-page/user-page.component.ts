import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from "src/app/shared/interfaces/user.interface";
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {

  user:User = null;
  error = null;

  destroy$ = new Subject();

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setupPost();
  }

  ngOnDestroy() {
    this.destroy$.next(null);
  }

  private setupPost() {
    const postId = this.route.snapshot.params.userId;
    this.usersService.getUserById(postId)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) => {
          this.user = response;
        },
        error: (err) => {
          this.user = null;
          this.error = err;
          console.log("----errr-r");
        }
      });
  }

}
