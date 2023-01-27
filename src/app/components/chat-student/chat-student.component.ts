import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';

const SOCKET_ENDPOINT = `http://localhost:3000`;

@Component({
  selector: 'app-chat-student',
  templateUrl: './chat-student.component.html',
  styleUrls: ['./chat-student.component.css']
})
export class ChatStudentComponent implements OnInit {

  socket: any;
  message: string = '';

  constructor() { }

  ngOnInit(): void {
    this.setupSocketConnection();
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT, {
      reconnectionDelay: 1000,
      reconnection: true,
      reconnectionAttempts: 10,
      transports: ['websocket'],
      agent: false,
      upgrade: false,
      rejectUnauthorized: false
    });
    this.socket.on('message-broadcast', (data: string) => {
      if (data) {
        const element = document.createElement('li');
        element.innerHTML = data;
        element.style.background = '#1e3141';
        element.style.color = 'white';
        element.style.padding = '5px 10px';
        element.style.margin = '15px';
        element.style.textAlign = 'left';
        element.style.fontSize = '25px';
        document.getElementById('message-list')?.appendChild(element);
      }
    });
  }

  sendMsg() {
    this.socket.emit('message', this.message);
    const element = document.createElement('li');
    element.innerHTML = this.message;
    element.style.background = '#1e3141';
    element.style.color = 'white';
    element.style.padding = '5px 10px';
    element.style.margin = '15px';
    element.style.textAlign = 'right';
    element.style.fontSize = '25px';
    document.getElementById('message-list')?.appendChild(element);
    this.message = '';
    console.log("message : ", this.message);
  }

}
