export type ProductCategory =
  | "pizza"
  | "frais"
  | "surgele"
  | "fond";

export type Product = {
  id: string;
  sku: string;
  category: ProductCategory;
  name: string;
  subtitle: string;
  price: number;
  unit: string;
  image: string;
};