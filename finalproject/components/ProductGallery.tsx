"use client";

import { useState } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
  title: string;
};

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="grid grid-cols-[110px_minmax(0,1fr)] sm:grid-cols-[126px_minmax(0,1fr)] gap-3">
      <div className="flex flex-col gap-3">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`relative aspect-square w-full rounded-2xl overflow-hidden bg-[#F0EEED] ${
              selectedImage === image
                ? "border border-black"
                : "border border-transparent"
            }`}
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              fill
              sizes="126px"
              className="object-contain p-2"
            />
          </button>
        ))}
      </div>

      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#F0EEED]">
        <Image
          src={selectedImage}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 70vw, 35vw"
          className="object-contain p-5 sm:p-8"
        />
      </div>
    </div>
  );
}
