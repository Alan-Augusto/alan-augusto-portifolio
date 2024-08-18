import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Profile, SocialLinks } from '../models/profile.model';
import { profile } from '../data/profile.data';
import { DomSanitizer } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private sanitizer = inject(DomSanitizer);
  private platformId = inject(PLATFORM_ID);

  data: Profile = profile;

  getProfile(): Profile|undefined {
    return this.data;
  }

  getProfileName(): string {
    return this.data?.name || '';
  }

  getProfileRole(): string {
    return this.data?.role || '';
  }

  getProfileDescription(): string {
    return this.data?.description || '';
  }

  getProfileImage(): string {
    return this.data?.image || '';
  }

  getProfileSocialLinks(): SocialLinks[] {
    // Sanitizar o SVG antes de retornar apenas no ambiente do navegador
    if (isPlatformBrowser(this.platformId) && this.data?.socialLinks) {
      this.data.socialLinks = this.data.socialLinks.map((link: SocialLinks) => {
        if (link.svg) {
          link.sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(link.svg);
        }
        return link;
      });
    }
    return this.data?.socialLinks || [];
  }

}
