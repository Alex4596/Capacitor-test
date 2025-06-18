import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Preferences } from '@capacitor/preferences'; // Capacitor Storage API (renamed from Storage)
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true, // optional: only if using standalone components
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  name: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const { value } = await Preferences.get({ key: 'name' });
      this.name = value || '';
    }
  }

  async saveName(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      await Preferences.set({ key: 'name', value: this.name });
      alert('Name saved!');
    }
  }
}

