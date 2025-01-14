import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import Rating from "./stars"
export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div data-testid="product-wrapper" className="text-center md:text-start py-4 px-4 space-y-2">
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="square"
          isFeatured={isFeatured}
          
        />
        {/* <div className="flex txt-compact-medium  justify-between bg-red-300 mt-2"> */}
        <div className="text-center md:text-start py-4 px-4 space-y-2  mt-0 mb-0">
          <Text className="text-base font-semibold line-clamp-1" data-testid="product-title">{productPreview.title}</Text>
          <div><Rating rating={"3.4"} reviewNumbers={"200"} /></div>
          <div className="font-semibold text-[#2d2d2d] text-[18px]">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
