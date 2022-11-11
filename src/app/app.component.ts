import { Component, VERSION } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Repositório do Github ';

  constructor(public githubService: GithubService) {}

  ngOnInit() {
    this.githubService.getAll();
  }
}
