import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  private sanitizer = inject(DomSanitizer);

  currentYear = new Date().getFullYear();
  newsletterEmail = '';
  subscribed = false;

  // Replace the coordinates/query in this URL with your actual Google Maps embed link
  mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7734608384935!2d104.8921565758969!3d11.568091344090753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095173761d4a53%3A0xcd09ff2f4d326e3f!2sSETEC%20Institute!5e0!3m2!1sen!2sus!4v1795536885441!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin'
  );

  shopLinks = [
    'Best Sellers',
    'Calm & Relax',
    'Warm & Cozy',
    'Fresh & Uplifting',
    'Gift Sets'
  ];

  companyLinks = [
    'Our Story',
    'Soy Wax & Care Guide',
    'Sustainability',
    'Shipping & Returns'
  ];

  onSubscribe(): void {
    if (this.newsletterEmail.trim()) {
      this.subscribed = true;
      this.newsletterEmail = '';
    }
  }
}
