import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//This function will keep track of tabs.
export class AppComponent {
  loadedFeature = 'receipe'; // Loaded with pre value.
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
