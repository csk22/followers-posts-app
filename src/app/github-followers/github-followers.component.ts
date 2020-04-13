import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GithubFollowersService } from './../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];
  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(switchMap(combined => {
      const id = combined[0].get['id'];
      const page = combined[0].get['page'];
      return this.service.getAll();
    }))
    .subscribe(followers => this.followers = (<any[]> followers));
  }

}
