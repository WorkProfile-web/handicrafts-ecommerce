import products from '@/data/products.json';
import ProductDetailClient from './ProductDetailClient';

// Generate static params for all product IDs
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage() {
  return <ProductDetailClient />;
}
