"use client"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

import Rating from "./stars"

type ProductInfoProps = {
  product: PricedProduct
}


const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 mt-5 ">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <h1 className="text-3xl font-bold text-start" data-testid="product-title">
          {product.title} 
          
        </h1>

         {<Text className="text-medium text-ui-fg-subtle" data-testid="product-description">
          {product.description} 
        </Text> } 
        <Rating rating={"3.4"} reviewNumbers={"200"} />
      </div>
    </div>
  )
}

export default ProductInfo
