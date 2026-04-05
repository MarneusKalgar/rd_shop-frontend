import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    paramsSerializer: params => {
      const search = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach(v => search.append(key, String(v)));
        } else if (value !== null && value !== undefined) {
          search.append(key, String(value));
        }
      });
      return search.toString();
    },
  }),
  tagTypes: ['Product', 'Order', 'User', 'Review'],
  endpoints: () => ({}),
});
