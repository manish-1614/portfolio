import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/portfolio' : '';
  return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
}
