"use client"
import { useState } from "react";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Text } from "@medusajs/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import Head from "next/head";

type ProductInfoProps = {
  product: PricedProduct;
};

const ProductDescription = ({ product }: ProductInfoProps) => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabChange = (tab: string) => {
    if (tab === "description") {
      setActiveTab(tab);
    }
  };

  return (
    <div id="product-info">
      <Head>
        <title>Product Description - {product.title}</title>
        <meta
          name="description"
          content={`Learn more about ${product.title}, including features and details.`}
        />
      </Head>

      <div className="content-container py-8 px-14">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}

        <h1 className="text-3xl font-bold" data-testid="product-title">
          {product.title}
        </h1>

        {/* Product Description Heading */}
        <h4 className="text-2xl font-bold mt-6">Product Description</h4>

        {/* Tab Navigation */}
        <div className="tabs flex justify-start mt-4 space-x-4">
          <button
            className={`font-semibold ${
              activeTab === "description"
                ? "text-purple-600 border-b-2 border-purple-600"
                : ""
            }`}
            onClick={() => handleTabChange("description")}
          >
            Description
          </button>
          <button className="text-gray-400 cursor-not-allowed relative" disabled>
            Comments
          </button>
          <button className="text-gray-400 cursor-not-allowed relative" disabled>
            Questions & Answers
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content mt-6">
          {activeTab === "description" && (
            <Text className="text-medium text-ui-fg-subtle" data-testid="product-description">
              <p>{product.description}</p>
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
