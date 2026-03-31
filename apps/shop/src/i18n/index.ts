import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enProducts from './locales/en/products.json';
import enCart from './locales/en/cart.json';
import enOrders from './locales/en/orders.json';
import enAuth from './locales/en/auth.json';
import enProfile from './locales/en/profile.json';

import ukCommon from './locales/uk/common.json';
import ukHome from './locales/uk/home.json';
import ukProducts from './locales/uk/products.json';
import ukCart from './locales/uk/cart.json';
import ukOrders from './locales/uk/orders.json';
import ukAuth from './locales/uk/auth.json';
import ukProfile from './locales/uk/profile.json';

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    products: enProducts,
    cart: enCart,
    orders: enOrders,
    auth: enAuth,
    profile: enProfile,
  },
  uk: {
    common: ukCommon,
    home: ukHome,
    products: ukProducts,
    cart: ukCart,
    orders: ukOrders,
    auth: ukAuth,
    profile: ukProfile,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home', 'products', 'cart', 'orders', 'auth', 'profile'],
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

export default i18n;
