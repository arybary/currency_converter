import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
  public readonly contacts = [
    { icon: 'telegram', label: 'Telegram', url: 'http://t.me/arybary' },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rostislav-medvid-9584081a2/',
    },
    { icon: 'mail', label: 'Email', url: 'mailto:medvidrostislav@gmail.com' },
    { icon: 'call', label: '+38-(063)-767-17-74',url:"tel:+380637671774"},
    {
      icon: 'folder',
      label: 'Resume',
      url: 'https://docs.google.com/document/d/1UPVi2a9BNfme9zNLBeGaL41hKIwaAwfiADpX5A8pYIY/edit#',
    },
  ];
}
