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
