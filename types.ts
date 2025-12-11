export interface ProductAttribute {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  ingredientsText: string;
  usage: string;
  attributes: ProductAttribute[];
  imageQuery: string; // Used to fetch relevant Unsplash image
  imageUrl?: string; // Direct override if needed
}

export interface ProductCategory {
  title: string;
  products: Product[];
}