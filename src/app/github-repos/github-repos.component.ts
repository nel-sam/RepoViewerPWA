import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

interface Owner {
  login: string;
  avatar_url: string;
}

interface GitHubRepo {
  name: string;
  url: string;
  owner: Owner;
  description: string;
  language: string;
  fork: boolean;
}


@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})
export class GithubReposComponent implements OnInit {
  repos: GitHubRepo[];
  username: string;

  constructor(private githubService: GithubServiceService) { }

  ngOnInit() {
    this.getRepos('nel-sam');
  }

  public getRepos(username: string) {
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
        console.log(this.username);
        this.repos = data;
      });
  }

}
