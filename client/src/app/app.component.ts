import { Component } from '@angular/core';
import { SocketService } from 'ngxi4-socket-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private apiSocket: SocketService
  ) { this.init() }

  init() {
    this.apiSocket.init(
      environment.SERVER_SOCKET
      , environment.SERVER_SOCKET_PATH
      , environment.SERVER_SOCKET_PING
      , environment.SERVER_SOCKET_TIMEOUT
      , environment.SERVER_SOCKET_DELAY
      , environment.SERVER_SOCKET_DELAYMAX
      , environment.APP_NAME
    )
  }

}
