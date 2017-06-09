import { Component } from '@angular/core';
import {ServersService} from "./servers.service";
import {Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = this.sService.getAppName();
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private sService: ServersService) {

  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSave() {
    this.sService.storeServers(this.servers).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  onGet() {
    this.sService.getServers().subscribe((servers: any[]) => this.servers = servers, (error) => {
      console.log(error);
    });
  }
}
