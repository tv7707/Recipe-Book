import { Component } from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {Response} from '@angular/http';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
 templateUrl: './header.component.html',
})


export class HeaderComponent {
  constructor(private dataService : DataStorageService,
              private authService: AuthService) {}

  onSave() {
    this.dataService.storeRecipes().
    subscribe(
      (response: Response) => {console.log(response);}
    );
  }

  onFetch() {
    this.dataService.getRecipes();
  }

  // Logout Method
  onLogout() {
    this.authService.logout();
  }

}

