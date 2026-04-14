import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  // No basePath needed — site is served from the root of the custom domain.
  return path.startsWith('/') ? path : `/${path}`;
}
