interface LocalizedLabel {
  name: string;
  nameEn: string;
  nameUk: string;
}

export const COUNTRY_LABELS = Object.freeze<Record<string, LocalizedLabel>>({
  CN: { name: 'China', nameEn: 'China', nameUk: 'Китай' },
  CH: { name: 'Switzerland', nameEn: 'Switzerland', nameUk: 'Швейцарія' },
  DE: { name: 'Germany', nameEn: 'Germany', nameUk: 'Німеччина' },
  GB: { name: 'United Kingdom', nameEn: 'United Kingdom', nameUk: 'Велика Британія' },
  JP: { name: 'Japan', nameEn: 'Japan', nameUk: 'Японія' },
  KR: { name: 'South Korea', nameEn: 'South Korea', nameUk: 'Південна Корея' },
  TW: { name: 'Taiwan', nameEn: 'Taiwan', nameUk: 'Тайвань' },
  US: { name: 'United States', nameEn: 'United States', nameUk: 'США' },
});

export const BRAND_OPTIONS = Object.freeze<Record<string, LocalizedLabel>>({
  Amazon: { name: 'Amazon', nameEn: 'Amazon', nameUk: 'Amazon' },
  Anker: { name: 'Anker', nameEn: 'Anker', nameUk: 'Anker' },
  Apple: { name: 'Apple', nameEn: 'Apple', nameUk: 'Apple' },
  ASUS: { name: 'ASUS', nameEn: 'ASUS', nameUk: 'ASUS' },
  Belkin: { name: 'Belkin', nameEn: 'Belkin', nameUk: 'Belkin' },
  Bose: { name: 'Bose', nameEn: 'Bose', nameUk: 'Bose' },
  CalDigit: { name: 'CalDigit', nameEn: 'CalDigit', nameUk: 'CalDigit' },
  Canon: { name: 'Canon', nameEn: 'Canon', nameUk: 'Canon' },
  Corsair: { name: 'Corsair', nameEn: 'Corsair', nameUk: 'Corsair' },
  Dell: { name: 'Dell', nameEn: 'Dell', nameUk: 'Dell' },
  DJI: { name: 'DJI', nameEn: 'DJI', nameUk: 'DJI' },
  Elgato: { name: 'Elgato', nameEn: 'Elgato', nameUk: 'Elgato' },
  EZOPower: { name: 'EZOPower', nameEn: 'EZOPower', nameUk: 'EZOPower' },
  Fitbit: { name: 'Fitbit', nameEn: 'Fitbit', nameUk: 'Fitbit' },
  Focusrite: { name: 'Focusrite', nameEn: 'Focusrite', nameUk: 'Focusrite' },
  Garmin: { name: 'Garmin', nameEn: 'Garmin', nameUk: 'Garmin' },
  GoPro: { name: 'GoPro', nameEn: 'GoPro', nameUk: 'GoPro' },
  Google: { name: 'Google', nameEn: 'Google', nameUk: 'Google' },
  HP: { name: 'HP', nameEn: 'HP', nameUk: 'HP' },
  Lenovo: { name: 'Lenovo', nameEn: 'Lenovo', nameUk: 'Lenovo' },
  LG: { name: 'LG', nameEn: 'LG', nameUk: 'LG' },
  Logitech: { name: 'Logitech', nameEn: 'Logitech', nameUk: 'Logitech' },
  Microsoft: { name: 'Microsoft', nameEn: 'Microsoft', nameUk: 'Microsoft' },
  Mophie: { name: 'Mophie', nameEn: 'Mophie', nameUk: 'Mophie' },
  OnePlus: { name: 'OnePlus', nameEn: 'OnePlus', nameUk: 'OnePlus' },
  'Rain Design': { name: 'Rain Design', nameEn: 'Rain Design', nameUk: 'Rain Design' },
  Razer: { name: 'Razer', nameEn: 'Razer', nameUk: 'Razer' },
  Samsung: { name: 'Samsung', nameEn: 'Samsung', nameUk: 'Samsung' },
  SanDisk: { name: 'SanDisk', nameEn: 'SanDisk', nameUk: 'SanDisk' },
  Sony: { name: 'Sony', nameEn: 'Sony', nameUk: 'Sony' },
  Spigen: { name: 'Spigen', nameEn: 'Spigen', nameUk: 'Spigen' },
  WD: { name: 'WD', nameEn: 'WD', nameUk: 'WD' },
});

export const PRICE_BOUNDS = Object.freeze({ min: 19, max: 2500 });

export const PAGE_SIZE = 4;
