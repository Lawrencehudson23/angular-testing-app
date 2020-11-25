import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servers',
	// template: ` <app-server></app-server>
	// 	<app-server></app-server>`,
	templateUrl: './servers.component.html',
	// styleUrls: ['./servers.component.css'],
	styles: [
		`
			.logBig {
				color: white;
			}
		`,
	],
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = 'No server was created!';
	serverName = 'TestServerName';
	username = '';
	serverCreated = false;
	servers = ['server 1', 'server 2'];
	togglePassword = false;
	list = [];
	counter = 0;

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000);
	}

	ngOnInit(): void {}

	onCreateServer() {
		this.serverCreated = true;
		this.servers.push(this.serverName);
		this.serverCreationStatus = 'Server was created!' + this.serverName;
	}

	onUpdateServerName(event: Event) {
		this.serverName = (<HTMLInputElement>event.target).value;
	}
	onCleanUsername() {
		this.username = '';
	}
	onClick() {
		this.togglePassword = !this.togglePassword;
		this.counter++;
		this.list.push(this.counter);
	}
}
