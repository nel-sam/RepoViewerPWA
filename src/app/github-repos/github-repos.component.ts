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

  constructor(private githubService: GithubServiceService) { }

  ngOnInit() {
    this.githubService.getRepos('nel-sam')
      .subscribe((data: GitHubRepo[]) => {
        this.repos = data;
      });
  }

}
