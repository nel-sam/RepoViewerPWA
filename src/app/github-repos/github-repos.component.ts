import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

interface Owner {
  login: string;
  avatar_url: string;
}

interface GitHubRepo {
  name: string;
  url: string;
  owner: Owner;
  description: string;
  fork: boolean;
}


@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})
export class GithubReposComponent implements OnInit {
  repos: GitHubRepo[];
  username = 'nel-sam';

  constructor(private githubService: GithubServiceService) { }

  ngOnInit() {
    this.getRepos('nel-sam');
  }

  public getRepos(username: string) {
    console.log(username);

    if (username == null || username.length === 0) {
      return;
    }

    this.githubService.getRepos(username)
      .subscribe((data: GitHubRepo[]) => {
        this.repos = data;
      });
  }

  public onSearchButtonClick() {
    this.githubService.getRepos(this.username)
      .subscribe((data: GitHubRepo[]) => {
        this.repos = data;
      });
  }

}
