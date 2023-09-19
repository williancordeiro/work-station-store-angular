import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ws-logo',
  templateUrl: './ws-logo.component.html',
  styleUrls: ['./ws-logo.component.css']
})

export class WsLogoComponent {
  isMobileScreen: boolean = false;

  constructor(private renderer: Renderer2) {
    this.screenCheck();
  }

  @HostListener('window:resize', ['&event'])
    onResize(event: any): void {
      this.screenCheck();
    }

  private screenCheck(): void {
    this.isMobileScreen = window.innerWidth < 678;
  }
}
