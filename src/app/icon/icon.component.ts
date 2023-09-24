import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  isMobileScreen: boolean;

  constructor(renderer: Renderer2) {
    this.screenCheck();
    this.isMobileScreen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenCheck();
  }

  private screenCheck(): void {
    this.isMobileScreen= window.innerWidth < 568;
  }
}
