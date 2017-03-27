import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName: string = '';
  serverCreated: boolean = false;
  servers = ['TestServer', 'TestServer2'];
  toggle = false;
  logs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClickButton() {
    this.toggle = !this.toggle;
    this.logs.push(new Date());
  }

  logDecor(value, isStyle = false) {
    let count = 0;
    for (let log in this.logs) {
      count += 1;
      if (this.logs[log] == value) {
        if (count > 4) {
          return isStyle ? 'green' : true;
        } else {
          return isStyle ? 'none' : false;
        }
      }
    }
  }


}
