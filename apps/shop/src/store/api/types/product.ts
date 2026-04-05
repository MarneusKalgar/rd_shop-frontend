export const ProductCategory = {
  ACCESSORIES: 'accessories',
  AUDIO: 'audio',
  CAMERAS: 'cameras',
  LAPTOPS: 'laptops',
  MONITORS: 'monitors',
  OTHER: 'other',
  PERIPHERALS: 'peripherals',
  SMARTPHONES: 'smartphones',
  STORAGE: 'storage',
  TABLETS: 'tablets',
  WEARABLES: 'wearables',
} as const;

export type ProductCategory = (typeof ProductCategory)[keyof typeof ProductCategory];

export const ProductSortBy = {
  CREATED_AT: 'createdAt',
  PRICE: 'price',
  TITLE: 'title',
} as const;

export type ProductSortBy = (typeof ProductSortBy)[keyof typeof ProductSortBy];

export const SortOrder = {
  ASC: 'ASC',
  DESC: 'DESC',
} as const;

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

export interface ProductCategoryItem {
  name: ProductCategory;
  nameEn: string;
  nameUk: string;
}

export interface ProductImage {
  contentType: string;
  createdAt: string;
  id: string;
  key: string;
  url: string | null;
}

export interface Product {
  averageRating: number | null;
  brand: string | null;
  category: ProductCategory;
  country: string | null;
  createdAt: string;
  description: string | null;
  id: string;
  images?: ProductImage[];
  isActive: boolean;
  mainImageId: string | null;
  mainImageUrl: string | null;
  price: string;
  reviewsCount: number;
  stock: number;
  title: string;
  updatedAt: string;
}

export interface ReviewUser {
  id: string;
  firstName: string | null;
  lastName: string | null;
}

export interface ProductReview {
  id: string;
  productId: string;
  rating: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  user: ReviewUser;
}

export interface ProductsListResponse {
  data: Product[];
  limit: number;
  nextCursor: string | null;
}

export interface ProductCategoriesResponse {
  data: ProductCategoryItem[];
}

export interface ReviewsListResponse {
  data: ProductReview[];
  limit: number;
  nextCursor: string | null;
}

export interface GetProductsArgs {
  brand?: string[];
  categories?: ProductCategory[];
  country?: string[];
  cursor?: string;
  isActive?: boolean;
  limit?: number;
  maxPrice?: string;
  minPrice?: string;
  search?: string;
  sortBy?: ProductSortBy;
  sortOrder?: SortOrder;
}

export interface GetReviewsArgs {
  productId: string;
  cursor?: string;
  limit?: number;
}
