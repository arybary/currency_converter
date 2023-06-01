import { Currency } from '../model/currency.model';

export const apiUrlNBU =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export const currencyUah: Currency = {
  r030: 980,
  txt: 'Українська гривня',
  rate: 1,
  cc: 'UAH',
  exchangedate: new Date(),
};

export const currencyForHeader={fist:'EUR',second:"USD"};

export const meContacts=[
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
