import { Product, ProductsResponse } from '../types/product';

const API_BASE_URL = 'https://dummyjson.com';

export class ApiService {
    static async getAllProducts(): Promise<ProductsResponse> {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return response.json();
    }

    static async getProductById(id: string): Promise<Product> {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch product');
        }
        return response.json();
    }

    static async getProductsByCategory(category: string): Promise<ProductsResponse> {
        const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
        if (!response.ok) {
            throw new Error('Failed to fetch products by category');
        }
        return response.json();
    }

    static async searchProducts(query: string): Promise<ProductsResponse> {
        const response = await fetch(`${API_BASE_URL}/products/search?q=${query}`);
        if (!response.ok) {
            throw new Error('Failed to search products');
        }
        return response.json();
    }
}