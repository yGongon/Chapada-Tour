/**
 * Utility to optimize image URLs for ImageKit and Unsplash.
 * 
 * @param url Original image URL
 * @param width Desired width in pixels
 * @param quality Quality from 1-100
 * @returns Optimized URL
 */
export const optimizeImageUrl = (url: string, width: number = 800, quality: number = 80): string => {
  if (!url) return '';

  // ImageKit Optimization
  if (url.includes('ik.imagekit.io')) {
    // Check if there are already query params
    const separator = url.includes('?') ? '&' : '?';
    // ImageKit uses tr:w-XXX,q-YY for transformations
    // We append it to the URL. If it's a path-based transformation, it's different, 
    // but query-based is safer for existing URLs.
    return `${url}${separator}tr=w-${width},q-${quality},f-auto`;
  }

  // Unsplash Optimization
  if (url.includes('images.unsplash.com')) {
    const urlObj = new URL(url);
    urlObj.searchParams.set('w', width.toString());
    urlObj.searchParams.set('q', quality.toString());
    urlObj.searchParams.set('auto', 'format');
    urlObj.searchParams.set('fit', 'crop');
    return urlObj.toString();
  }

  return url;
};

/**
 * Generates a srcset string for responsive images.
 */
export const generateSrcSet = (url: string, widths: number[] = [400, 800, 1200, 1600]): string => {
  return widths
    .map(w => `${optimizeImageUrl(url, w)} ${w}w`)
    .join(', ');
};
