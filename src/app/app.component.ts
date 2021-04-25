import { Component } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrimeRateFE';
  hidden = false;

  isConnected = true;  
  noInternetConnection: boolean;  

  constructor(private connectionService: ConnectionService) {  
    this.connectionService.monitor().subscribe(isConnected => {  
      this.isConnected = isConnected;  
      if (this.isConnected) {  
        this.noInternetConnection=false;  
      }  
      else {  
        this.noInternetConnection=true;  
      }  
    })  
  }  

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
