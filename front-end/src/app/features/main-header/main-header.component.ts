import { Component, computed, inject } from '@angular/core';
import { ThemeButtonComponent } from "../../features-components/theme-button/theme-button.component";
import { ProfileService } from '../../../services/profile.service';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [ThemeButtonComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {

  private profileService = inject(ProfileService);
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private headerService = inject(HeaderService);

  name = this.profileService.getProfileName();
  role = this.profileService.getProfileRole();
  description = this.profileService.getProfileDescription();
  image = this.profileService.getProfileImage();
  socialLinks = this.profileService.getProfileSocialLinks();
  isBrowser = isPlatformBrowser(this.platformId);

  visible = computed(() => this.headerService.visible);

  open(url:string, local?:boolean){
    if(local){
      this.router.navigate([url]);
    }else{
      window.open(url, '_blank');
    }
  }

}
