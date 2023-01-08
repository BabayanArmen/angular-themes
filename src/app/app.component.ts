import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'themes';

  // public theme: Theme = 'dark-mode';

  constructor(
    private themeService: ThemeService,
    // @Inject(DOCUMENT) private document: Document,
    // private renderer: Renderer2,
    // @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit(): void {
    this.initializeTheme();
  }

  initializeTheme() {
    this.themeService.initializeTheme();
    // if (isPlatformBrowser(this.platformId)) {
    //   this.renderer.addClass(this.document.body, 'dark-mode');
    // }
  }

  switchTheme() {
    this.themeService.switchTheme();
    // if (isPlatformBrowser(this.platformId)) {
    //   this.document.body.classList.replace(this.theme, this.theme = (this.theme === 'dark-mode') ? 'light-mode' : 'dark-mode');
    // }
  }
}

// export type Theme = 'dark-mode' | 'light-mode';