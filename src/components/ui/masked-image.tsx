import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type MaskedImageVariant =
  | "shape1"
  | "shape2"
  | "shape3"
  | "shape4"
  | "shape5"
  | "shape6"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6";

interface MaskedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  variant?: MaskedImageVariant;
  maskVariant?: MaskedImageVariant;  // Added for backward compatibility
  className?: string;
  maskClassName?: string;
  fallback?: React.ReactNode;
}

const getMaskUrl = (variant: MaskedImageVariant): string => {
  // Normalize variant numbers to shape format
  const normalizedVariant = variant.startsWith("shape") ? variant : `shape${variant}`;
  const variantKey = normalizedVariant.replace(/^shape/, "") as MaskedImageVariant;
  
  const maskMap: Record<string, string> = {
    "1": "/mask-shape-1.svg",
    "2": "/mask-shape-2.svg",
    "3": "/mask-shape-3.svg",
    "4": "/mask-shape-4.svg",
    "5": "/mask-shape-5.svg",
    "6": "/mask-shape-6.svg",
    shape1: "/mask-shape-1.svg",
    shape2: "/mask-shape-2.svg",
    shape3: "/mask-shape-3.svg",
    shape4: "/mask-shape-4.svg",
    shape5: "/mask-shape-5.svg",
    shape6: "/mask-shape-6.svg",
  };

  return maskMap[variantKey] || maskMap["1"];
};

export const MaskedImage: React.FC<MaskedImageProps> = ({
  src,
  alt,
  width,
  height,
  variant = "shape1",
  maskVariant, // For compatibility with components using maskVariant
  className,
  maskClassName,
  fallback,
}) => {
  // Use maskVariant if provided, otherwise fall back to variant
  const effectiveVariant = maskVariant || variant;
  const maskUrl = getMaskUrl(effectiveVariant);
  const [imgError, setImgError] = React.useState(false);

  // Determine which placeholder image to use based on alt text
  const getPlaceholderImage = () => {
    const altLower = alt.toLowerCase();
    if (altLower.includes("profile") || altLower.includes("portrait") || altLower.includes("avatar")) {
      return "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400";
    } else if (altLower.includes("about")) {
      return "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400";
    } else if (altLower.includes("project")) {
      const projectNum = alt.match(/\d+/);
      const projectImages = [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
        "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
        "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
      ];
      if (projectNum && projectNum[0]) {
        const index = parseInt(projectNum[0]) - 1;
        if (index >= 0 && index < projectImages.length) {
          return projectImages[index];
        }
      }
      // Random project image if no number found
      return projectImages[Math.floor(Math.random() * projectImages.length)];
    }
    // Default image
    return "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400";
  };

  if (fallback && (imgError || !src || src === '/')) {
    return <>{fallback}</>;
  }

  return (
    <Image
      className={cn(
        "mask-no-repeat object-cover mask-size-[100%_100%] mask-center",
        className,
        maskClassName
      )}
      style={{ maskImage: `url(${maskUrl})` }}
      src={imgError || !src || src === '/' ? getPlaceholderImage() : src}
      alt={alt}
      width={width}
      height={height}
      onError={() => setImgError(true)}
    />
  );
};
