import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = '';
  currentTime = '';

  ngOnInit(): void {
    this.loadName();
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  async loadName() {
    const { value } = await Storage.get({ key: 'name' });
    this.name = value || '';
  }

  updateTime() {
    this.currentTime = new Date().toLocaleString();
  }
}
