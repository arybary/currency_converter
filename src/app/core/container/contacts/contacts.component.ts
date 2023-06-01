import { ChangeDetectionStrategy, Component } from '@angular/core';
import { meContacts } from '../../constans';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
  public readonly contacts = meContacts
}
