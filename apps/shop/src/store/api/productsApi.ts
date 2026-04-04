import { baseApi } from './baseApi';
import type {
  GetProductsArgs,
  Product,
  ProductCategoriesResponse,
  ProductsListResponse,
} from './types/product';

export const productsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProducts: build.query<ProductsListResponse, GetProductsArgs>({
      query: args => ({
        url: '/products',
        params: args,
      }),
      providesTags: ['Product'],
    }),
    getProductById: build.query<{ data: Product }, string>({
      query: id => `/products/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Product', id }],
    }),
    getProductsCategories: build.query<ProductCategoriesResponse, void>({
      query: () => '/products/categories',
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useGetProductsCategoriesQuery } =
  productsApi;
