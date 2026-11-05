import { Component, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Lang = 'en' | 'es';

const LANGUAGES: Array<{ code: Lang; label: string }> = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

@Component({
  selector: 'app-language-switcher',
  imports: [],
  template: `
    <div class="language-switcher" role="group" aria-label="Select language">
      @for (lang of languages(); track lang.code) {
        <button
          [class.active]="currentLang() === lang.code"
          (click)="setLang(lang.code)"
          type="button"
          [attr.aria-pressed]="currentLang() === lang.code"
        >
          {{ lang.label }}
        </button>
      }
    </div>
  `,
  styles: `
    .language-switcher {
      display: flex;
      gap: 0.5rem;
    }
    button {
      padding: 0.4rem 0.8rem;
      border: 1px solid #d1d5db;
      border-radius: 0.5rem;
      background: #ffffff;
      color: #111827;
      cursor: pointer;
      font-size: 0.875rem;
    }
    button:active {
      background: #f3f4f6;
    }
    button.active {
      border-color: #2563eb;
      background: #dbeafe;
      color: #1d4ed8;
    }
  `,
})
export class LanguageSwitcher {
  private readonly translate = inject(TranslateService);
  protected readonly languages = signal(LANGUAGES);
  protected readonly currentLang = signal<Lang>(
    (this.translate.currentLang ?? 'en') as unknown as Lang,
  );

  constructor() {
    this.translate.onLangChange.subscribe(({ lang }) => {
      this.currentLang.set((lang ?? 'en') as unknown as Lang);
    });
  }

  setLang(lang: Lang): void {
    this.translate.use(lang);
    this.currentLang.set(lang);
  }
}
