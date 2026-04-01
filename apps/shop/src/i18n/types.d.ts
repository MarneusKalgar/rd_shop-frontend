import 'i18next';

import type enCommon from './locales/en/common.json';
import type enHome from './locales/en/home.json';
import type enProducts from './locales/en/products.json';
import type enCart from './locales/en/cart.json';
import type enOrders from './locales/en/orders.json';
import type enAuth from './locales/en/auth.json';
import type enProfile from './locales/en/profile.json';
import type enSearch from './locales/en/search.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof enCommon;
      home: typeof enHome;
      products: typeof enProducts;
      cart: typeof enCart;
      orders: typeof enOrders;
      auth: typeof enAuth;
      profile: typeof enProfile;
      search: typeof enSearch;
    };
  }
}
