import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }
/*   @ViewChild('tabset') tabset: TabsetComponent; */

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser(+this.route.snapshot.params.id).subscribe((user: User) => {
      this.user = user;
      console.log(user);
    }, error => {
      this.alertify.error(error);
    });
  }
}
