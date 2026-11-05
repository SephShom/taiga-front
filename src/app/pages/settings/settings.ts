import { Component, signal } from '@angular/core';
import {
  TuiButton,
  TuiIcon,
  TuiTitle,
  TuiInput,
  TuiTextfield,
} from '@taiga-ui/core';
import { TuiSelect, TuiDataListWrapper, TuiChevron } from '@taiga-ui/kit';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { FormsModule } from '@angular/forms';

export interface Profile {
  name: string;
  email: string;
  role: string;
  timezone: string;
  language: string;
}

@Component({
  standalone: true,
  imports: [
    FormsModule,
    TuiButton,
    TuiIcon,
    TuiHeader,
    TuiTitle,
    TuiInput,
    TuiTextfield,
    TuiSelect,
    TuiDataListWrapper,
    TuiChevron,
    TuiCardLarge,
  ],
  selector: 'app-settings',
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  protected readonly profile = signal<Profile>({
    name: 'Alex Inkin',
    email: 'alex@example.com',
    role: 'Product Designer',
    timezone: 'Europe/Berlin',
    language: 'en',
  });

  protected readonly notifications = signal(true);
  protected readonly newsletter = signal(false);
  protected readonly darkMode = signal(false);

  protected readonly timezones = signal([
    { label: 'UTC', value: 'UTC' },
    { label: 'Europe/Berlin', value: 'Europe/Berlin' },
    { label: 'America/New_York', value: 'America/New_York' },
    { label: 'Asia/Tokyo', value: 'Asia/Tokyo' },
    { label: 'Australia/Sydney', value: 'Australia/Sydney' },
  ]);

  protected readonly languages = signal([
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'German', value: 'de' },
    { label: 'French', value: 'fr' },
  ]);

  protected readonly stringifyTz = (item: { label: string; value: string }) =>
    item.label;
  protected readonly stringifyLang = (item: {
    label: string;
    value: string;
  }) => item.label;

  protected reset(): void {
    this.profile.set({
      name: 'Alex Inkin',
      email: 'alex@example.com',
      role: 'Product Designer',
      timezone: 'Europe/Berlin',
      language: 'en',
    });
    this.notifications.set(true);
    this.newsletter.set(false);
    this.darkMode.set(false);
  }

  protected save(): void {
    // In a real app this would call a service/API
    console.log('Settings saved:', this.profile());
  }
}
