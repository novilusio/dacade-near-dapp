
import { Product, listedProducts } from "./model";


//3.1 Write Function

export function setProduct(product: Product): void {
   let storedProduct = listedProducts.get(product.id);
   if (storedProduct !== null) {
       throw new Error ('a product with ${product.id} alredy exists');
   }
   listedProducts.set(product.id, Product.fromPayload(product));
}

//3.2 Read Function

export function getProduct(id:string): Product | null {
    return listedProducts.get(id);
}

export function getProducts(): Product[] {
    return listedProducts.values();
}