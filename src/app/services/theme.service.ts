import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  public theme: Theme = 'dark-mode';

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initializeTheme() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(this.document.body, 'dark-mode');
    } 
  };

  switchTheme() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.classList.replace(this.theme, this.theme = (this.theme === 'dark-mode') ? 'light-mode' : 'dark-mode');
    }
  };

}

export type Theme = 'dark-mode' | 'light-mode';
