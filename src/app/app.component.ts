import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { GithubService } from './github.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Repositórios do Github ';

  constructor(
    public githubService: GithubService,
    public bitcoinService: BitcoinService
  ) {}

  ngOnInit() {
    this.githubService.getAll();
    this.update();
  }

  getCurrentPrice() {
    return this.bitcoinService.currentPrice;
  }

  update() {
    this.bitcoinService.getAndUpdate();
  }
}
