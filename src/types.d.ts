import { ShippingOption } from "@medusajs/medusa";

export declare module "@medusajs/medusa/dist/models/product" {
  declare interface Product {
    shipping_options: ShippingOption[];
  }
}
export declare module "@medusajs/medusa/dist/models/order" {
  interface Order {
    store_id: string;
    store: Store;

    parent_id: string | null;
    parent: Order | null;

    children: Order[] | null;
  }
}
