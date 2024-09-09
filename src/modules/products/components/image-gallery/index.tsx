"use client"

import { Image as MedusaImage } from "@medusajs/medusa";
import { Container } from "@medusajs/ui";
import Image from "next/image";
import { useState, useRef } from "react";

type ImageGalleryProps = {
  images: MedusaImage[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [magnifyStyle, setMagnifyStyle] = useState({});
  const magnifyRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = magnifyRef.current!.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;

    setMagnifyStyle({
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "200%", // Adjust this to control the magnification level

    });
  };

  const handleMouseLeave = () => {
    setMagnifyStyle({
      backgroundPosition: "center",
      backgroundSize: "100%", // Reset to default size when the cursor leaves
    });
  };

  return (
    <div className="flex items-start justify-start relative mt-6">
      {/* Thumbnails */}
      <div className="flex flex-col gap-y-4">
        {images.map((image, index) => (
          <Container
            key={image.id}
            onClick={() => setSelectedImageIndex(index)}
            className={`relative aspect-[29/34] w-16 h-16 overflow-hidden cursor-pointer ${
              index === selectedImageIndex ? "border-2 border-purple-500" : ""
            }`}
            id={image.id}
          >
            <Image
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              fill
              sizes="64px"
              style={{
                objectFit: "cover",
              }}
            />
          </Container>
        ))}
      </div>

      {/* Main Image with Magnify on Hover */}
      <Container
        className="relative aspect-[29/34] flex-[0.75] overflow-hidden bg-ui-bg-subtle ml-4"
        ref={magnifyRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `url(${images[selectedImageIndex].url})`,
          backgroundSize: "200%", // Adjust this to control the magnification level
          ...magnifyStyle,
        }}
      >
        <Image
          src={images[selectedImageIndex].url}
          priority
          className="absolute inset-0 rounded-rounded opacity-0 hover:cursor-zoom-in"
          alt={`Product image ${selectedImageIndex + 1}`}
          fill
          sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
          style={{
            objectFit: "cover",
          }}
        />
      </Container>
    </div>
  );
};

export default ImageGallery;
