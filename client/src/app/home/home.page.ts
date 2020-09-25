import { Component, HostListener } from '@angular/core';
import { CommonsService } from 'ngxi4-dynamic-service';
import { SocketService } from 'ngxi4-socket-client';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isMobile: boolean = false;
  socketConnection: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = event.target.innerWidth < 576;
  }

  constructor(
    private apiCommon: CommonsService
    , private apiSocket: SocketService
  ) { this.init() }

  init() {
    this.isMobile = this.apiCommon.isMobile()
    this.socketConnection = this.apiSocket.getConnection();
  }

  onClickUser() {
    if (this.socketConnection.userInfo) {
      // hiển thị thông tin của userInfo đã kết nối vào
      // view form chứa user info này
      // console.log('Thông tin user', this.socketConnection.userInfo);
      // gửi lệnh lên server kiểm tra có bao nhiêu socket đang nối với user này
      // ở những máy tính nào
      this.apiSocket.sendSocketIo("client-req-command", { command: "GET-MY-USER" })
    } else {
      this.apiSocket.sendSocketIo("client-req-command", { command: "LOGIN" })
      console.log('Thông tin connection', this.socketConnection);
    }
  }

  onClickDevice() {
    if (this.socketConnection.device_online) {
      // hiển thị thông tin của userInfo đã kết nối vào
      // view form chứa user info này
      // console.log('Thông tin thiết bị', this.socketConnection.device_id);
      // gửi thông tin lên máy chủ, xem có bao nhiêu socket đang dùng bộ key với device_id này
      // máy chủ trả về form thông tin thiết bị đang nối ở những device nào
      this.apiSocket.sendSocketIo("client-req-command", { command: "GET-MY-DEVICE" })
    }
  }


}
